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
      className={`with-transition flex items-center justify-center rounded-xl border px-5 py-2.5 hover:text-almostBlack ${variantStyle[variant]} ${className}`}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
