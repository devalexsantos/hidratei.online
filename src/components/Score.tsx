import { WaterConsumeContext } from '@/contexts/WaterConsume'
import { ActiveScore } from './icons/active-score'
import { InactiveScore } from './icons/inactive-score'
import { useContext } from 'react'

export function Score() {
  const { resume } = useContext(WaterConsumeContext)

  return (
    <div className="absolute left-3 top-3">
      {resume.score > 0 ? (
        <span className="flex items-center">
          <ActiveScore />
          <span className="text-primary ml-2 text-lg font-bold">
            {resume.score}
          </span>
        </span>
      ) : (
        <span className="flex items-center">
          <InactiveScore />
          <span className="text-primary ml-2 text-lg font-bold">0</span>
        </span>
      )}
    </div>
  )
}
