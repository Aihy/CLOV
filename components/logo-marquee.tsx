"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const socialIcons = [
    {
      name: "X (Twitter)",
      image: "/images/x-icon.png",
      url: "https://twitter.com/clov_ai",
    },
    {
      name: "GitHub",
      image: "/images/github-icon.png",
      url: "https://github.com/clov-ai",
    },
    {
      name: "Dexscreener",
      image: "/images/dexscreener-icon.png",
      url: "https://dexscreener.com/clov",
    },
    {
      name: "Pump.fun",
      image: "/images/pumpfun-icon.png",
      url: "https://pump.fun/clov",
    },
    {
      name: "Telegram",
      image: "/images/telegram-icon.png",
      url: "https://t.me/clov_ai",
    },
  ]

  const LogoCard = ({ icon, rowId }: { icon: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <a
        href={icon.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-110"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition-colors">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
            <Image
              src={icon.image || "/placeholder.svg"}
              alt={icon.name}
              fill
              className="object-contain opacity-90 hover:opacity-100 transition-opacity"
              sizes="(min-width: 1024px) 64px, (min-width: 640px) 56px, 48px"
            />
          </div>
        </div>
      </a>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-lime-300 sm:text-5xl text-center w-full drop-shadow-[0_0_20px_rgba(132,204,22,0.5)]">
            Social Links for "CLOV"
          </h2>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 border-white/50 bg-black/60 text-white hover:bg-black/80 hover:border-white/70"
          >
            Learn More
          </Button>
        </div>

        {/* Social Icons Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...socialIcons, ...socialIcons, ...socialIcons].map((icon, index) => (
                <LogoCard key={`first-${index}`} icon={icon} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
              }}
            >
              {[...socialIcons, ...socialIcons, ...socialIcons].map((icon, index) => (
                <LogoCard key={`second-${index}`} icon={icon} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
