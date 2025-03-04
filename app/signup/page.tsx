"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Apple, Mail, Github } from "lucide-react"
import Image from "next/image"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Navigate to dashboard when complete
      window.location.href = "/dashboard"
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Image src="/placeholder.svg?height=40&width=40" alt="FitSync AI Logo" width={40} height={40} />
          </div>
          <CardTitle className="text-center">Create Your Account</CardTitle>
          <CardDescription className="text-center">
            Step {step} of {totalSteps}: {getStepDescription(step)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Button className="w-full flex items-center justify-center gap-2" onClick={nextStep}>
                <Apple className="h-5 w-5" />
                Continue with Apple
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={nextStep}>
                <Mail className="h-5 w-5" />
                Continue with Email
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2" onClick={nextStep}>
                <Github className="h-5 w-5" />
                Continue with Google
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground mb-6">
                  FitSync AI would like to access your health data to provide personalized workout recommendations
                </p>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Health Data"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center p-3 border rounded-md">
                  <div className="flex-1">
                    <p className="font-medium">Heart Rate Data</p>
                    <p className="text-sm text-muted-foreground">For workout intensity tracking</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="flex-1">
                    <p className="font-medium">Sleep Data</p>
                    <p className="text-sm text-muted-foreground">For recovery optimization</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
                <div className="flex items-center p-3 border rounded-md">
                  <div className="flex-1">
                    <p className="font-medium">Activity History</p>
                    <p className="text-sm text-muted-foreground">For personalized recommendations</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center" onClick={() => {}}>
                  <span className="text-lg font-medium mb-1">Beginner</span>
                  <span className="text-xs text-muted-foreground">New to fitness</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 flex flex-col items-center bg-accent"
                  onClick={() => {}}
                >
                  <span className="text-lg font-medium mb-1">Intermediate</span>
                  <span className="text-xs text-muted-foreground">Regular exerciser</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center" onClick={() => {}}>
                  <span className="text-lg font-medium mb-1">Advanced</span>
                  <span className="text-xs text-muted-foreground">Experienced</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center" onClick={() => {}}>
                  <span className="text-lg font-medium mb-1">Athletic</span>
                  <span className="text-xs text-muted-foreground">Competitive</span>
                </Button>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Primary Goal</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-auto py-3 flex flex-col items-center bg-accent"
                    onClick={() => {}}
                  >
                    <span className="text-sm">Muscle Gain</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 flex flex-col items-center" onClick={() => {}}>
                    <span className="text-sm">Fat Loss</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 flex flex-col items-center" onClick={() => {}}>
                    <span className="text-sm">Strength</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 flex flex-col items-center" onClick={() => {}}>
                    <span className="text-sm">Endurance</span>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-sm text-muted-foreground mb-6">
                  Connect your calendar to automatically schedule workouts
                </p>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Calendar"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
              </div>
              <div className="space-y-3">
                <Button className="w-full flex items-center justify-center gap-2">Connect Apple Calendar</Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Connect Google Calendar
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  Connect Outlook
                </Button>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Preferred Workout Times</h4>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="h-auto py-2 bg-accent" onClick={() => {}}>
                    Morning
                  </Button>
                  <Button variant="outline" className="h-auto py-2" onClick={() => {}}>
                    Afternoon
                  </Button>
                  <Button variant="outline" className="h-auto py-2" onClick={() => {}}>
                    Evening
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          ) : (
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
          )}
          <Button onClick={nextStep}>
            {step === totalSteps ? "Finish" : "Continue"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function getStepDescription(step: number): string {
  switch (step) {
    case 1:
      return "Account Creation"
    case 2:
      return "Health Data Access"
    case 3:
      return "Fitness Profile"
    case 4:
      return "Calendar Integration"
    default:
      return ""
  }
}

