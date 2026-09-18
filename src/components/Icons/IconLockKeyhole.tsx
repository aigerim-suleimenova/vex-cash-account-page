import { forwardRef } from 'react'
import { Icon, type IconProps } from './Icon'

export const IconLockKeyhole = forwardRef<SVGSVGElement, IconProps>(function IconLockKeyhole(
  { stroke = 'currentColor', ...props },
  ref,
) {
  return (
    <Icon ref={ref} size={20} viewBox="0 0 20 20" {...props}>
      <path
        d="M5.83333 8.33318V5.83298C5.83333 4.72783 6.27232 3.66794 7.05372 2.88647C7.83512 2.10501 8.89493 1.66599 10 1.66599C11.1051 1.66599 12.1649 2.10501 12.9463 2.88647C13.7277 3.66794 14.1667 4.72783 14.1667 5.83298V8.33318M10.8333 13.3336C10.8333 13.7939 10.4602 14.167 10 14.167C9.53976 14.167 9.16667 13.7939 9.16667 13.3336C9.16667 12.8733 9.53976 12.5002 10 12.5002C10.4602 12.5002 10.8333 12.8733 10.8333 13.3336ZM4.16667 8.33318H15.8333C16.7538 8.33318 17.5 9.07944 17.5 9.99998V16.6672C17.5 17.5877 16.7538 18.334 15.8333 18.334H4.16667C3.24619 18.334 2.5 17.5877 2.5 16.6672V9.99998C2.5 9.07944 3.24619 8.33318 4.16667 8.33318Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  )
})

IconLockKeyhole.displayName = 'IconLockKeyhole'
