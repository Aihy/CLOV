"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, ArrowRight, ChevronLeft } from "lucide-react"

interface OrderState {
  package: {
    name: string
    price: string
    priceValue: number
    includes3DModeling: boolean
  } | null
  has3DModel: boolean | null
  modelingAddOn: {
    name: string
    price: number
    complexity: string
  } | null
  needsRenders: boolean | null
  renderPackage: {
    name: string
    price: number
    quantity: number
  } | null
}

const PRICE_VALUES = {
  startup: { inr: 25000, usd: 299 },
  pro: { inr: 55000, usd: 699 },
  premium: { inr: 170500, usd: 2049 },
}

const PRICES = {
  startup: { inr: "₹25,000/-", usd: "$299" },
  pro: { inr: "₹55,000/-", usd: "$699" },
  premium: { inr: "₹1,70,500/-", usd: "$2,049" },
}

type Currency = "INR" | "USD"

function guessLocalCurrency(): Currency {
  const lang = typeof navigator !== "undefined" ? navigator.language : ""
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : ""
  if (/-(IN|PK|BD)\b/i.test(lang) || /(Kolkata|Karachi|Dhaka)/i.test(tz || "")) return "INR"
  return "USD"
}

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [isInitialized, setIsInitialized] = useState(false)
  const [totalSteps, setTotalSteps] = useState(4)
  const [currency, setCurrency] = useState<Currency>("USD")
  const [order, setOrder] = useState<OrderState>({
    package: null,
    has3DModel: null,
    modelingAddOn: null,
    needsRenders: null,
    renderPackage: null,
  })

  // Add state for order configuration
  const [orderConfig, setOrderConfig] = useState({
    whatsappNumber: "+918384092211",
    modelingOptions: {
      simple: { price_usd: 35, price_inr: 3000, description: "Basic shapes, minimal details" },
      medium: { price_usd: 60, price_inr: 5000, description: "Moderate details, textures" },
      complex: { price_usd: 120, price_inr: 10000, description: "High detail, advanced geometry" },
    },
    renderOptions: {
      basic: { price_usd: 25, price_inr: 2000, quantity: 3 },
      standard: { price_usd: 35, price_inr: 3000, quantity: 5 },
      premium: { price_usd: 60, price_inr: 5000, quantity: 10 },
    },
  })

  // Load configuration
  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      const content = JSON.parse(savedContent)
      if (content.orderForm) {
        setOrderConfig(content.orderForm)
      }
    }
  }, [])

  // Load currency from geo API
  useEffect(() => {
    let cancelled = false
    async function loadCurrency() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        if (!res.ok) throw new Error("geo failed")
        const data = await res.json()
        if (!cancelled) setCurrency(data?.currency === "INR" ? "INR" : "USD")
      } catch {
        if (!cancelled) setCurrency(guessLocalCurrency())
      }
    }
    loadCurrency()
    return () => {
      cancelled = true
    }
  }, [])

  // Initialize order from URL params only once
  useEffect(() => {
    if (isInitialized || currency === null) return

    const plan = searchParams.get("plan")
    if (plan && ["startup", "pro", "premium"].includes(plan.toLowerCase())) {
      const planKey = plan.toLowerCase() as keyof typeof PRICES
      const planName = plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase()

      const packageData = {
        name: planName,
        price: currency === "INR" ? PRICES[planKey].inr : PRICES[planKey].usd,
        priceValue: currency === "INR" ? PRICE_VALUES[planKey].inr : PRICE_VALUES[planKey].usd,
        includes3DModeling: planKey === "premium" || planKey === "startup", // Both Premium and Startup include modeling
      }

      setOrder({
        package: packageData,
        has3DModel: null,
        modelingAddOn: null,
        needsRenders: null,
        renderPackage: null,
      })

      // Calculate total steps based on package
      if (packageData.includes3DModeling) {
        setTotalSteps(3) // Skip 3D modeling question and selection for Startup and Premium
      } else {
        setTotalSteps(4) // Pro plan goes through all steps
      }

      setIsInitialized(true)
    } else {
      router.push("/")
    }
  }, [searchParams, router, isInitialized, currency])

  const calculateTotal = () => {
    let total = order.package?.priceValue || 0
    if (order.modelingAddOn) total += order.modelingAddOn.price
    if (order.renderPackage) total += order.renderPackage.price
    return total
  }

  const formatPrice = (price: number) => {
    if (currency === "INR") {
      return `₹${price.toLocaleString()}`
    } else {
      return `$${price.toLocaleString()}`
    }
  }

  const handleNext = () => {
    if (currentStep === 1) {
      // For Startup/Premium (includes 3D modeling), go straight to renders
      if (order.package?.includes3DModeling) {
        setCurrentStep(2) // Go to renders question
      } else {
        // For Pro plan, check if user has 3D model
        if (order.has3DModel === false) {
          setCurrentStep(2) // Go to modeling selection
        } else if (order.has3DModel === true) {
          setCurrentStep(3) // Skip modeling, go to renders question
        }
      }
    } else if (currentStep === 2) {
      if (order.package?.includes3DModeling) {
        setCurrentStep(3) // Summary for Startup/Premium
      } else {
        setCurrentStep(3) // Go to renders question for Pro
      }
    } else if (currentStep === 3) {
      setCurrentStep(4) // Summary
    }
  }

  const handleBack = () => {
    if (currentStep === 1) {
      router.push("/")
      return
    }

    if (currentStep === 2) {
      setCurrentStep(1) // Always go back to step 1
    } else if (currentStep === 3) {
      // If we're on renders/summary step for plans with included modeling, go back to step 1
      if (order.package?.includes3DModeling) {
        setCurrentStep(1)
      } else {
        // For Pro plan, check if we came from modeling selection
        if (order.has3DModel === false) {
          setCurrentStep(2) // Go back to modeling selection
        } else {
          setCurrentStep(1) // Go back to 3D model question
        }
      }
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateWhatsAppMessage = () => {
    let message = `Hi, I would like to order:\n\n`
    message += `📦 Package: ${order.package?.name} - ${order.package?.price}\n`

    if (order.modelingAddOn) {
      const modelingPrice = formatPrice(order.modelingAddOn.price)
      message += `🎨 3D Modeling: ${order.modelingAddOn.name} - ${modelingPrice}\n`
    }

    if (order.renderPackage) {
      const renderPrice = formatPrice(order.renderPackage.price)
      message += `🖼️ Renders: ${order.renderPackage.name} (${order.renderPackage.quantity} renders) - ${renderPrice}\n`
    }

    message += `\n💰 Total: ${formatPrice(calculateTotal())}\n\n`
    message += `Currency: ${currency}\n` // Debug line to verify currency
    message += `Please confirm the details and let me know the next steps.`

    return encodeURIComponent(message)
  }

  const previewWhatsAppMessage = () => {
    const message = generateWhatsAppMessage()
    const decodedMessage = decodeURIComponent(message)
    alert(`WhatsApp Message Preview:\n\n${decodedMessage}`)
  }

  // Update WhatsApp URL generation
  const handleConfirmOrder = () => {
    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${orderConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
    router.push("/")
  }

  const updateOrder = (updates: Partial<OrderState>) => {
    setOrder((prev) => ({ ...prev, ...updates }))
  }

  const getProgressPercentage = () => {
    return (currentStep / totalSteps) * 100
  }

  const getStepContent = () => {
    // Step 1: 3D Model Question (only for Pro plan)
    if (currentStep === 1 && !order.package?.includes3DModeling) {
      return {
        title: "Do you have a 3D model?",
        subtitle: "We need to know if you already have a 3D model or if we should create one for you.",
        options: [
          {
            id: "yes",
            title: "Yes, I have one",
            emoji: "✅",
            action: () => {
              updateOrder({ has3DModel: true })
              setTimeout(handleNext, 300)
            },
          },
          {
            id: "no",
            title: "No, create one for me",
            emoji: "🎨",
            action: () => {
              updateOrder({ has3DModel: false })
              setTimeout(handleNext, 300)
            },
          },
        ],
      }
    }

    // Step 2: 3D Modeling Selection (only for Pro plan if user doesn't have model)
    if (currentStep === 2 && !order.package?.includes3DModeling && !order.has3DModel) {
      return {
        title: "Choose modeling complexity",
        subtitle: "Select the level that matches your product requirements.",
        options: [
          {
            name: "Simple",
            price_inr: orderConfig.modelingOptions.simple.price_inr,
            price_usd: orderConfig.modelingOptions.simple.price_usd,
            complexity: orderConfig.modelingOptions.simple.description,
            emoji: "🔷",
          },
          {
            name: "Medium",
            price_inr: orderConfig.modelingOptions.medium.price_inr,
            price_usd: orderConfig.modelingOptions.medium.price_usd,
            complexity: orderConfig.modelingOptions.medium.description,
            emoji: "🔶",
          },
          {
            name: "Complex",
            price_inr: orderConfig.modelingOptions.complex.price_inr,
            price_usd: orderConfig.modelingOptions.complex.price_usd,
            complexity: orderConfig.modelingOptions.complex.description,
            emoji: "💎",
          },
        ].map((option) => {
          const price = currency === "INR" ? option.price_inr : option.price_usd
          const priceDisplay = currency === "INR" ? `+₹${price.toLocaleString()}` : `+$${price}`

          return {
            id: option.name,
            title: option.name,
            price: priceDisplay,
            emoji: option.emoji,
            action: () => {
              updateOrder({
                modelingAddOn: {
                  name: option.name,
                  price: price,
                  complexity: option.complexity,
                },
              })
              setTimeout(handleNext, 300)
            },
          }
        }),
      }
    }

    // Step 1 for Startup/Premium OR Step 2/3 for Pro: Renders Question
    const isRenderStep =
      (currentStep === 1 && order.package?.includes3DModeling) || // Startup/Premium first step
      (currentStep === 2 && order.package?.includes3DModeling) || // This shouldn't happen but safety
      (currentStep === 3 && !order.package?.includes3DModeling) // Pro plan after modeling

    if (isRenderStep) {
      return {
        title: "Need 3D renders?",
        subtitle: "High-quality still images perfect for marketing materials.",
        options: [
          {
            id: "yes",
            title: "Yes, add renders",
            emoji: "🖼️",
            action: () => {
              updateOrder({ needsRenders: true })
              setTimeout(handleNext, 300)
            },
          },
          {
            id: "no",
            title: "No, animation only",
            emoji: "🎬",
            action: () => {
              updateOrder({ needsRenders: false, renderPackage: null })
              setTimeout(handleNext, 300)
            },
          },
        ],
      }
    }

    // Render Package Selection
    if (order.needsRenders && !order.renderPackage) {
      return {
        title: "Choose render package",
        subtitle: "Select the number of high-quality renders you need.",
        options: [
          {
            name: "Basic Pack",
            quantity: orderConfig.renderOptions.basic.quantity,
            price_inr: orderConfig.renderOptions.basic.price_inr,
            price_usd: orderConfig.renderOptions.basic.price_usd,
            emoji: "📸",
          },
          {
            name: "Standard Pack",
            quantity: orderConfig.renderOptions.standard.quantity,
            price_inr: orderConfig.renderOptions.standard.price_inr,
            price_usd: orderConfig.renderOptions.standard.price_usd,
            emoji: "📷",
          },
          {
            name: "Premium Pack",
            quantity: orderConfig.renderOptions.premium.quantity,
            price_inr: orderConfig.renderOptions.premium.price_inr,
            price_usd: orderConfig.renderOptions.premium.price_usd,
            emoji: "🎥",
          },
        ].map((option) => {
          const price = currency === "INR" ? option.price_inr : option.price_usd
          const priceDisplay = currency === "INR" ? `+₹${price.toLocaleString()}` : `+$${price}`

          return {
            id: option.name,
            title: option.name,
            subtitle: `${option.quantity} renders`,
            price: priceDisplay,
            emoji: option.emoji,
            action: () => {
              updateOrder({
                renderPackage: {
                  name: option.name,
                  price: price,
                  quantity: option.quantity,
                },
              })
              setTimeout(handleNext, 300)
            },
          }
        }),
      }
    }

    // Summary
    return {
      title: "Order summary",
      subtitle: "Review your selections before confirming.",
      isSummary: true,
    }
  }

  // Show loading state until initialized
  if (!isInitialized || !order.package) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[#C6FF3A] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const stepContent = getStepContent()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Cleaner Inline Header */}
      <div className="sticky top-0 z-50 liquid-glass-header border-b border-neutral-900">
        <div className="px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2 hover:bg-neutral-800 rounded-full -ml-2 sm:p-2.5"
            >
              {currentStep === 1 ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>
            {/* Inline Plan Name and Price */}
            <div className="flex items-center justify-between flex-1 mx-3 sm:mx-4">
              <div className="text-base font-semibold text-white sm:text-lg">{order.package.name} Plan</div>
              <div className="text-base font-bold text-[#C6FF3A] sm:text-lg">{formatPrice(calculateTotal())}</div>
            </div>
            <div className="w-8 sm:w-10" /> {/* Spacer for balance */}
          </div>

          {/* Refined Progress Bar */}
          <div className="h-0.5 bg-neutral-800 rounded-full overflow-hidden sm:h-1">
            <div
              className="h-full bg-[#C6FF3A] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content with Responsive Spacing */}
      <div className="px-4 py-8 pb-32 sm:px-6 sm:py-12 sm:pb-40">
        <div className="max-w-sm mx-auto sm:max-w-md">
          {stepContent.isSummary ? (
            // Summary View
            <div className="space-y-8 sm:space-y-10">
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">{stepContent.title}</h2>
                <p className="text-neutral-400 text-base leading-relaxed sm:text-lg">{stepContent.subtitle}</p>
              </div>

              <Card className="border-neutral-800 liquid-glass rounded-xl sm:rounded-2xl">
                <CardContent className="p-5 space-y-4 sm:p-8 sm:space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-800 sm:py-4">
                    <div>
                      <h4 className="font-semibold text-white text-base sm:text-lg">{order.package.name} Plan</h4>
                      <p className="text-neutral-400 text-sm mt-0.5 sm:mt-1">3D Animation Package</p>
                    </div>
                    <span className="font-bold text-white text-base sm:text-lg">{order.package.price}</span>
                  </div>

                  {order.modelingAddOn && (
                    <div className="flex justify-between items-center py-3 border-b border-neutral-800 sm:py-4">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">
                          3D Modeling - {order.modelingAddOn.name}
                        </h4>
                        <p className="text-neutral-400 text-xs mt-0.5 sm:text-sm sm:mt-1">
                          {order.modelingAddOn.complexity}
                        </p>
                      </div>
                      <span className="font-bold text-white text-sm sm:text-base">
                        +{formatPrice(order.modelingAddOn.price)}
                      </span>
                    </div>
                  )}

                  {order.renderPackage && (
                    <div className="flex justify-between items-center py-3 border-b border-neutral-800 sm:py-4">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{order.renderPackage.name}</h4>
                        <p className="text-neutral-400 text-xs mt-0.5 sm:text-sm sm:mt-1">
                          {order.renderPackage.quantity} renders
                        </p>
                      </div>
                      <span className="font-bold text-white text-sm sm:text-base">
                        +{formatPrice(order.renderPackage.price)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-4 bg-[#C6FF3A]/10 rounded-xl px-4 mt-4 sm:py-6 sm:rounded-2xl sm:px-6 sm:mt-6">
                    <h4 className="text-lg font-bold text-white sm:text-xl">Total</h4>
                    <span className="text-2xl font-bold text-[#C6FF3A] sm:text-3xl">
                      {formatPrice(calculateTotal())}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            // Question View with Better Mobile UX
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl font-bold text-white leading-tight sm:text-3xl">{stepContent.title}</h2>
                <p className="text-neutral-400 text-base leading-relaxed max-w-xs mx-auto sm:text-xl sm:max-w-sm">
                  {stepContent.subtitle}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {stepContent.options?.map((option) => (
                  <Button
                    key={option.id}
                    onClick={option.action}
                    variant="outline"
                    className="w-full h-auto p-4 text-left liquid-glass hover:liquid-glass-enhanced transition-all duration-200 group rounded-2xl sm:p-6 bg-transparent"
                  >
                    <div className="flex items-center gap-4 w-full sm:gap-5">
                      <div className="text-2xl flex-shrink-0 sm:text-3xl">{option.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-white text-base group-hover:text-[#C6FF3A] transition-colors sm:text-lg">
                            {option.title}
                          </div>
                          {option.price && (
                            <div className="text-[#C6FF3A] font-bold text-sm sm:text-base">{option.price}</div>
                          )}
                        </div>
                        {option.subtitle && (
                          <div className="text-neutral-400 text-sm mt-1 sm:text-base">{option.subtitle}</div>
                        )}
                      </div>
                      <ArrowRight className="h-5 w-5 text-neutral-600 group-hover:text-[#C6FF3A] transition-colors flex-shrink-0 sm:h-6 sm:w-6 sm:ml-3" />
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Optimized Bottom CTA */}
      {stepContent.isSummary && (
        <div className="fixed bottom-0 left-0 right-0 liquid-glass-header border-t border-neutral-800 p-4 sm:p-8">
          <div className="max-w-sm mx-auto sm:max-w-md space-y-3">
            {/* Preview button for testing */}
            <Button
              onClick={previewWhatsAppMessage}
              variant="outline"
              className="w-full h-10 text-sm border-neutral-700 text-neutral-300 hover:bg-neutral-800 bg-transparent"
            >
              Preview Message
            </Button>

            <Button
              onClick={handleConfirmOrder}
              className="w-full h-12 text-base font-semibold bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90 rounded-xl shadow-lg shadow-[#C6FF3A]/20 sm:h-16 sm:text-xl sm:rounded-2xl"
            >
              Send Order via WhatsApp
              <ArrowRight className="h-4 w-4 ml-2 sm:h-6 sm:w-6 sm:ml-3" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
