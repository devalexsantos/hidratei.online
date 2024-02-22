import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className="flex justify-between">
      <span className="italic font-bold">hidratei.online</span>
      <ModeToggle />
    </header>
  )
}
