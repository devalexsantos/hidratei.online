interface MessagesProps {
  percentConsumed: number
}

export default function Messages({ percentConsumed }: MessagesProps) {
  if (percentConsumed >= 100) {
    return <p>Parabéns! Você atingiu a meta de hoje.</p>
  }

  if (percentConsumed >= 80) {
    return <p>Você está quase lá!</p>
  }

  if (percentConsumed >= 50) {
    return <p>Você está indo bem!</p>
  }

  if (percentConsumed >= 20) {
    return <p>Você pode beber mais água.</p>
  }

  if (percentConsumed > 0) {
    return <p>Você precisa beber mais água.</p>
  }

  return <p>Você ainda não bebeu água hoje.</p>
}
