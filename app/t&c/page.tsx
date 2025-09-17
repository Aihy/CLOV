import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions — Skitbit",
  description: "Terms and conditions for Skitbit 3D animation services.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.10),transparent_55%)]" />
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Terms and Conditions</h1>
                  <p className="text-neutral-400 text-lg">
                    Welcome to Skitbit. By accessing our website, you agree to these terms and conditions. Please read
                    them carefully.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
                  <p className="text-neutral-300">
                    These Terms and Conditions govern your use of the Skitbit website and services. By using our
                    website, you accept these Terms in full.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Intellectual Property Rights</h2>
                  <p className="text-neutral-300">
                    Unless otherwise stated, Skitbit owns all the project files. This includes all electronic files,
                    drawings, source files, and any materials provided to the client, which remain the sole property of
                    Skitbit International, even if shared.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-400">
                    <li>You must not republish material from this site.</li>
                    <li>
                      You must not reproduce, duplicate, or copy material for commercial purposes without permission.
                    </li>
                    <li>You must not edit or modify any content without consent.</li>
                    <li>Currently all the content on the site are just place-holders (site is under production)</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Acceptable Use</h2>
                  <p className="text-neutral-300">
                    You must not use this website in any way that causes, or may cause, damage to the website or
                    impairment of the availability or accessibility of the website.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    4. Limitation of Liability & Subjectivity of Content
                  </h2>
                  <p className="text-neutral-300">
                    Skitbit will not be liable for any direct, indirect, or consequential loss or damage arising under
                    these Terms or in connection with our website or services. The perceived quality, style, or
                    suitability of content created by us remains subjective and cannot be used as grounds to increase
                    scope of work. Revisions are strictly governed by our{" "}
                    <Link href="/revisions" className="text-lime-300 underline">
                      revision policy
                    </Link>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Changes to These Terms</h2>
                  <p className="text-neutral-300">
                    We may revise these Terms from time to time. The revised Terms will apply from the date of
                    publication on this site.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
                  <p className="text-neutral-300">If you have any questions about these Terms, please contact us at:</p>
                  <p className="text-neutral-300">
                    Email:{" "}
                    <a href="mailto:hello@theskitbit.com" className="text-lime-300 underline">
                      hello@theskitbit.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
