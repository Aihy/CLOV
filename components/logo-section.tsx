import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function LogoSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600/20 to-purple-500/20 border border-purple-500/30 px-4 py-2 text-sm font-medium text-purple-300">
            Our Clients
          </div>

          {/* Heading */}
          <h2 className="mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
            Over 100+ company
          </h2>

          {/* Subtitle */}
          <p className="mb-12 max-w-2xl text-lg text-neutral-400 sm:text-xl">
            Helping you to protect all your digital activity and data
          </p>

          {/* Logo Grid */}
          <div className="mb-12 w-full max-w-5xl">
            {/* Desktop & Tablet Grid */}
            <div className="hidden sm:grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {/* Row 1 */}
              <div className="col-span-2 flex items-center justify-center rounded-2xl liquid-glass px-8 py-6">
                <span className="text-xl font-light tracking-[0.2em] text-neutral-300">NORDSTROM</span>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-6">
                <div className="flex h-8 w-8 items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600"></div>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center rounded-2xl liquid-glass px-8 py-6">
                <span className="text-xl font-light tracking-[0.3em] text-neutral-300">TESLA</span>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-6">
                <div className="text-2xl text-neutral-300">🍎</div>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass px-6 py-6">
                <div className="rounded-full border-2 border-neutral-400 px-4 py-1">
                  <span className="text-sm font-serif italic text-neutral-300">Ford</span>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-6">
                <span className="text-lg font-bold tracking-wider text-neutral-300">GAP</span>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass px-6 py-6">
                <span className="text-lg font-light tracking-wide text-neutral-300">LACOSTE</span>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass px-6 py-6">
                <span className="text-xl font-bold text-neutral-300">ca</span>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-6">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-sm bg-neutral-400"></div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-center rounded-2xl liquid-glass px-8 py-6">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full border-2 border-neutral-400 flex items-center justify-center">
                    <div className="text-xs text-neutral-300">★</div>
                  </div>
                  <span className="text-lg font-light text-neutral-300">Mercedes-Benz</span>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-6">
                <div className="text-2xl text-neutral-300">🍎</div>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-6">
                <div className="text-2xl text-neutral-300">🎮</div>
              </div>
            </div>

            {/* Mobile Stack */}
            <div className="flex flex-col gap-4 sm:hidden">
              <div className="flex items-center justify-center rounded-2xl liquid-glass px-8 py-8">
                <span className="text-2xl font-light tracking-[0.2em] text-neutral-300">NORDSTROM</span>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-8">
                <div className="flex h-10 w-10 items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-600"></div>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass px-8 py-8">
                <span className="text-2xl font-light tracking-[0.3em] text-neutral-300">TESLA</span>
              </div>
              <div className="flex items-center justify-center rounded-2xl liquid-glass p-8">
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-3 w-3 rounded-sm bg-neutral-400"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="group rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-3 text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105">
            Try now for free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
