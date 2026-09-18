import { forwardRef } from 'react'
import { Icon, type IconProps } from './Icon'

export const IconXCircle = forwardRef<SVGSVGElement, IconProps>(function IconXCircle(
  { stroke = 'currentColor', ...props },
  ref,
) {
  return (
    <Icon ref={ref} size={24} viewBox="0 0 24 24" {...props}>
      <path
        d="M15.0001 8.99976L8.99958 15.0002M8.99958 8.99976L15.0001 15.0002M22.0006 12C22.0006 17.5233 17.5231 22.0008 11.9998 22.0008C6.47653 22.0008 1.99902 17.5233 1.99902 12C1.99902 6.47671 6.47653 1.9992 11.9998 1.9992C17.5231 1.9992 22.0006 6.47671 22.0006 12Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  )
})

IconXCircle.displayName = 'IconXCircle'
