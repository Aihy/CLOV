export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#0a0a0a]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-400 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Skitbit. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-lime-300">
            Privacy
          </a>
          <a href="#terms" className="hover:text-lime-300">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
