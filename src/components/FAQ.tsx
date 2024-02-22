import { LucideMessageCircleQuestion } from 'lucide-react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogContent,
} from './ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function FAQ() {
  const FAQItems = [
    {
      title:
        'Como faço para acessar meu resumo de consumo de água em outro dispositivo?',
      answer:
        'Não é possível. O armazenamento das informações é feito no Local Storage do navegador. Local Storage é específico para cada dispositivo e navegador.',
    },
    {
      title: 'Posso recuperar os dados de consumo excluídos acidentalmente?',
      answer:
        'Atualmente, não há uma funcionalidade de recuperação para de dados de consumo. Certifique-se de revisar cuidadosamente antes de excluir. ',
    },
    {
      title:
        'Como faço para garantir que meus dados no Local Storage não sejam perdidos ao limpar os dados do navegador?',
      answer:
        'No momento não é possível realizar um backup dos seus dados em um arquivo. Estamos trabalho nesta funcionalidade.',
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="flex gap-1 items-center mt-3">
          <LucideMessageCircleQuestion size={16} /> FAQ
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>FAQ - Perguntas Frequentes</DialogTitle>
          <DialogDescription>
            Perguntas mais frequentes sobre o armazenamento dos dados de
            consumo.
          </DialogDescription>
        </DialogHeader>
        <Accordion type="single" collapsible>
          {FAQItems.map((faqItem, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">
                {faqItem.title}
              </AccordionTrigger>
              <AccordionContent>
                <p>{faqItem.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}
