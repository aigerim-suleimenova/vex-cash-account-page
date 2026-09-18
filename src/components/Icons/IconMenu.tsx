import { forwardRef } from 'react'
import { Icon, type IconProps } from './Icon'

export const IconMenu = forwardRef<SVGSVGElement, IconProps>(function IconMenu(
  { stroke = 'currentColor', ...props },
  ref,
) {
  return (
    <Icon ref={ref} size={24} viewBox="0 0 24 24" {...props}>
      <path
        d="M4.00073 4.9992H19.9991M4.00073 12H19.9991M4.00073 19.0008H19.9991"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  )
})

IconMenu.displayName = 'IconMenu'
