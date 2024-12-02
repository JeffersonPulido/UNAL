import { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
}

export const Button = ({children}: ButtonProps) => {
  return (
    <>
        <p>* ES OBLIGATORIO</p>
        <button>
        {children}
        </button>
    </>
  )
}

interface ButtonXSProps {
    title: number | string,
}

export const ButtonXS = ({title = 'Por defecto'}: ButtonXSProps) => {
    return (
        <button>{title}</button>
    )
}