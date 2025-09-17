"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

const ACCENT = "#C6FF3A"

type YouTubeGridProps = {
  videoIds: string[]
}

// Minimal typings to avoid runtime imports
declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function YouTubeGrid({ videoIds }: YouTubeGridProps) {
  const containerIds = useRef(videoIds.map((_, i) => `yt-player-${i}-${Math.random().toString(36).slice(2)}`))
  const playersRef = useRef<any[]>([])
  const [apiReady, setApiReady] = useState(false)
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  // Load IFrame API once
  useEffect(() => {
    if (typeof window === "undefined") return

    const onReady = () => setApiReady(true)

    if (window.YT && window.YT.Player) {
      onReady()
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]')
      if (!existing) {
        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        document.body.appendChild(tag)
      }
      const prev = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        prev?.()
        onReady()
      }
    }
  }, [])

  // Build players when API is ready
  useEffect(() => {
    if (!apiReady) return
    // Clean up old players if any
    playersRef.current.forEach((p) => p?.destroy?.())
    playersRef.current = []

    containerIds.current.forEach((id, idx) => {
      const player = new window.YT.Player(id, {
        videoId: videoIds[idx],
        width: "100%",
        height: "100%",
        playerVars: {
          // Hide UI and keep design intact
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          iv_load_policy: 3,
          cc_load_policy: 0,
          // Autoplay is controlled via our custom buttons
        },
        events: {
          onStateChange: (e: any) => {
            const state = e?.data
            const YTP = window.YT?.PlayerState
            if (state === YTP?.PLAYING) {
              // Pause others
              playersRef.current.forEach((p, i) => {
                if (i !== idx) {
                  try {
                    p.pauseVideo()
                  } catch {}
                }
              })
              setPlayingIndex(idx)
            } else if (state === YTP?.PAUSED || state === YTP?.ENDED || state === YTP?.CUED) {
              setPlayingIndex((prev) => (prev === idx ? null : prev))
            }
          },
        },
      })
      playersRef.current[idx] = player
    })

    return () => {
      playersRef.current.forEach((p) => p?.destroy?.())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiReady, videoIds.join(",")])

  const handlePlay = (idx: number) => {
    const player = playersRef.current[idx]
    if (!player) return
    // Pause others first
    playersRef.current.forEach((p, i) => {
      if (i !== idx) {
        try {
          p.pauseVideo()
        } catch {}
      }
    })
    try {
      player.playVideo()
    } catch {}
  }

  const handlePause = (idx: number) => {
    const player = playersRef.current[idx]
    try {
      player.pauseVideo()
    } catch {}
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {containerIds.current.map((cid, idx) => (
        <div key={cid} className="group relative overflow-hidden rounded-2xl liquid-glass">
          <div className="relative z-0 aspect-video">
            <div id={cid} className="h-full w-full" />
          </div>

          {/* Hover gradient */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Overlay Controls */}
          <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex items-center justify-center">
            {playingIndex === idx ? (
              <button
                onClick={() => handlePause(idx)}
                className="pointer-events-auto rounded-full liquid-glass-header px-3 py-1 text-xs transition-colors"
                style={{ color: ACCENT }}
              >
                <span className="inline-flex items-center gap-1">
                  <Pause className="h-3.5 w-3.5" /> Pause
                </span>
              </button>
            ) : (
              <button
                onClick={() => handlePlay(idx)}
                className="pointer-events-auto rounded-full px-3 py-1 text-xs font-medium text-black transition-colors"
                style={{ backgroundColor: ACCENT }}
              >
                <span className="inline-flex items-center gap-1">
                  <Play className="h-3.5 w-3.5" /> Play
                </span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
