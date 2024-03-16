import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Messages from './utils/messages'
import { AddWater } from './AddWater'
import { useContext } from 'react'
import { WaterConsumeContext } from '@/contexts/WaterConsume'
import { ChangeGoal } from './ChangeGoal'
import ClearConsume from './ClearConsume'
import { Score } from './Score'
import ConfettiExplosion from 'react-confetti-explosion'

export function Resume() {
  const { resume, percentConsumed, needToConsume } =
    useContext(WaterConsumeContext)

  function getWaveHeight(percent: number) {
    if (percentConsumed > 100) return 450
    return (percent * 450) / 100
  }

  const percent = Math.round(percentConsumed)

  return (
    <div className="relative">
      {percent > 99 && <ConfettiExplosion />}
      <Card className="flex flex-col h-[450px] items-center justify-center relative overflow-hidden">
        <CardHeader className="z-10">
          <CardTitle className="text-center text-xl mt-6 text-sky-700 dark:text-primary">
            Resumo Diário
          </CardTitle>
          <CardDescription className="text-md z-20">
            <span className="text-primary flex items-center gap-2">
              Meta definida: <strong>{resume.goal / 1000} litro(s)</strong>
              <ChangeGoal />
            </span>
            <Score />
            <ClearConsume />
          </CardDescription>
        </CardHeader>
        <CardContent className="z-10 flex-1 flex flex-col items-center justify-center">
          <div className="mb-8 p-3 text-center bg-white text-zinc-700 rounded-xl relative">
            <Messages percentConsumed={percentConsumed} />
            <div className="w-[15px] h-[15px] bg-white absolute bottom-[-7px] left-[50%] rotate-45" />
          </div>
          <span className="text-8xl font-bold text-sky-700 dark:text-primary mt-[-20px]">
            {percent <= 100 ? percent : '+100'}%
          </span>
          {resume.consumed > 0 && (
            <div className="flex flex-col items-center">
              <span className="py-3 text-sm mt-[-15px]">
                Você já consumiu: <strong>{resume.consumed}ml</strong> hoje.
              </span>
              {needToConsume > 0 && (
                <span className="mt-[-10px] text-red-400">
                  Faltam {needToConsume}ml.
                </span>
              )}
            </div>
          )}
        </CardContent>
        <div
          className="z-0 wave bg-sky-300 dark:bg-sky-800 absolute bottom-0 left-0 border border-t-4 border-dotted"
          style={{
            height: getWaveHeight(percentConsumed),
            width: '100%',
          }}
        ></div>
      </Card>
      <AddWater />
    </div>
  )
}
