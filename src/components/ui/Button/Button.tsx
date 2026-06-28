import { ButtonProps } from './Button.types'
import { cn } from '@utils/cn'

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={cn('px-3 py-2', className)} onClick={onClick}>
      {children}
    </button>
  )
}
