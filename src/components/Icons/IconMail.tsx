import { forwardRef } from 'react'
import { Icon, type IconProps } from './Icon'

export const IconMail = forwardRef<SVGSVGElement, IconProps>(function IconMail(
  { stroke = 'currentColor', ...props },
  ref,
) {
  return (
    <Icon ref={ref} size={20} viewBox="0 0 20 20" {...props}>
      <path
        d="M18.334 5.83375L10.8409 10.6058C10.5866 10.7534 10.2978 10.8312 10.0038 10.8312C9.70971 10.8312 9.42089 10.7534 9.16662 10.6058L1.66602 5.83375M3.33282 3.334H16.6672C17.5878 3.334 18.334 4.08012 18.334 5.0005V14.9995C18.334 15.9199 17.5878 16.666 16.6672 16.666H3.33282C2.41227 16.666 1.66602 15.9199 1.66602 14.9995V5.0005C1.66602 4.08012 2.41227 3.334 3.33282 3.334Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  )
})

IconMail.displayName = 'IconMail'
