import { ButtonHTMLAttributes } from 'react'

type Props = {
  variant?: 'default' | 'outline' | 'fill'
}

const Button = ({
  children,
  variant = 'default',
  className = '',
  ...restProps
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const variantStyle = {
    default: 'bg-transparent text-mediumGray border-transparent',
    outline:
      'bg-transparent text-mediumGray border-almostBlack hover:border-almostBlack',
    fill: 'bg-almostBlack text-almostWhite border-transparent hover:text-almostBlack hover:bg-almostWhite hover:border-almostBlack',
  }
  return (
    <button
      className={`px-5 py-2.5 rounded-xl hover:text-almostBlack border flex items-center justify-center with-transition ${variantStyle[variant]} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
