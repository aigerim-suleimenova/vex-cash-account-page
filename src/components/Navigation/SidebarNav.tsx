import clsx from 'clsx'
import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

interface SidebarNavProps {
  activeItemId: string | null
}

const SIDEBAR = 'd-flex flex-column align-items-start align-self-stretch flex-shrink-0 w-sidebar border-end bg-white'

export function SidebarNav({ activeItemId }: SidebarNavProps) {
  return (
    <nav className={clsx(SIDEBAR)} aria-label="Primary">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.id} item={item} active={item.id === activeItemId} variant="row" />
      ))}
    </nav>
  )
}
