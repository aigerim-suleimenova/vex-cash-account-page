import { forwardRef } from 'react'
import { Icon, type IconProps } from './Icon'

export const IconLockKeyholeLarge = forwardRef<SVGSVGElement, IconProps>(function IconLockKeyholeLarge(
  { stroke = 'currentColor', ...props },
  ref,
) {
  return (
    <Icon ref={ref} size={48} viewBox="0 0 48 48" {...props}>
      <path
        d="M14 19.9997V13.9992C14 11.3468 15.0536 8.80309 16.9289 6.92758C18.8043 5.05207 21.3478 3.99841 24 3.99841C26.6522 3.99841 29.1957 5.05207 31.0711 6.92758C32.9464 8.80309 34 11.3468 34 13.9992V19.9997M26 32.0007C26 33.1053 25.1046 34.0008 24 34.0008C22.8954 34.0008 22 33.1053 22 32.0007C22 30.896 22.8954 30.0005 24 30.0005C25.1046 30.0005 26 30.896 26 32.0007ZM10 19.9997H38C40.2091 19.9997 42 21.7907 42 24V40.0013C42 42.2106 40.2091 44.0016 38 44.0016H10C7.79086 44.0016 6 42.2106 6 40.0013V24C6 21.7907 7.79086 19.9997 10 19.9997Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  )
})

IconLockKeyholeLarge.displayName = 'IconLockKeyholeLarge'
