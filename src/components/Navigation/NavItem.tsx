import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router'
import type { NavItem as NavItemData } from '../../data/navItems'

interface NavItemOwnProps {
  item: NavItemData
  active: boolean
  variant: 'row' | 'card'
  useDrawerIcon?: boolean
  onNavigate?: () => void
}

// No `as` prop here, unlike the other components in this app: NavItem's entire job is
// client-side routing via react-router's <Link>, so swapping the rendered element would
// silently break navigation. Ref-forwarding and native-prop passthrough still apply —
// <Link> already forwards its own ref to the underlying <a>.
export type NavItemProps = NavItemOwnProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'className' | 'children' | 'onClick' | keyof NavItemOwnProps>

const STYLES = {
  base: 'd-flex align-items-center gap-3 text-decoration-none',
  variant: {
    row: 'w-100 align-self-stretch bg-white py-14px px-5',
    card: 'p-4 rounded border border-divider bg-white',
  },
  labelBase: 'flex-fill text-truncate',
} as const

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(function NavItem(
  { item, active, variant, useDrawerIcon, onNavigate, ...rest },
  ref,
) {
  const Icon = useDrawerIcon && item.DrawerIcon ? item.DrawerIcon : item.Icon
  const stroke = active ? 'var(--color-accent-dark)' : '#777777'
  const linkClass = clsx(STYLES.base, STYLES.variant[variant], active && 'bg-active')
  const labelClass = clsx(STYLES.labelBase, active ? 'fw-bold text-accent-dark' : 'fw-medium')

  return (
    <Link
      ref={ref}
      to={`/${item.id}`}
      className={linkClass}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      {...rest}
    >
      <Icon stroke={stroke} />
      <span className={labelClass}>{item.label}</span>
    </Link>
  )
})

NavItem.displayName = 'NavItem'
