"use client"

import { useEffect, useRef, useState } from "react"

interface LazyVideoProps {
  src: string
  className?: string
  poster?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  playsInline?: boolean
  "aria-label"?: string
}

export default function LazyVideo({
  src,
  className = "",
  poster,
  autoplay = false,
  loop = false,
  muted = true,
  controls = false,
  playsInline = true,
  "aria-label": ariaLabel,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    let observer: IntersectionObserver | null = null

    const onIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && !loaded) {
          // Set the src attribute to start loading
          el.src = src
          el.load()

          // If autoplay is enabled, try to play when ready
          if (autoplay) {
            const playVideo = async () => {
              try {
                await el.play()
              } catch (error) {
                // Autoplay might be blocked
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
          }

          setLoaded(true)
          // Don't disconnect observer - we want to keep monitoring visibility
        } else if (!entry.isIntersecting && loaded && autoplay) {
          // Video is out of view and has autoplay - pause it but keep it loaded
          try {
            el.pause()
          } catch (error) {
            console.log("Error pausing video:", error)
          }
        } else if (entry.isIntersecting && loaded && autoplay) {
          // Video is back in view and has autoplay - resume playing
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
  }, [src, loaded, autoplay])

  return (
    <video
      ref={videoRef}
      className={className}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      controls={controls}
      preload="none"
      poster={poster}
      aria-label={ariaLabel}
      {...props}
    >
      Your browser does not support the video tag.
    </video>
  )
}
