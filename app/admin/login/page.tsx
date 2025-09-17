"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simple client-side authentication
    setTimeout(() => {
      // Default credentials
      if (
        (email === "admin@theskitbit.com" && password === "1234") ||
        (email === "Addy@theskitbit.com" && password === "1234")
      ) {
        // Set a cookie that expires in 24 hours
        const expiryDate = new Date()
        expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000)
        document.cookie = `admin-session=authenticated; path=/; expires=${expiryDate.toUTCString()}`
        router.push("/admin")
      } else {
        setError("Invalid email or password")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row">
      {/* Left side - only visible on desktop */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 p-12 flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">SK</span>
            </div>
            <span className="text-2xl font-semibold text-white">Skitbit</span>
          </div>
          <h1 className="text-4xl font-bold text-white mt-12">Welcome to Skitbit Admin</h1>
          <p className="text-purple-100 mt-4 max-w-md">
            Manage your website content, pricing, and settings from one central dashboard.
          </p>
        </div>
        <div className="mt-auto">
          <Image
            src="/images/admin-cover.png"
            alt="Admin Dashboard"
            width={500}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right side - login form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        {/* Mobile header - only visible on mobile */}
        <div className="flex md:hidden items-center gap-3 mb-8 w-full">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">SK</span>
          </div>
          <span className="text-2xl font-semibold text-white">Skitbit</span>
        </div>

        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Sign in to your account</h2>
            <p className="text-neutral-400 mt-2">Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg flex items-center gap-3">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@theskitbit.com"
                className="bg-[#1a1a1a] border-neutral-800 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-neutral-200">
                  Password
                </Label>
                <button type="button" className="text-sm text-[#C6FF3A] hover:underline">
                  Forgot password?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#1a1a1a] border-neutral-800 text-white"
                required
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full bg-[#C6FF3A] text-black hover:bg-[#C6FF3A]/90">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-neutral-400 text-sm">
              Need help? Contact{" "}
              <a href="mailto:support@theskitbit.com" className="text-[#C6FF3A] hover:underline">
                support@theskitbit.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
