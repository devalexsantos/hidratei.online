import { Settings } from 'lucide-react'
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

export function ChangeGoal() {
  const [open, setOpen] = useState(false)
  const { resume, handleEditGoal } = useContext(WaterConsumeContext)
  const formSchema = z.object({
    goal: z.coerce
      .number()
      .min(1, { message: 'Consumo mínimo de 1L.' })
      .max(10, { message: 'Consumo máximo de 10L.' }),
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
      goal: resume.goal / 1000,
    },
  })

  function handleForm(values: ConsumeForm) {
    handleEditGoal(values.goal * 1000)
    reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="text-primary">
        <Settings size={28} />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            Alterar Meta
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Altere a meta de água que você deseja consumir (
            <strong>em litros</strong>):
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleForm)}
          className="flex flex-col gap-4 justify-center"
        >
          <Label htmlFor="consumed">
            Consumo em (<strong>litros</strong>):
          </Label>
          <Input
            id="consumed"
            min={1}
            type="number"
            step="any"
            {...register('goal')}
          />
          {errors?.goal && (
            <span className="text-sm text-red-500">{errors.goal.message}</span>
          )}
          <Button type="submit" className="flex items-center gap-2">
            Alterar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
