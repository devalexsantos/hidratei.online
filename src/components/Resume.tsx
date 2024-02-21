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

export function Resume() {
  const { resume, percentConsumed } = useContext(WaterConsumeContext)

  function getWaveHeight(percent: number) {
    if (percentConsumed > 100) return 400
    return (percent * 400) / 100
  }

  const percent = Math.round(percentConsumed)

  return (
    <div className="relative">
      <Card className="flex flex-col h-[400px] items-center justify-center relative overflow-hidden">
        <CardHeader className="z-10">
          <CardTitle className="text-center text-xl">Resumo Diário</CardTitle>
          <CardDescription className="text-md">
            Meta definida: <strong>{resume.goal / 1000} litros</strong>
            <ChangeGoal />
          </CardDescription>
        </CardHeader>
        <CardContent className="z-10 flex-1 flex flex-col items-center justify-center">
          <div className="mb-8 p-3 text-center bg-white text-zinc-700 rounded-xl relative">
            <Messages percentConsumed={percentConsumed} />
            <div className="w-[15px] h-[15px] bg-white absolute bottom-[-7px] left-[50%] rotate-45" />
          </div>
          <span className="text-8xl font-bold">
            {percent <= 100 ? percent : '+100'}%
          </span>
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
