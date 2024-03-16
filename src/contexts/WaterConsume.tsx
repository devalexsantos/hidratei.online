import { ReactNode, createContext, useEffect, useState } from 'react'

interface Resume {
  day: string
  goal: number
  consumed: number
  score: number
  reachedGoalToday: boolean
}

interface WaterConsumeContextData {
  resume: Resume
  percentConsumed: number
  needToConsume: number
  handleAddWater: (amount: number) => void
  handleEditGoal: (goal: number) => void
  handleDeleteConsume: () => void
}

export const WaterConsumeContext = createContext({} as WaterConsumeContextData)

export function WaterConsumeContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [resume, setResume] = useState<Resume>(() => {
    const resume = localStorage.getItem('resume-mwater')

    if (resume) {
      const date = new Date()
      const parsedResume = JSON.parse(resume)
      const parsedResumeDay = new Date(parsedResume.day)

      const sameDay =
        parsedResumeDay.getDate() === date.getDate() &&
        parsedResumeDay.getMonth() === date.getMonth() &&
        parsedResumeDay.getFullYear() === date.getFullYear()

      if (!sameDay) {
        const yesterday = new Date(date)
        yesterday.setDate(date.getDate() - 1)

        if (
          parsedResumeDay.getDate() === yesterday.getDate() &&
          parsedResume.reachedGoalToday
        ) {
          return {
            day: date,
            goal: parsedResume.goal,
            consumed: 0,
            score: parsedResume.score,
            reachedGoalToday: false,
          }
        }
        return {
          day: date,
          goal: parsedResume.goal,
          consumed: 0,
          score: 0,
          reachedGoalToday: false,
        }
      } else {
        return parsedResume
      }
    }
    return {
      day: new Date(),
      goal: 2500,
      consumed: 0,
      score: 0,
      reachedGoalToday: false,
    }
  })

  useEffect(() => {
    localStorage.setItem('resume-mwater', JSON.stringify(resume))

    if (resume.consumed >= resume.goal && !resume.reachedGoalToday) {
      setResume((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
        reachedGoalToday: true,
      }))
    }
  }, [resume])

  function handleAddWater(amount: number) {
    setResume((prevState) => ({
      ...prevState,
      consumed: prevState.consumed + amount,
    }))
  }

  function handleEditGoal(goal: number) {
    setResume((prevState) => ({
      ...prevState,
      goal,
    }))
  }

  function handleDeleteConsume() {
    setResume((prevState) => ({
      ...prevState,
      consumed: 0,
    }))
  }

  const percentConsumed = (resume.consumed * 100) / resume.goal

  const needToConsume = resume.goal - resume.consumed

  return (
    <WaterConsumeContext.Provider
      value={{
        resume,
        percentConsumed,
        handleAddWater,
        handleEditGoal,
        handleDeleteConsume,
        needToConsume,
      }}
    >
      {children}
    </WaterConsumeContext.Provider>
  )
}
