import * as React from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

export interface InlineNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType | undefined

  activeItemId: string | null
}

const ROOT = 'd-flex flex-column align-items-start gap-6 flex-fill align-self-stretch p-8'
const HEADING = 'm-0 fs-xl fw-bold'
const GRID = 'row row-cols-3 g-2 w-100'

const InlineNav: DynamicRefForwardingComponent<'div', InlineNavProps> = React.forwardRef<HTMLElement, InlineNavProps>(
  ({ activeItemId, className, as: Component = 'div', ...rest }, ref) => {
    return (
      <Component ref={ref} className={clsx(className, ROOT)} {...rest}>
        <h2 className={clsx(HEADING)}>Navigation</h2>
        <div className={clsx(GRID)} role="navigation" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <div className={clsx('col')} key={item.id}>
              <NavItem item={item} active={item.id === activeItemId} variant="card" />
            </div>
          ))}
        </div>
      </Component>
    )
  },
)

InlineNav.displayName = 'InlineNav'

export { InlineNav }
