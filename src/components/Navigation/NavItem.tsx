import clsx from 'clsx'
import { Link } from 'react-router'
import type { NavItem as NavItemData } from '../../data/navItems'

interface NavItemProps {
  item: NavItemData
  active: boolean
  variant: 'row' | 'card'
  useDrawerIcon?: boolean
  onNavigate?: () => void
}

const BASE = 'd-flex align-items-center gap-3 text-decoration-none'
const VARIANT_CLASSES: Record<NavItemProps['variant'], string> = {
  row: 'w-100 align-self-stretch bg-white py-14px px-5',
  card: 'p-4 rounded border border-divider bg-white',
}
const LABEL_ACTIVE = 'flex-fill text-truncate fw-bold text-accent-dark'
const LABEL_INACTIVE = 'flex-fill text-truncate fw-medium'

export function NavItem({ item, active, variant, useDrawerIcon, onNavigate }: NavItemProps) {
  const Icon = useDrawerIcon && item.DrawerIcon ? item.DrawerIcon : item.Icon
  const stroke = active ? 'var(--color-accent-dark)' : '#777777'
  const linkClass = clsx(BASE, VARIANT_CLASSES[variant], active && 'bg-active')

  return (
    <Link
      to={`/${item.id}`}
      className={linkClass}
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
    >
      <Icon stroke={stroke} />
      <span className={active ? LABEL_ACTIVE : LABEL_INACTIVE}>{item.label}</span>
    </Link>
  )
}
