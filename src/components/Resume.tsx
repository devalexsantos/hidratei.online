import { Settings } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import Messages from './utils/messages'

export function Resume() {
  const percentConsumed = 50

  function getWaveHeight(percent: number) {
    if (percentConsumed > 100) return 400
    return (percent * 400) / 100
  }

  return (
    <Card className="flex flex-col h-[400px] items-center justify-center relative overflow-hidden">
      <CardHeader style={{ zIndex: 1 }}>
        <CardTitle className="text-center text-xl">Resumo Diário</CardTitle>
        <CardDescription>
          Meta definida: 2,5 litros - <span className="underline">alterar</span>
          <Settings className="absolute top-3 right-3" size={24} />
        </CardDescription>
      </CardHeader>
      <CardContent
        style={{ zIndex: 1 }}
        className="flex-1 flex flex-col items-center justify-center"
      >
        <div className="mb-8 p-3 text-center bg-white text-zinc-700 rounded-xl relative">
          <Messages percentConsumed={percentConsumed} />
          <div className="w-[15px] h-[15px] bg-white absolute bottom-[-7px] left-[50%] rotate-45" />
        </div>
        <span className="text-8xl font-bold">{percentConsumed}%</span>
      </CardContent>
      <div
        className="wave bg-sky-300 dark:bg-sky-800 absolute bottom-0 left-0 border border-t-4 border-dotted"
        style={{
          height: getWaveHeight(percentConsumed),
          width: '100%',
          zIndex: 0,
        }}
      ></div>
    </Card>
  )
}
