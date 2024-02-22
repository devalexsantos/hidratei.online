interface MessagesProps {
  percentConsumed: number
}

export default function Messages({ percentConsumed }: MessagesProps) {
  if (percentConsumed >= 100) {
    return <p>Parabéns! Você atingiu a meta de hoje 🏆</p>
  }

  if (percentConsumed >= 80) {
    return <p>Você está quase lá! 🙌</p>
  }

  if (percentConsumed >= 50) {
    return <p>Não vamos parar agora! 😃 Já passamos da metade! 💧 </p>
  }

  if (percentConsumed >= 20) {
    return <p>Continue assim!🙂 Rumo à hidratação ideal! 💦.</p>
  }

  if (percentConsumed > 0) {
    return <p>Vamos lá! Você consegue beber um pouco mais! 💪💧.</p>
  }

  return <p>Hora de começar a jornada de hidratação! 💧.</p>
}
