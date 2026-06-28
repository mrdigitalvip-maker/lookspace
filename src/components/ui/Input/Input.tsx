import { InputProps } from './Input.types'
import { cn } from '@utils/cn'

export function Input({ value, onChange, placeholder, className }: InputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      className={cn('px-2 py-1', className)}
    />
  )
}
