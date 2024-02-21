import { Plus } from 'lucide-react'
import { Button } from './ui/button'

export function AddWaterButton() {
  return (
    <div className="w-full flex justify-center absolute mt-[-50px] z-20">
      <Button className="flex items-center justify-center w-[100px] h-[100px] rounded-full">
        <Plus size={48} />
      </Button>
    </div>
  )
}
