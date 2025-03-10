import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="FitSync AI Logo"
            width={40}
            height={40}
            className="drop-shadow-neon"
          />
          <span className="font-bold text-xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            FitSync AI
          </span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/dashboard" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Dashboard
          </Link>
          <Link 
            href="/workouts" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Workouts
          </Link>
          <Link 
            href="/profile" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  )
} 