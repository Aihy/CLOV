import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const buttonNew = (
    <Button asChild className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300">
      <a href="#contact" rel="noopener noreferrer">
        Start Analysis
      </a>
    </Button>
  )

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/clov-logo.png" alt="CLOV logo" width={64} height={64} className="h-16 w-16" />
            <p className="text-xl uppercase tracking-[0.25em] text-lime-300/80">CLOV</p>
          </div>
          <h1 className="mt-3 text-center text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            <span className="text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">VALUE THE COIN BY CLOUT</span>
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-gray-300 leading-relaxed">
            Submit any social media influencer's identity and get an AI-powered market cap estimation for their
            potential cryptocurrency token through comprehensive multi-model analysis.
          </p>
          <div className="mt-8">{buttonNew}</div>
        </div>
      </div>
    </section>
  )
}
