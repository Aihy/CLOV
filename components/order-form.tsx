"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ArrowLeft, ArrowRight, Check, Package, Palette, ImageIcon } from "lucide-react"
import Image from "next/image"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
  selectedPackage: {
    name: string
    price: string
    priceValue: number
    includes3DModeling: boolean
  } | null
}

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
    price_inr: number
    price_usd: number
    complexity: string
    emoji: string
  } | null
  needsRenders: boolean | null
  renderPackage: {
    name: string
    price_inr: number
    price_usd: number
    quantity: number
    emoji: string
  } | null
}

export function OrderForm({ isOpen, onClose, selectedPackage }: OrderFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [order, setOrder] = useState<OrderState>({
    package: null,
    has3DModel: null,
    modelingAddOn: null,
    needsRenders: null,
    renderPackage: null,
  })

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

  useEffect(() => {
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      const content = JSON.parse(savedContent)
      if (content.orderForm) {
        setOrderConfig(content.orderForm)
      }
    }
  }, [])

  const modelingOptions = [
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
  ]

  const renderOptions = [
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
  ]

  // Reset form when opened with new package
  useEffect(() => {
    if (isOpen && selectedPackage) {
      setOrder({
        package: selectedPackage,
        has3DModel: null,
        modelingAddOn: null,
        needsRenders: null,
        renderPackage: null,
      })
      setCurrentStep(1)
    }
  }, [isOpen, selectedPackage])

  const calculateTotal = () => {
    let total = order.package?.priceValue || 0
    if (order.modelingAddOn) total += order.modelingAddOn.price_inr
    if (order.renderPackage) total += order.renderPackage.price_inr
    return total
  }

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`
  }

  const handleNext = () => {
    if (currentStep === 1) {
      // If package includes 3D modeling (Startup or Premium), skip to render upsell
      if (order.package?.includes3DModeling) {
        setCurrentStep(3)
      } else {
        // For Pro plan, check if user has 3D model
        if (order.has3DModel) {
          setCurrentStep(3) // Skip modeling selection
        } else {
          setCurrentStep(2) // Go to modeling selection
        }
      }
    } else if (currentStep === 2) {
      setCurrentStep(3)
    } else if (currentStep === 3) {
      setCurrentStep(4)
    }
  }

  const handleBack = () => {
    if (currentStep === 3) {
      // If we skipped step 2, go back to step 1
      if (order.package?.includes3DModeling || order.has3DModel) {
        setCurrentStep(1)
      } else {
        setCurrentStep(2)
      }
    } else {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateWhatsAppMessage = () => {
    let message = `Hi, I would like to order:\n\n`
    message += `📦 Package: ${order.package?.name} - ${order.package?.price}\n`

    if (order.modelingAddOn) {
      message += `🎨 3D Modeling: ${order.modelingAddOn.name} - ₹${order.modelingAddOn.price_inr}\n`
    }

    if (order.renderPackage) {
      message += `🖼️ Renders: ${order.renderPackage.name} (${order.renderPackage.quantity} renders) - ₹${order.renderPackage.price_inr}\n`
    }

    message += `\n💰 Total: ${formatPrice(calculateTotal())}\n\n`
    message += `Please confirm the details and let me know the next steps.`

    return encodeURIComponent(message)
  }

  const handleConfirmOrder = () => {
    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${orderConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
    onClose()
  }

  const isNextDisabled = () => {
    if (currentStep === 1) {
      // For packages that don't include 3D modeling, user must answer the 3D model question
      if (!order.package?.includes3DModeling && order.has3DModel === null) {
        return true
      }
      return false
    }
    if (currentStep === 2) {
      return !order.modelingAddOn
    }
    if (currentStep === 3) {
      if (order.needsRenders === null) return true
      if (order.needsRenders && !order.renderPackage) return true
      return false
    }
    return false
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f0f0f] glass-border-enhanced rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C6FF3A]/20 rounded-lg flex items-center justify-center">
              <Package className="h-4 w-4 text-[#C6FF3A]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Order Configuration</h2>
              <p className="text-sm text-neutral-400">Step {currentStep} of 4</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-[#C6FF3A]/20 text-[#C6FF3A] border-[#C6FF3A]/30">
              Total: {formatPrice(calculateTotal())}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-3 bg-neutral-900/50">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                    step <= currentStep ? "bg-[#C6FF3A] text-black" : "bg-neutral-700 text-neutral-400"
                  }`}
                >
                  {step < currentStep ? <Check className="h-4 w-4" /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-8 h-0.5 mx-2 transition-colors ${
                      step < currentStep ? "bg-[#C6FF3A]" : "bg-neutral-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {/* Step 1: Package Confirmation */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Confirm Your Package</h3>
                <p className="text-neutral-400">Let's make sure we have the right package for you</p>
              </div>

              <Card className="glass-border-subtle border-neutral-800 bg-neutral-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{order.package?.name} Plan</h4>
                      <p className="text-neutral-400">
                        {order.package?.includes3DModeling
                          ? "Professional 3D animation package with modeling included"
                          : "Professional 3D animation package"}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#C6FF3A]">{order.package?.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Only show 3D model question for Pro plan */}
              {!order.package?.includes3DModeling && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Do you have a 3D model?</h4>
                  <p className="text-neutral-400">
                    If you don't have a 3D model, we can create one for you at an additional cost.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={order.has3DModel === true ? "default" : "outline"}
                      onClick={() => setOrder({ ...order, has3DModel: true })}
                      className={`h-16 ${
                        order.has3DModel === true
                          ? "bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90"
                          : "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <div className="text-center">
                        <Check className="h-5 w-5 mx-auto mb-1" />
                        <div className="font-medium">Yes, I have one</div>
                      </div>
                    </Button>
                    <Button
                      variant={order.has3DModel === false ? "default" : "outline"}
                      onClick={() => setOrder({ ...order, has3DModel: false })}
                      className={`h-16 ${
                        order.has3DModel === false
                          ? "bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90"
                          : "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                      }`}
                    >
                      <div className="text-center">
                        <Palette className="h-5 w-5 mx-auto mb-1" />
                        <div className="font-medium">No, create one</div>
                      </div>
                    </Button>
                  </div>
                </div>
              )}

              {/* For Startup/Premium plans, show what's included */}
              {order.package?.includes3DModeling && (
                <div className="space-y-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400" />
                      <div>
                        <h4 className="text-green-300 font-semibold">
                          {order.package.name === "Startup"
                            ? "Simple 3D Modeling Included"
                            : "Complex 3D Modeling Included"}
                        </h4>
                        <p className="text-green-200 text-sm">
                          Your package includes professional 3D modeling - no additional cost!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: 3D Modeling Add-on */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Choose 3D Modeling Complexity</h3>
                <p className="text-neutral-400">Select the complexity level that matches your product</p>
              </div>

              <div className="grid gap-4">
                {modelingOptions.map((option) => (
                  <Card
                    key={option.name}
                    className={`cursor-pointer transition-all hover:scale-[1.02] ${
                      order.modelingAddOn?.name === option.name
                        ? "glass-border-enhanced bg-[#C6FF3A]/10"
                        : "glass-border bg-neutral-900/50 hover:glass-border-enhanced"
                    }`}
                    onClick={() =>
                      setOrder({
                        ...order,
                        modelingAddOn: {
                          name: option.name,
                          price_inr: option.price_inr,
                          price_usd: option.price_usd,
                          complexity: option.complexity,
                          emoji: option.emoji,
                        },
                      })
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center">
                          <Image
                            src={`/placeholder-120x120.png?height=120&width=120&text=${option.name}+3D`}
                            alt={option.name}
                            width={48}
                            height={48}
                            className="rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-white">{option.name}</h4>
                            <span className="text-[#C6FF3A] font-semibold">+₹{option.price_inr.toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-neutral-400">{option.complexity}</p>
                        </div>
                        {order.modelingAddOn?.name === option.name && <Check className="h-5 w-5 text-[#C6FF3A]" />}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Render Upsell */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Need 3D Renders?</h3>
                <p className="text-neutral-400">High-quality still images of your 3D model</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Do you also need 3D renders?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={order.needsRenders === true ? "default" : "outline"}
                    onClick={() => setOrder({ ...order, needsRenders: true })}
                    className={`h-16 ${
                      order.needsRenders === true
                        ? "bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90"
                        : "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                    }`}
                  >
                    <div className="text-center">
                      <ImageIcon className="h-5 w-5 mx-auto mb-1" />
                      <div className="font-medium">Yes, add renders</div>
                    </div>
                  </Button>
                  <Button
                    variant={order.needsRenders === false ? "default" : "outline"}
                    onClick={() => setOrder({ ...order, needsRenders: false, renderPackage: null })}
                    className={`h-16 ${
                      order.needsRenders === false
                        ? "bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90"
                        : "border-neutral-700 text-neutral-300 hover:bg-neutral-800"
                    }`}
                  >
                    <div className="text-center">
                      <X className="h-5 w-5 mx-auto mb-1" />
                      <div className="font-medium">No, skip renders</div>
                    </div>
                  </Button>
                </div>
              </div>

              {order.needsRenders && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Choose Render Package</h4>
                  <div className="grid gap-3">
                    {renderOptions.map((option) => (
                      <Card
                        key={option.name}
                        className={`cursor-pointer transition-all hover:scale-[1.02] ${
                          order.renderPackage?.name === option.name
                            ? "glass-border-enhanced bg-[#C6FF3A]/10"
                            : "glass-border bg-neutral-900/50 hover:glass-border-enhanced"
                        }`}
                        onClick={() =>
                          setOrder({
                            ...order,
                            renderPackage: {
                              name: option.name,
                              price_inr: option.price_inr,
                              price_usd: option.price_usd,
                              quantity: option.quantity,
                              emoji: option.emoji,
                            },
                          })
                        }
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-white">{option.name}</h5>
                              <p className="text-sm text-neutral-400">{option.quantity} high-quality renders</p>
                            </div>
                            <div className="text-right">
                              <span className="text-[#C6FF3A] font-semibold">
                                +₹{option.price_inr.toLocaleString()}
                              </span>
                              {order.renderPackage?.name === option.name && (
                                <Check className="h-4 w-4 text-[#C6FF3A] ml-2 inline" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Summary */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Order Summary</h3>
                <p className="text-neutral-400">Review your selections before confirming</p>
              </div>

              <Card className="glass-border-subtle border-neutral-800 bg-neutral-900/50">
                <CardHeader>
                  <CardTitle className="text-white">Your Order</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                    <div>
                      <h4 className="font-medium text-white">{order.package?.name} Plan</h4>
                      <p className="text-sm text-neutral-400">3D Animation Package</p>
                    </div>
                    <span className="font-semibold text-white">{order.package?.price}</span>
                  </div>

                  {order.modelingAddOn && (
                    <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                      <div>
                        <h4 className="font-medium text-white">3D Modeling - {order.modelingAddOn.name}</h4>
                        <p className="text-sm text-neutral-400">{order.modelingAddOn.complexity}</p>
                      </div>
                      <span className="font-semibold text-white">
                        +₹{order.modelingAddOn.price_inr.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {order.renderPackage && (
                    <div className="flex justify-between items-center py-2 border-b border-neutral-800">
                      <div>
                        <h4 className="font-medium text-white">{order.renderPackage.name}</h4>
                        <p className="text-sm text-neutral-400">{order.renderPackage.quantity} renders</p>
                      </div>
                      <span className="font-semibold text-white">
                        +₹{order.renderPackage.price_inr.toLocaleString()}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-3 bg-[#C6FF3A]/10 rounded-lg px-4">
                    <h4 className="text-lg font-bold text-white">Total</h4>
                    <span className="text-2xl font-bold text-[#C6FF3A]">{formatPrice(calculateTotal())}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-neutral-800">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onClose : handleBack}
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {currentStep === 1 ? "Cancel" : "Back"}
          </Button>

          {currentStep < 4 ? (
            <Button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className={`${
                isNextDisabled()
                  ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                  : "bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90"
              }`}
            >
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleConfirmOrder} className="bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90">
              Confirm & Send via WhatsApp
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
