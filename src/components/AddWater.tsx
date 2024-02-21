import { Plus, PlusCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from './ui/dialog'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Input } from './ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { WaterConsumeContext } from '@/contexts/WaterConsume'
import { Label } from './ui/label'

export function AddWater() {
  const [open, setOpen] = useState(false)
  const { handleAddWater } = useContext(WaterConsumeContext)
  const formSchema = z.object({
    consumed: z.coerce
      .number()
      .min(100, { message: 'Consumo mínimo de 100ML.' }),
  })

  type ConsumeForm = z.infer<typeof formSchema>

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsumeForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consumed: 300,
    },
  })

  function handleForm(values: ConsumeForm) {
    handleAddWater(values.consumed)
    reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="w-full flex justify-center absolute mt-[-50px] z-20">
        <DialogTrigger asChild>
          <Button
            type="button"
            className="flex items-center justify-center w-[100px] h-[100px] rounded-full"
          >
            <Plus size={48} />
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            Adicionar consumo
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Adicione a quantidade de água que você consumiu (em ml):
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="flex flex-col gap-4 justify-center"
        >
          <Label htmlFor="consumed">Consumo em (ml):</Label>
          <Input
            id="consumed"
            min={100}
            type="number"
            {...register('consumed')}
          />
          {errors?.consumed && (
            <p className="text-sm text-red-500">{errors.consumed.message}</p>
          )}
          <Button type="submit" className="flex items-center gap-2">
            <PlusCircle />
            Adicionar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
