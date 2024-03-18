import { WaterConsumeContext } from '@/contexts/WaterConsume'
import { ActiveScore } from './icons/active-score'
import { InactiveScore } from './icons/inactive-score'
import { useContext } from 'react'

export function Score() {
  const { resume, maxScore } = useContext(WaterConsumeContext)

  return (
    <div className="absolute left-3 top-3">
      <div className="flex gap-3 items-center">
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
        <div className="flex gap-1 items-center">
          <img src="/assets/trophy.svg" width={22} height={22} alt="Trophy" />
          <span className="text-primary text-lg font-bold">
            {maxScore.maxScore}
          </span>
        </div>
      </div>
    </div>
  )
}
