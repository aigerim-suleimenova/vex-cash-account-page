import { forwardRef, type ElementType, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

export interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: ElementType | undefined

  activeItemId: string | null
}

const STYLES = {
  sidebar: 'd-flex flex-column align-items-start align-self-stretch flex-shrink-0 w-sidebar border-end bg-white',
} as const

const SidebarNav: DynamicRefForwardingComponent<'nav', SidebarNavProps> = forwardRef<
  HTMLElement,
  SidebarNavProps
>(({ activeItemId, className, as: Component = 'nav', ...rest }, ref) => {
  return (
    <Component ref={ref} className={clsx(className, STYLES.sidebar)} aria-label="Primary" {...rest}>
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.id} item={item} active={item.id === activeItemId} variant="row" />
      ))}
    </Component>
  )
})

SidebarNav.displayName = 'SidebarNav'

export { SidebarNav }
