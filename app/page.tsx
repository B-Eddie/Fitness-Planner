'use client'

import { useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function WelcomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // false means animation occurs every time
      easing: 'ease-out',
      delay: 0,
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="FitSync AI Logo"
              width={32}
              height={32}
              className="drop-shadow-neon"
            />
            <span className="text-xl font-semibold text-foreground">FitSync AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Download
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/signin">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 
                data-aos="fade-up"
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0d98d9] via-[#0d98d9]/80 to-[#0d98d9]/60 bg-clip-text text-transparent leading-tight pb-2"
              >
                The Only AI That Knows Your Next Move.
              </h1>
              <p 
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
              >
                An intelligent fitness app that designs real-time adaptive workouts, uniquely tailored to your biometrics, goals, and daily life. Seamlessly synced, effortlessly personalized.
              </p>
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="text-lg">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/download">Download App</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-accent/20">
          <div className="container px-6 md:px-8">
            <div className="space-y-32 max-w-7xl mx-auto">
              {/* Feature 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right" className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Smart Training
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Workout Planning</h2>
                  <p className="text-xl text-muted-foreground">
                    Advanced algorithms create and adjust your training plan in real-time, ensuring optimal progression and results.
                  </p>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="bg-accent/30 rounded-xl aspect-video"></div>
              </div>

              {/* Feature 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div data-aos="fade-left" className="space-y-6 md:order-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Real-time Adaptation
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Dynamic Workout Adjustments</h2>
                  <p className="text-xl text-muted-foreground">
                    Intelligent system that adapts to your performance, recovery, and schedule in real-time.
                  </p>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="bg-accent/30 rounded-xl aspect-video md:order-1"></div>
              </div>

              {/* Feature 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right" className="space-y-6">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Health Integration
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Seamless Health Tracking</h2>
                  <p className="text-xl text-muted-foreground">
                    Connect with your favorite health devices for comprehensive fitness monitoring and insights.
                  </p>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" className="bg-accent/30 rounded-xl aspect-video"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/50">
        <div className="container px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 FitSync AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

