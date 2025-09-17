export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#C6FF3A] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-lg">Loading dashboard...</p>
      </div>
    </div>
  )
}
