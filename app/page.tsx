import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-24 text-center bg-gradient-to-b from-background to-accent/20">
        <div className="w-full max-w-3xl mx-auto animate-fadeIn">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="FitSync AI Logo"
              width={100}
              height={100}
              className="mx-auto drop-shadow-lg"
            />
          </div>    
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-slideUp">
            FitSync AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed animate-slideUp animation-delay-200">
            An AI-powered personal trainer that plans, adapts, and optimizes your workouts in real time, ensuring
            smarter training with less guesswork.
          </p>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground leading-relaxed animate-slideUp animation-delay-300">
            Get fit, stay healthy, and achieve your goals with personalized training plans and real-time adjustments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slideUp animation-delay-400">
            <Button asChild size="lg" className="text-lg py-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg py-6 hover:scale-105 transition-transform duration-300 shadow-lg">
              <Link href="/signin">Sign In</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-8 bg-accent/40 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300 shadow-lg animate-slideUp animation-delay-500">
              <h3 className="font-semibold text-xl mb-3">Smart Scheduling</h3>
              <p className="text-muted-foreground">Automatically adapts to your calendar and lifestyle</p>
            </div>
            <div className="p-8 bg-accent/40 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300 shadow-lg animate-slideUp animation-delay-600">
              <h3 className="font-semibold text-xl mb-3">Real-time Adjustments</h3>
              <p className="text-muted-foreground">Modifies workouts based on your performance and recovery</p>
            </div>
            <div className="p-8 bg-accent/40 backdrop-blur-sm rounded-xl hover:scale-105 transition-all duration-300 shadow-lg animate-slideUp animation-delay-700">
              <h3 className="font-semibold text-xl mb-3">Health Integration</h3>
              <p className="text-muted-foreground">Syncs with Apple Watch and health data for personalized plans</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t bg-accent/5">
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

