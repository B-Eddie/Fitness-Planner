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
      <header className="fixed top-0 w-full border-b border-blue-800/30 bg-[#050A14]/90 backdrop-blur-md z-50">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            {/* Enhanced Logo */}
            <div className="relative w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 border border-blue-400/20 rounded-xl"></div>
              <div 
                className="relative w-5 h-5 border-[2.5px] border-white rounded-full flex items-center justify-center"
              >
                <div 
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  style={{
                    boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.9)'
                  }}
                ></div>
              </div>
            </div>
            
            {/* Enhanced Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wide text-white">
                FitSync<span className="text-blue-400">AI</span>
              </span>
              <div className="h-[2px] w-full bg-blue-500/80"></div>
            </div>
          </div>
          
          {/* Navigation - slightly enhanced styling */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm text-blue-50/90 hover:text-blue-300 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-blue-50/90 hover:text-blue-300 transition-colors">
              Pricing
            </Link>
            <Link href="/download" className="text-sm text-blue-50/90 hover:text-blue-300 transition-colors">
              Download
            </Link>
            <Button asChild variant="outline" size="sm" className="border-blue-500/50 hover:border-blue-400 text-blue-50">
              <Link href="/signin">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen py-24 md:py-32 overflow-hidden">
          {/* Main Background */}
          <div className="absolute inset-0 bg-[#050A14]">
            {/* Primary Light Column - Enhanced */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[8px] bg-transparent overflow-hidden">
              {/* Core Beam */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-blue-500/30"
                style={{
                  boxShadow: '0 0 100px 15px rgba(59, 130, 246, 0.8)',
                  animation: 'core-beam-enhanced 4s ease-in-out infinite'
                }}
              ></div>
              
              {/* Enhanced Animated Particles Rising */}
              <div className="absolute inset-x-0 bottom-0 h-full">
                {[...Array(30)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 bg-blue-300"
                    style={{
                      width: `${3 + Math.random() * 3}px`,
                      height: `${80 + Math.random() * 60}px`,
                      bottom: `${-40 + (i * 3.5)}%`,
                      opacity: 0.9 + (Math.random() * 0.1),
                      boxShadow: '0 0 12px 3px rgba(59, 130, 246, 0.8)',
                      animation: `particle-rise ${5 + (Math.random() * 3)}s linear infinite ${i * 0.15}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Expanding Light Ripples */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500/40 rounded-full"
                  style={{
                    width: '12px',
                    height: '12px',
                    opacity: 0,
                    boxShadow: '0 0 15px 3px rgba(59, 130, 246, 0.4)',
                    animation: `ripple-expand ${3 + i * 0.5}s ease-out infinite ${i * 0.6}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced Geometric DNA Helix Pattern */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[500px] -translate-x-1/2">
              <div className="relative h-full">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="absolute left-0 right-0">
                    <div 
                      className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent"
                      style={{
                        top: `${4 + i * 3}%`,
                        width: `${Math.sin((i * 0.5) + 1) * 150 + 300}px`,
                        left: `${Math.sin(i * 0.3) * 80}px`,
                        boxShadow: '0 0 15px 2px rgba(59, 130, 246, 0.4)',
                        animation: `dna-sway ${2 + i % 3}s ease-in-out infinite`,
                        animationDelay: `${i * 0.08}s`
                      }}
                    ></div>
                    <div 
                      className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
                      style={{
                        top: `${4 + i * 3}%`,
                        width: `${Math.sin((i * 0.5) + 4) * 150 + 300}px`,
                        right: `${Math.sin(i * 0.3) * 80}px`,
                        boxShadow: '0 0 15px 2px rgba(59, 130, 246, 0.4)',
                        animation: `dna-sway ${2 + i % 3}s ease-in-out infinite`,
                        animationDelay: `${i * 0.08 + 1.5}s`
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Neural Network Nodes */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full max-w-6xl mx-auto">
                {[...Array(40)].map((_, i) => {
                  const topPosition = 10 + Math.random() * 80;
                  const leftPosition = 10 + Math.random() * 80;
                  return (
                    <div
                      key={i}
                      className="absolute bg-blue-500/70 rounded-full"
                      style={{
                        width: `${2 + Math.random() * 3}px`,
                        height: `${2 + Math.random() * 3}px`,
                        top: `${topPosition}%`,
                        left: `${leftPosition}%`,
                        boxShadow: '0 0 12px 3px rgba(59, 130, 246, 0.6)',
                        animation: `node-pulse ${2 + Math.random() * 1.5}s infinite ${Math.random() * 2}s`
                      }}
                    >
                      {/* Enhanced Neural Connections */}
                      {i % 2 === 0 && (
                        <div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-blue-500/30"
                          style={{
                            width: `${200 + Math.random() * 150}px`,
                            height: `${200 + Math.random() * 150}px`,
                            boxShadow: '0 0 30px 2px rgba(59, 130, 246, 0.15) inset',
                            animation: `connection-pulse ${3 + Math.random() * 2}s infinite ${Math.random() * 2}s`
                          }}
                        ></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* New Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-blue-500/40 rounded-full"
                  style={{
                    width: `${1 + Math.random() * 2}px`,
                    height: `${1 + Math.random() * 2}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: '0 0 8px 2px rgba(59, 130, 246, 0.4)',
                    animation: `float-particle ${10 + Math.random() * 10}s linear infinite ${Math.random() * 5}s`
                  }}
                ></div>
              ))}
            </div>

            {/* New Energy Waves */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                    animation: `energy-wave ${8 + i * 2}s ease-in-out infinite ${i * 2}s`,
                    transform: 'scale(1)',
                    opacity: 0
                  }}
                ></div>
              ))}
            </div>
            
            {/* Enhanced Ambient Light Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-blue-900/25 to-blue-950/20"></div>
            
            {/* Enhanced Upper Light Burst */}
            <div 
              className="absolute left-1/2 top-20 -translate-x-1/2 w-[800px] h-[400px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                filter: 'blur(50px)',
                animation: 'burst-pulse 6s ease-in-out infinite'
              }}
            ></div>
            
            {/* Enhanced Bottom Light Burst */}
            <div 
              className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1000px] h-[500px]"
              style={{
                background: 'radial-gradient(ellipse at center bottom, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                filter: 'blur(70px)',
                animation: 'burst-pulse-strong 7s ease-in-out infinite 1s'
              }}
            ></div>
            
            {/* Enhanced Side Glow Effects */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px]"
              style={{
                background: 'radial-gradient(ellipse at left center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(70px)',
                animation: 'side-glow-pulse 10s ease-in-out infinite'
              }}
            ></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px]"
              style={{
                background: 'radial-gradient(ellipse at right center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(70px)',
                animation: 'side-glow-pulse 10s ease-in-out infinite 5s'
              }}
            ></div>
            
            {/* Improved Vignette */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
          </div>

          {/* Enhanced Content */}
          <div className="container relative px-6 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="relative">
                {/* New Pre-headline Badge */}
                <div 
                  data-aos="fade-down"
                  data-aos-duration="600"
                  className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-700/30 to-blue-500/30 backdrop-blur-sm border border-blue-500/40"
                >
                  <span className="text-blue-300 font-medium tracking-wide text-sm">AI-POWERED FITNESS REVOLUTION</span>
                </div>
                
              <h1 
                data-aos="fade-up"
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight pb-2"
              >
                Transform Your Body.<br className="hidden md:block" /> <span className="italic">Without the Guesswork.</span>
              </h1>
                <div className="absolute -inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent blur-sm"></div>
              </div>
              
              <p 
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-2xl md:text-3xl lg:text-4xl text-blue-50 mb-6 max-w-3xl mx-auto font-light"
              >
                Meet the world's smartest fitness coach in your pocket—tailoring every workout to your body, goals, and recovery.
              </p>

              {/* Results Stats Block */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mb-12 py-4 px-6 rounded-2xl bg-blue-950/20 border border-blue-500/20 backdrop-blur-sm max-w-2xl mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-blue-400">3×</span>
                    <p className="text-sm text-blue-100/80">Faster Results</p>
                  </div>
                  <div className="hidden md:block w-px h-12 bg-blue-500/20"></div>
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-blue-400">20×</span>
                    <p className="text-sm text-blue-100/80">More Affordable</p>
                  </div>
                </div>
              </div>
              
              <div 
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="text-lg bg-blue-600 hover:bg-blue-700 border-0 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 font-medium"
                >
                  <Link href="/signup">Start Your Free Trial →</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="text-lg border-blue-500/50 hover:border-blue-400 text-blue-50 backdrop-blur-sm"
                >
                  <Link href="/download">Download App</Link>
                </Button>
              </div>
              
              {/* Social Proof Section */}
              <div 
                data-aos="fade-up"
                data-aos-delay="300"
                className="py-6 px-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <div className="flex -space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center text-xs font-bold text-blue-900">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 border-2 border-blue-500/50 flex items-center justify-center text-xs font-bold text-blue-100">
                    +3K
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-blue-50/90">
                    <span className="font-semibold text-blue-300">4.9/5</span> from <span className="font-semibold text-blue-300">3,000+</span> reviews on App Store & Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section - Updated for consistency */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-[#050A14]"></div>
          
          <div className="container relative px-6 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div data-aos="fade-up" className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20">
                <span className="text-blue-400 font-medium text-sm">POWERFUL FEATURES</span>
              </div>
              <h2 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="text-4xl md:text-5xl font-bold mb-5 text-white"
              >
                AI-Powered Precision Training
              </h2>
              <p 
                data-aos="fade-up" 
                data-aos-delay="150"
                className="text-xl text-blue-100/80 max-w-3xl mx-auto"
              >
                Our advanced technology creates the perfect workout plan for your unique body and goals, adjusting in real-time as you progress.
              </p>
            </div>
            
            {/* Features Grid - Updated styling */}
            <div className="space-y-32 max-w-7xl mx-auto">
              {/* Feature 1 - Updated */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right" className="space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">AI-Powered Workout Planning</h3>
                  <p className="text-xl text-blue-100/80 leading-relaxed">
                    Our AI creates personalized training programs that adapt in real-time to your performance, recovery, and goals. Every rep is optimized for maximum results.
                  </p>
                  <ul className="space-y-3">
                    {['Smart rep detection', 'Real-time form correction', 'Progressive overload optimization'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-blue-100/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div 
                  data-aos="fade-left" 
                  data-aos-delay="200" 
                  className="rounded-xl overflow-hidden relative shadow-2xl shadow-blue-900/20 border border-white/10 aspect-video bg-[#0A101F]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20"></div>
                  <div className="p-8 relative h-full flex items-center justify-center">
                    <div className="absolute top-4 left-4 bg-white/10 rounded-md px-2 py-1 backdrop-blur-sm border border-white/20">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-500/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 animate-pulse"></div>
                      </div>
                      <div className="space-y-3 max-w-xs mx-auto">
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded"></div>
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-300 rounded w-1/2 mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 & 3 - Apply similar updates to maintain consistency */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div 
                  data-aos="fade-right" 
                  data-aos-delay="200" 
                  className="rounded-xl overflow-hidden relative shadow-2xl shadow-blue-900/20 border border-white/10 aspect-video md:order-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20"></div>
                  <div className="p-8 relative h-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i} 
                          className="aspect-square rounded-lg flex items-center justify-center overflow-hidden relative"
                          style={{
                            background: `linear-gradient(to bottom right, rgba(59, 130, 246, ${0.1 + (i * 0.05)}), rgba(34, 211, 238, ${0.1 + (i * 0.05)}))`,
                            animationDelay: `${i * 0.1}s`,
                            animation: 'pulse 2s infinite'
                          }}
                        >
                          <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                          <div className={`h-${1 + (i % 3)} w-1/2 bg-blue-400/80 rounded-full`}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div data-aos="fade-left" className="space-y-6 md:order-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-600/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Dynamic Workout Adjustments</h3>
                  <p className="text-xl text-blue-100/80 leading-relaxed">
                    Our system adapts in real-time to how your body responds, adjusting intensity, volume, and exercise selection for optimal results without plateaus.
                  </p>
                  <ul className="space-y-3">
                    {['Fatigue detection', 'Auto-adjusted workout intensity', 'Recovery-based scheduling'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-blue-100/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Feature 3 - Updated */}
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right" className="space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-600/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Seamless Health Integration</h3>
                  <p className="text-xl text-blue-100/80 leading-relaxed">
                    Connect with all your favorite health devices and apps. We integrate data from your sleep, heart rate, and activity trackers for truly holistic fitness.
                  </p>
                  <ul className="space-y-3">
                    {['Apple Health & Google Fit compatible', 'Sleep quality analysis', 'Heart rate zone training'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-blue-100/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div 
                  data-aos="fade-left" 
                  data-aos-delay="200" 
                  className="rounded-xl overflow-hidden relative shadow-2xl shadow-blue-900/20 border border-white/10 aspect-video"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-400/20"></div>
                  <div className="p-8 relative h-full flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="flex justify-around mb-8">
                        {['Sleep', 'Heart', 'Steps'].map((item, i) => (
                          <div key={i} className="text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-300"></div>
                            </div>
                            <span className="text-xs text-blue-200">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="h-24 relative">
                        <div className="absolute inset-x-0 bottom-0 h-full">
                          <div className="h-full w-full flex items-end">
                            {[...Array(24)].map((_, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-[1px]"
                                style={{ height: `${15 + Math.sin(i * 0.5) * 10 + Math.random() * 20}%` }}
                              ></div>
                            ))}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-950/80 h-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-[#050A14]"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-3"></div>
          
          <div className="container relative px-6 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div data-aos="fade-up" className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20">
                <span className="text-blue-400 font-medium text-sm">SUCCESS STORIES</span>
              </div>
              <h2 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="text-4xl md:text-5xl font-bold mb-5 text-blue-400"
              >
                Hear From Our Users
              </h2>
              <p 
                data-aos="fade-up" 
                data-aos-delay="150"
                className="text-xl text-blue-100/70 max-w-3xl mx-auto"
              >
                Thousands have transformed their fitness journey with FitSync AI. Here's what some of them have to say.
              </p>
            </div>
            
            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Sarah K.",
                  role: "Marathon Runner",
                  image: "/placeholder-avatar1.png",
                  quote: "FitSync AI adapted my training perfectly around my marathon prep. I shaved 12 minutes off my personal best in just 8 weeks!",
                  rating: 5
                },
                {
                  name: "Michael T.",
                  role: "Busy Professional",
                  image: "/placeholder-avatar2.png",
                  quote: "As a CEO with limited time, FitSync AI gives me efficient, effective workouts that fit my unpredictable schedule. Game changer!",
                  rating: 5
                },
                {
                  name: "Jessica L.",
                  role: "Fitness Newbie",
                  image: "/placeholder-avatar3.png",
                  quote: "I was intimidated by fitness apps before, but FitSync makes everything so simple. Down 24 pounds in 3 months!",
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div 
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={150 + (i * 100)}
                  className="rounded-xl overflow-hidden relative shadow-xl shadow-blue-900/10 border border-white/10 p-8 backdrop-blur-sm bg-blue-950/20"
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 inline-block mr-1 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="mb-6 text-lg text-blue-100/90 italic leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-blue-200/70">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Featured Results */}
            <div className="mt-16 text-center">
              <div 
                data-aos="fade-up"
                className="inline-flex items-center bg-blue-950/20 rounded-full px-4 py-2 border border-blue-500/20"
              >
                <span className="text-blue-300 font-medium">Average user results after 12 weeks</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto mt-10">
                {[
                  { metric: "89%", desc: "Achieved their primary fitness goal" },
                  { metric: "3.2×", desc: "Faster results vs. traditional training" },
                  { metric: "94%", desc: "Program adherence rate" },
                  { metric: "14.8lb", desc: "Average fat loss (for weight loss goals)" }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                      {stat.metric}
                    </div>
                    <div className="text-sm md:text-base text-blue-100/70">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-[#050A14]"></div>
          
          <div className="container relative px-6 md:px-8">
            <div 
              data-aos="fade-up"
              className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 bg-gradient-to-b from-blue-950/60 to-[#030509]"
            >              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]"></div>
              <div className="absolute inset-px rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent"></div>
              <div className="p-10 md:p-14 text-center relative">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Unleash Your Future Self with AI
                </h2>
                <p className="text-xl md:text-2xl text-blue-100/80 mb-10 max-w-3xl mx-auto">
                  Experience the next evolution in fitness. Our AI coach adapts and evolves with you, delivering superhuman results through intelligent training.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="text-lg bg-blue-600 hover:bg-blue-700 border-0 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300 px-8 py-6 font-medium"
                  >
                    <Link href="/signup">Activate Your AI Coach →</Link>
                  </Button>
                  
                  <div className="text-blue-100/70 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>7-day free trial</span>
                  </div>
                </div>
                
                <div className="mt-8 text-blue-100/60 text-sm">
                  Join thousands experiencing the future of fitness
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-blue-900/20 bg-black/40 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050A14]"></div>
        
        <div className="container px-6 md:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                {/* Logo */}
                <div className="relative w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 border border-white/10 rounded-md"></div>
                  <div 
                    className="relative w-4 h-4 border-2 border-white rounded-full flex items-center justify-center"
                  >
                    <div 
                      className="w-1 h-1 bg-white rounded-full"
                    ></div>
                  </div>
                </div>
                
                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-wide text-white">
                    FitSync<span className="text-blue-400">AI</span>
                  </span>
                </div>
              </div>
              <p className="text-blue-100/70 mb-4 max-w-xs">
                The world's most intelligent AI fitness coach, tailoring your workout to your body and goals for optimal results.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <Link 
                    key={social} 
                    href={`https://${social}.com`}
                    className="w-8 h-8 rounded-full bg-blue-950/50 flex items-center justify-center text-blue-100/70 hover:bg-blue-800/30 transition-colors border border-blue-800/30"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'AI Technology', 'Apps', 'Integrations'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Help Center', 'Community', 'Contact', 'Privacy', 'Terms'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-blue-100/70 hover:text-blue-300 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-100/60 mb-4 md:mb-0">© 2025 FitSync AI. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy" className="text-sm text-blue-100/60 hover:text-blue-300 transition-colors">
                Privacy Policy
            </Link>
              <Link href="/terms" className="text-sm text-blue-100/60 hover:text-blue-300 transition-colors">
                Terms of Service
            </Link>
              <Link href="/cookies" className="text-sm text-blue-100/60 hover:text-blue-300 transition-colors">
                Cookie Policy
            </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

