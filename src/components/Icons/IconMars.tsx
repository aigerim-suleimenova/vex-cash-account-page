import { forwardRef } from 'react'
import { Icon, type IconProps } from './Icon'

export const IconMars = forwardRef<SVGSVGElement, IconProps>(function IconMars(
  { stroke = 'currentColor', ...props },
  ref,
) {
  return (
    <Icon ref={ref} size={14} viewBox="0 0 14 14" {...props}>
      <path
        d="M12.2507 4.66667V1.75H9.33398M12.2507 1.75L8.31315 5.6875M9.33398 8.16667C9.33398 10.0997 7.76698 11.6667 5.83398 11.6667C3.90099 11.6667 2.33398 10.0997 2.33398 8.16667C2.33398 6.23367 3.90099 4.66667 5.83398 4.66667C7.76698 4.66667 9.33398 6.23367 9.33398 8.16667Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  )
})

IconMars.displayName = 'IconMars'
