import { forwardRef, type SVGProps } from 'react'

interface IconWrapperProps extends SVGProps<SVGSVGElement> {
  size?: number | string
  viewBox: string
}

/** Shared <svg> primitive every Icon* component builds on. Not exported from the barrel. */
export const Icon = forwardRef<SVGSVGElement, IconWrapperProps>(function Icon(
  { size = 20, viewBox, children, ...rest },
  ref,
) {
  return (
    <svg
      ref={ref}
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
})

Icon.displayName = 'Icon'

export type IconProps = Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'viewBox'>
