import * as React from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType | undefined

  activeItemId: string | null
}

const SIDEBAR = 'd-flex flex-column align-items-start align-self-stretch flex-shrink-0 w-sidebar border-end bg-white'

const SidebarNav: DynamicRefForwardingComponent<'nav', SidebarNavProps> = React.forwardRef<
  HTMLElement,
  SidebarNavProps
>(({ activeItemId, className, as: Component = 'nav', ...rest }, ref) => {
  return (
    <Component ref={ref} className={clsx(className, SIDEBAR)} aria-label="Primary" {...rest}>
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.id} item={item} active={item.id === activeItemId} variant="row" />
      ))}
    </Component>
  )
})

SidebarNav.displayName = 'SidebarNav'

export { SidebarNav }
