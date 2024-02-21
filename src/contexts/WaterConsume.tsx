import { ReactNode, createContext, useEffect, useState } from 'react'

interface Resume {
  day: string
  goal: number
  consumed: number
}

interface WaterConsumeContextData {
  resume: Resume
  percentConsumed: number
  handleAddWater: (amount: number) => void
  handleEditGoal: (goal: number) => void
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
        return {
          day: date,
          goal: parsedResume.goal,
          consumed: 0,
        }
      } else {
        return parsedResume
      }
    }
    return {
      day: new Date(),
      goal: 2500,
      consumed: 0,
    }
  })

  useEffect(() => {
    localStorage.setItem('resume-mwater', JSON.stringify(resume))
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

  const percentConsumed = (resume.consumed * 100) / resume.goal

  return (
    <WaterConsumeContext.Provider
      value={{ resume, percentConsumed, handleAddWater, handleEditGoal }}
    >
      {children}
    </WaterConsumeContext.Provider>
  )
}
