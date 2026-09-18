import * as React from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

export interface DrawerNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType | undefined

  activeItemId: string | null
  onNavigate: () => void
}

const ROOT = 'd-flex flex-column align-items-start align-self-stretch flex-fill p-4'
const GRID = 'row row-cols-2 row-cols-sm-3 g-2 w-100'

const DrawerNav: DynamicRefForwardingComponent<'div', DrawerNavProps> = React.forwardRef<HTMLElement, DrawerNavProps>(
  ({ activeItemId, onNavigate, className, as: Component = 'div', ...rest }, ref) => {
    return (
      <Component ref={ref} className={clsx(className, ROOT)} {...rest}>
        <div className={clsx(GRID)} role="navigation" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <div className={clsx('col')} key={item.id}>
              <NavItem
                item={item}
                active={item.id === activeItemId}
                variant="card"
                useDrawerIcon
                onNavigate={onNavigate}
              />
            </div>
          ))}
        </div>
      </Component>
    )
  },
)

DrawerNav.displayName = 'DrawerNav'

export { DrawerNav }
