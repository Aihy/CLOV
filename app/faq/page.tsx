import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Frequently Asked Questions</h1>
                  <p className="text-neutral-400 text-lg">
                    Answers to common questions we get from brands about 3D animation and rendering for products.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. What types of products can you animate or render?
                  </h2>
                  <p className="text-neutral-300">
                    We can create photorealistic 3D animations and renders for almost any product — from beauty and
                    skincare to electronics, furniture, and luxury goods. If it exists (or is planned), we can bring it
                    to life.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. How long does a typical 3D animation take?</h2>
                  <p className="text-neutral-300">
                    Timelines vary depending on complexity, but a standard 15–20 second animation usually takes 7–14
                    working days after final concept approval.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Do you work with existing CAD files or need product samples?
                  </h2>
                  <p className="text-neutral-300">
                    We can work with both. If you have CAD or 3D models, we can import and refine them. If not, we can
                    create models from physical product samples or detailed reference images.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. How do you price your services?</h2>
                  <p className="text-neutral-300">
                    Pricing is based on animation length, complexity, number of renders, and modeling requirements. You
                    can view our detailed pricing on our{" "}
                    <a href="/pricing" className="text-lime-300 underline">
                      pricing page
                    </a>
                    .
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Can we request changes after delivery?</h2>
                  <p className="text-neutral-300">
                    Yes. All revisions are covered under our{" "}
                    <a href="/revisions" className="text-lime-300 underline">
                      revision policy
                    </a>
                    , which ensures smooth updates without unexpected scope creep.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Will the renders match our brand’s visual style?
                  </h2>
                  <p className="text-neutral-300">
                    Absolutely. We customize lighting, materials, camera angles, and animation pacing to fit your
                    brand’s identity and marketing needs.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">7. What formats do you deliver in?</h2>
                  <p className="text-neutral-300">
                    We typically deliver in MP4 (H.264) for videos and high-resolution PNG/JPG for stills. Other formats
                    like MOV, ProRes, or transparent-background renders are available on request.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Can you handle large-scale projects or bulk renders?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, we regularly work on bulk orders for 10+ animations or 50+ renders. We optimize workflows to
                    maintain quality and meet tight deadlines.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    9. Do you offer creative direction or only technical execution?
                  </h2>
                  <p className="text-neutral-300">
                    We do both. Our team can develop creative concepts, storyboards, and camera moves, or simply execute
                    your pre-approved vision.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">10. How do we get started?</h2>
                  <p className="text-neutral-300">
                    Simply{" "}
                    <a href="/contact" className="text-lime-300 underline">
                      contact us
                    </a>{" "}
                    with your project details, references, and timeline. We’ll provide a proposal and next steps.
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
