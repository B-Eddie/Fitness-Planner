"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Apple, Github } from "lucide-react"
import Image from "next/image"

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center justify-center mb-4">
            <Image src="/placeholder.svg?height=40&width=40" alt="FitSync AI Logo" width={40} height={40} />
          </div>
          <CardTitle className="text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">Sign in to your FitSync AI account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full">Sign In</Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Apple className="h-5 w-5" />
              Sign in with Apple
            </Button>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <Github className="h-5 w-5" />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline flex items-center justify-center gap-1"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to home
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

