'use client'

import { useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AOS from 'aos'
import 'aos/dist/aos.css'
import './globals.css'

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
      <header className="fixed top-0 w-full border-b border-cyan-900/30 bg-background/90 backdrop-blur-md z-50">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            {/* Enhanced Logo */}
            <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-md flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"></div>
              <div className="absolute inset-0 border border-white/10 rounded-md"></div>
              <div 
                className="relative w-4 h-4 border-2 border-white rounded-full"
                style={{
                  boxShadow: '0 0 10px 1px rgba(56, 189, 248, 0.5) inset',
                }}
              >
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
                  style={{
                    boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.8)',
                    animation: 'pulse-subtle 2s infinite'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Enhanced Text */}
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                FitSync<span className="ml-[2px] text-blue-100/90">AI</span>
              </span>
              <div className="h-[2px] w-full bg-gradient-to-r from-blue-500/80 to-transparent"></div>
            </div>
          </div>
          
          {/* Navigation - slightly enhanced styling */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm text-blue-100/70 hover:text-cyan-300 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-blue-100/70 hover:text-cyan-300 transition-colors">
              Pricing
            </Link>
            <Link href="/download" className="text-sm text-blue-100/70 hover:text-cyan-300 transition-colors">
              Download
            </Link>
            <Button asChild variant="outline" size="sm" className="border-cyan-500/50 hover:border-cyan-400 text-blue-100">
              <Link href="/signin">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
          {/* Main Background */}
          <div className="absolute inset-0 bg-[#030508]">
            {/* Primary Light Column - THICKER */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] bg-transparent overflow-hidden">
              {/* Core Beam */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400 to-blue-400/30"
                style={{
                  boxShadow: '0 0 80px 10px rgba(56, 189, 248, 0.8)',
                  animation: 'core-beam-pulse 4s ease-in-out infinite'
                }}
              ></div>
              
              {/* Animated Particles Rising - MORE PROMINENT */}
              <div className="absolute inset-x-0 bottom-0 h-full">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 bg-blue-300"
                    style={{
                      width: `${2 + Math.random() * 2}px`,
                      height: `${60 + Math.random() * 40}px`,
                      bottom: `${-40 + (i * 6)}%`,
                      opacity: 0.7 + (Math.random() * 0.3),
                      boxShadow: '0 0 8px 2px rgba(56, 189, 248, 0.6)',
                      animation: `particle-rise ${7 + (Math.random() * 3)}s linear infinite ${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Expanding Light Ripples */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/30 rounded-full"
                  style={{
                    width: '10px',
                    height: '10px',
                    opacity: 0,
                    boxShadow: '0 0 10px 2px rgba(56, 189, 248, 0.3)',
                    animation: `ripple-expand ${4 + i}s ease-out infinite ${i * 0.8}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced Geometric DNA Helix Pattern */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[400px] -translate-x-1/2">
              <div className="relative h-full">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="absolute left-0 right-0">
                    <div 
                      className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
                      style={{
                        top: `${4 + i * 4}%`,
                        width: `${Math.sin((i * 0.5) + 1) * 120 + 250}px`,
                        left: `${Math.sin(i * 0.3) * 60}px`,
                        boxShadow: '0 0 10px 1px rgba(56, 189, 248, 0.3)',
                        animation: `dna-sway ${3 + i % 4}s ease-in-out infinite`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                    <div 
                      className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                      style={{
                        top: `${4 + i * 4}%`,
                        width: `${Math.sin((i * 0.5) + 4) * 120 + 250}px`,
                        right: `${Math.sin(i * 0.3) * 60}px`,
                        boxShadow: '0 0 10px 1px rgba(56, 189, 248, 0.3)',
                        animation: `dna-sway ${3 + i % 4}s ease-in-out infinite`,
                        animationDelay: `${i * 0.1 + 1.5}s`
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Neural Network Nodes */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full max-w-6xl mx-auto">
                {[...Array(30)].map((_, i) => {
                  const topPosition = 10 + Math.random() * 80;
                  const leftPosition = 10 + Math.random() * 80;
                  return (
                    <div
                      key={i}
                      className="absolute bg-blue-400/70 rounded-full"
                      style={{
                        width: `${2 + Math.random() * 2}px`,
                        height: `${2 + Math.random() * 2}px`,
                        top: `${topPosition}%`,
                        left: `${leftPosition}%`,
                        boxShadow: '0 0 8px 2px rgba(56, 189, 248, 0.5)',
                        animation: `node-pulse ${2.5 + Math.random() * 1.5}s infinite ${Math.random() * 2}s`
                      }}
                    >
                      {/* Enhanced Neural Connections */}
                      {i % 3 === 0 && (
                        <div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-blue-400/20"
                          style={{
                            width: `${150 + Math.random() * 100}px`,
                            height: `${150 + Math.random() * 100}px`,
                            boxShadow: '0 0 20px 1px rgba(56, 189, 248, 0.1) inset',
                            animation: `connection-pulse ${4 + Math.random() * 2}s infinite ${Math.random() * 2}s`
                          }}
                        ></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Enhanced Ambient Light Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-blue-900/15 to-blue-950/10"></div>
            
            {/* Upper Light Burst - REPOSITIONED */}
            <div 
              className="absolute left-1/2 top-20 -translate-x-1/2 w-[600px] h-[300px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
                animation: 'burst-pulse 5s ease-in-out infinite'
              }}
            ></div>
            
            {/* Bottom Light Burst - ENHANCED */}
            <div 
              className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px]"
              style={{
                background: 'radial-gradient(ellipse at center bottom, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
                filter: 'blur(60px)',
                animation: 'burst-pulse-strong 6s ease-in-out infinite 1s'
              }}
            ></div>
            
            {/* Additional Side Glow Effect */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at left center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                animation: 'side-glow-pulse 8s ease-in-out infinite'
              }}
            ></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at right center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
                filter: 'blur(60px)',
                animation: 'side-glow-pulse 8s ease-in-out infinite 4s'
              }}
            ></div>
            
            {/* Improved Vignette */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
          </div>

          {/* Enhanced Content */}
          <div className="container relative px-6 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="relative">
              <h1 
                data-aos="fade-up"
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent leading-tight pb-2"
                  style={{
                    textShadow: '0 0 40px rgba(56, 189, 248, 0.2)'
                  }}
              >
                  The Future of Fitness. Here. Now.
              </h1>
                <div className="absolute -inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm"></div>
              </div>
              <br></br>
              <p 
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-xl md:text-2xl text-cyan-200/80 mb-12 max-w-3xl mx-auto font-light"
              >
                Meet the world’s smartest fitness coach in your pocket—tailoring every workout to your body, goals, strength, and recovery. Achieve results 3× faster at 20× less cost than any human trainer. Personalized fitness, optimized instantly.
              </p>
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 border-0 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="text-lg border-cyan-500/50 hover:border-cyan-400 backdrop-blur-sm"
                >
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

