interface TextProps {
    text: string
}

export const Texto = ({text}: TextProps) => {
  return (
    <p>
        {text}
    </p>
  )
}
