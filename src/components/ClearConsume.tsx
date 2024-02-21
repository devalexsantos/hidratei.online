import { Trash } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { Button } from './ui/button'
import { useContext } from 'react'
import { WaterConsumeContext } from '@/contexts/WaterConsume'

export default function ClearConsume() {
  const { handleDeleteConsume } = useContext(WaterConsumeContext)

  return (
    <AlertDialog>
      <div className="absolute top-3 right-3">
        <AlertDialogTrigger asChild>
          <Button className="flex items-center justify-center p-2 w-[30px] h-[30px] rounded-full bg-red-600 hover:bg-red-500">
            <Trash size={28} className="text-white" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Você tem certeza disso?</AlertDialogTitle>
            <AlertDialogDescription>
              Ao clicar em <strong>Apagar</strong> você irá apagar todo o seu
              histórico de consumo do dia.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                onClick={handleDeleteConsume}
                className="text-white bg-red-600 hover:bg-red-500"
              >
                Apagar
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </div>
    </AlertDialog>
  )
}
