// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skitbit International",
    url: "https://theskitbit.com",
    logo: "https://theskitbit.com/logo.png",
    description:
      "Skitbit International is a 3D product animation agency serving clients in Miami, Los Angeles, New York, Canada, and the UK.",
    sameAs: [
      "https://www.instagram.com/skitbit",
      "https://www.linkedin.com/company/skitbit",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-555-5555",
        contactType: "customer service",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Miami" },
      { "@type": "Place", name: "Los Angeles" },
      { "@type": "Place", name: "New York" },
      { "@type": "Place", name: "Canada" },
      { "@type": "Place", name: "United Kingdom" },
    ],
  };

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About Skitbit International
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Pioneering the future of 3D product animation for global brands.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "3D Product Animation",
              desc: "Photo-realistic animations that showcase your products in stunning detail.",
            },
            {
              title: "Global Reach",
              desc: "Serving Miami, LA, New York, Canada, and the UK with world-class visuals.",
            },
            {
              title: "Cutting-edge Technology",
              desc: "Using the latest rendering engines and motion design tools.",
            },
            {
              title: "Brand Storytelling",
              desc: "Helping brands communicate their vision through immersive 3D visuals.",
            },
            {
              title: "Collaborative Workflow",
              desc: "Work directly with our creative team for maximum efficiency.",
            },
            {
              title: "SEO & Marketing Focus",
              desc: "Optimized content to enhance your visibility on search engines.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Let Skitbit International bring your products to life.
        </p>
        <a
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}
