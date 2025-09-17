"use client"

import { useEffect, useRef, useState } from "react"

export default function PhoneVideo({
  src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4",
  className = "",
  poster,
}: { src?: string; className?: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    let observer: IntersectionObserver | null = null

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && !loaded) {
          // Attach the source only when in view to lazy load
          const sourceEl = el.querySelector("source")
          if (sourceEl && !sourceEl.getAttribute("src")) {
            sourceEl.setAttribute("src", src)
            el.load()
          }

          // Wait for video to be ready before attempting to play
          const playVideo = async () => {
            try {
              await el.play()
            } catch (error) {
              // Autoplay might be blocked; will play on first interaction.
              console.log("Autoplay blocked:", error)
            }
          }

          if (el.readyState >= 3) {
            // Video is already loaded enough to play
            playVideo()
          } else {
            // Wait for video to load enough data
            el.addEventListener("canplay", playVideo, { once: true })
          }

          setLoaded(true)
          // Don't disconnect observer - we want to keep monitoring visibility
        } else if (!entry.isIntersecting && loaded) {
          // Video is out of view - pause it but keep it loaded
          try {
            el.pause()
          } catch (error) {
            console.log("Error pausing video:", error)
          }
        } else if (entry.isIntersecting && loaded) {
          // Video is back in view - resume playing
          try {
            await el.play()
          } catch (error) {
            console.log("Error resuming video:", error)
          }
        }
      })
    }

    observer = new IntersectionObserver(onIntersect, {
      rootMargin: "50px", // Start loading 50px before entering viewport
      threshold: 0.1,
    })
    observer.observe(el)

    return () => observer?.disconnect()
  }, [src, loaded])

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label="Skitbit app preview video"
      // Do not include controls to keep clean UI
    >
      <source data-src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
      Your browser does not support the video tag.
    </video>
  )
}
