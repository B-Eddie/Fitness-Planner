import Link from "next/link"
import { Header } from "./Header"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-8 border-t border-border/50 bg-background">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-sm text-muted-foreground">© 2025 FitSync AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 