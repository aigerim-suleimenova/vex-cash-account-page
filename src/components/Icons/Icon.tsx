import type { SVGProps } from 'react'

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  viewBox: string
}

/** Shared <svg> primitive every Icon* component builds on. Not exported from the barrel. */
export function Icon({ size = 20, viewBox, children, ...rest }: IconWrapperProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  )
}

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'viewBox'>
