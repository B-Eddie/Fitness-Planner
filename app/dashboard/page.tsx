"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  Activity,
  Heart,
  User,
  Bell,
  BarChart3,
  Dumbbell,
  Apple,
  Clock,
  Flame,
  ArrowRight,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">FitSync AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          {/* Today's Overview */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Today's Overview</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>March 4, 2025</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    Recovery Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Recovery Score</span>
                      <span className="font-medium">87%</span>
                    </div>
                    <Progress value={87} max={100} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Your recovery is optimal for a challenging workout today.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Health Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Resting HR</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">62</span>
                        <span className="text-xs text-green-500 mb-1">-3</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Sleep</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">7.2h</span>
                        <span className="text-xs text-green-500 mb-1">+0.5</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">HRV</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">48ms</span>
                        <span className="text-xs text-green-500 mb-1">+4</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Steps</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">6.2k</span>
                        <span className="text-xs text-muted-foreground mb-1">/10k</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Flame className="h-5 w-5 text-primary" />
                    Today's Workout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Upper Body Strength</span>
                      <span className="text-sm text-muted-foreground">45 min</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Scheduled for 5:30 PM - Optimized for your recovery status
                    </p>
                    <Button className="mt-2 w-full" asChild>
                      <Link href="/workout">
                        Start Workout
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Weekly Progress */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Weekly Progress</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Weekly Goal Progress</h3>
                      <p className="text-sm text-muted-foreground">3 of 5 workouts completed</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="font-medium">60%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <span className="text-sm text-muted-foreground mb-2">{day}</span>
                        <div
                          className={`h-16 w-full rounded-md flex items-center justify-center ${i < 3 ? "bg-primary/20 text-primary" : "bg-secondary"}`}
                        >
                          {i < 3 && <Dumbbell className="h-5 w-5" />}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Total Volume</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">12,450 kg</span>
                        <span className="text-xs text-green-500 mb-1">+8%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Active Minutes</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">185 min</span>
                        <span className="text-xs text-green-500 mb-1">+15%</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-muted-foreground">Calories Burned</span>
                      <div className="flex items-end gap-1">
                        <span className="text-xl font-semibold">1,850</span>
                        <span className="text-xs text-green-500 mb-1">+5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* AI Insights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">AI Insights</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Strength Progress</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your bench press strength has increased by 12% in the last month. Consider increasing weight by
                        5kg for your next session.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Recovery Optimization</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your sleep quality has improved, but HRV is still lower than optimal. Consider adding 10 minutes
                        of meditation before bed to enhance recovery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                      <Apple className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Nutrition Suggestion</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Based on your workout intensity, aim for 120g of protein today. Your post-workout meal should
                        include complex carbs to replenish glycogen stores.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="border-t mt-auto">
        <div className="container py-4">
          <nav className="flex justify-between">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab("home")}
            >
              <Activity className="h-5 w-5" />
              <span className="text-xs">Home</span>
            </Button>
            <Button
              variant={activeTab === "workouts" ? "default" : "ghost"}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab("workouts")}
            >
              <Dumbbell className="h-5 w-5" />
              <span className="text-xs">Workouts</span>
            </Button>
            <Button
              variant={activeTab === "calendar" ? "default" : "ghost"}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab("calendar")}
            >
              <Calendar className="h-5 w-5" />
              <span className="text-xs">Calendar</span>
            </Button>
            <Button
              variant={activeTab === "stats" ? "default" : "ghost"}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab("stats")}
            >
              <BarChart3 className="h-5 w-5" />
              <span className="text-xs">Stats</span>
            </Button>
            <Button
              variant={activeTab === "profile" ? "default" : "ghost"}
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2"
              onClick={() => setActiveTab("profile")}
            >
              <User className="h-5 w-5" />
              <span className="text-xs">Profile</span>
            </Button>
          </nav>
        </div>
      </footer>
    </div>
  )
}

