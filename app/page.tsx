import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-24 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="FitSync AI Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">FitSync AI</h1>

          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            An AI-powered personal trainer that plans, adapts, and optimizes your workouts in real time, ensuring
            smarter training with less guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg py-6">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6">
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-accent rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">Automatically adapts to your calendar and lifestyle</p>
            </div>
            <div className="p-6 bg-accent rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Real-time Adjustments</h3>
              <p className="text-muted-foreground">Modifies workouts based on your performance and recovery</p>
            </div>
            <div className="p-6 bg-accent rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Health Integration</h3>
              <p className="text-muted-foreground">Syncs with Apple Watch and health data for personalized plans</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-sm text-muted-foreground">© 2025 FitSync AI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

