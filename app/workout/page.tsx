"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Play,
  Pause,
  SkipForward,
  Heart,
  Clock,
  Flame,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  RotateCcw,
} from "lucide-react"

export default function WorkoutPage() {
  const [isStarted, setIsStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(0)
  const [currentSet, setCurrentSet] = useState(1)
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null)

  const exercises = [
    {
      name: "Bench Press",
      sets: 4,
      reps: 8,
      weight: "65 kg",
      restTime: 90,
      completed: false,
      aiTip: "Focus on keeping your elbows at a 45° angle to protect your shoulders",
    },
    {
      name: "Incline Dumbbell Press",
      sets: 3,
      reps: 10,
      weight: "22 kg",
      restTime: 75,
      completed: false,
      aiTip: "Your left side is slightly weaker - focus on equal pressing power",
    },
    {
      name: "Cable Flyes",
      sets: 3,
      reps: 12,
      weight: "15 kg",
      restTime: 60,
      completed: false,
      aiTip: "Maintain tension throughout the movement for maximum chest activation",
    },
    {
      name: "Tricep Pushdowns",
      sets: 3,
      reps: 12,
      weight: "25 kg",
      restTime: 60,
      completed: false,
      aiTip: "Keep your elbows fixed at your sides throughout the movement",
    },
    {
      name: "Lateral Raises",
      sets: 3,
      reps: 15,
      weight: "10 kg",
      restTime: 60,
      completed: false,
      aiTip: "Based on your form, try slightly lower weight with perfect technique",
    },
  ]

  const startWorkout = () => {
    setIsStarted(true)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1)
      setCurrentSet(1)
    }
  }

  const nextSet = () => {
    if (currentSet < exercises[currentExercise].sets) {
      setCurrentSet(currentSet + 1)
    } else {
      nextExercise()
    }
  }

  const toggleExerciseDetails = (index: number) => {
    if (expandedExercise === index) {
      setExpandedExercise(null)
    } else {
      setExpandedExercise(index)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container py-4 flex items-center">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold ml-2">Upper Body Strength</h1>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          {!isStarted ? (
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Workout Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                      <Clock className="h-5 w-5 text-primary mb-1" />
                      <span className="text-sm font-medium">45 min</span>
                      <span className="text-xs text-muted-foreground">Duration</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Flame className="h-5 w-5 text-primary mb-1" />
                      <span className="text-sm font-medium">320 kcal</span>
                      <span className="text-xs text-muted-foreground">Est. Burn</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Heart className="h-5 w-5 text-primary mb-1" />
                      <span className="text-sm font-medium">Moderate</span>
                      <span className="text-xs text-muted-foreground">Intensity</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-accent rounded-md mb-4">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">
                      This workout has been optimized based on your recovery score of 87%. Focus on progressive overload
                      today.
                    </p>
                  </div>

                  <Button className="w-full" onClick={startWorkout}>
                    Start Workout
                  </Button>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-lg font-medium mb-3">Exercise Plan</h2>
                <div className="space-y-3">
                  {exercises.map((exercise, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div
                        className="p-4 flex items-center justify-between cursor-pointer"
                        onClick={() => toggleExerciseDetails(index)}
                      >
                        <div>
                          <h3 className="font-medium">{exercise.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exercise.sets} sets × {exercise.reps} reps • {exercise.weight}
                          </p>
                        </div>
                        {expandedExercise === index ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>

                      {expandedExercise === index && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="p-3 bg-accent rounded-md mb-2">
                            <div className="flex gap-2">
                              <AlertCircle className="h-5 w-5 text-primary flex-shrink-0" />
                              <p className="text-sm">{exercise.aiTip}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm">
                              <span className="text-muted-foreground">Rest Time: </span>
                              <span>{exercise.restTime} sec</span>
                            </div>
                            <div className="text-sm">
                              <span className="text-muted-foreground">Previous: </span>
                              <span>{Number.parseInt(exercise.weight) - 2.5} kg</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-bold">{exercises[currentExercise].name}</h2>
                        <p className="text-sm text-muted-foreground">
                          Set {currentSet} of {exercises[currentExercise].sets}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={togglePause}>
                          {isPaused ? <Play className="h-5 w-5" /> : <Pause className="h-5 w-5" />}
                        </Button>
                        <Button variant="outline" size="icon" onClick={nextSet}>
                          <SkipForward className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {currentExercise + 1}/{exercises.length} exercises
                        </span>
                      </div>
                      <Progress value={(currentExercise / exercises.length) * 100} max={100} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div className="p-4 bg-accent rounded-md text-center">
                        <span className="text-sm text-muted-foreground block mb-1">Reps</span>
                        <span className="text-xl font-bold">{exercises[currentExercise].reps}</span>
                      </div>
                      <div className="p-4 bg-accent rounded-md text-center">
                        <span className="text-sm text-muted-foreground block mb-1">Weight</span>
                        <span className="text-xl font-bold">{exercises[currentExercise].weight}</span>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-sm mb-1">AI Form Feedback</h3>
                          <p className="text-sm text-muted-foreground">{exercises[currentExercise].aiTip}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <Button variant="outline" className="flex-1 h-auto py-3 flex flex-col">
                        <span className="text-sm">Too Easy</span>
                        <span className="text-xs text-muted-foreground">Increase weight</span>
                      </Button>
                      <Button className="flex-1 h-auto py-3 flex flex-col">
                        <span className="text-sm">Complete Set</span>
                        <CheckCircle2 className="h-4 w-4 mt-1" />
                      </Button>
                      <Button variant="outline" className="flex-1 h-auto py-3 flex flex-col">
                        <span className="text-sm">Too Hard</span>
                        <span className="text-xs text-muted-foreground">Decrease weight</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-lg font-medium mb-3">Workout Progress</h2>
                <div className="space-y-3">
                  {exercises.map((exercise, index) => (
                    <Card
                      key={index}
                      className={`overflow-hidden ${index === currentExercise ? "border-primary" : index < currentExercise ? "opacity-60" : ""}`}
                    >
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {index < currentExercise ? (
                            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            </div>
                          ) : index === currentExercise ? (
                            <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">
                                {currentSet}/{exercise.sets}
                              </span>
                            </div>
                          ) : (
                            <div className="h-6 w-6 rounded-full border border-muted-foreground flex items-center justify-center">
                              <span className="text-xs text-muted-foreground">{index + 1}</span>
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium">{exercise.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {exercise.sets} × {exercise.reps} • {exercise.weight}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <Button variant="outline" className="flex-1" asChild>
                  <Link href="/dashboard">End Workout</Link>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Rest Timer
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

