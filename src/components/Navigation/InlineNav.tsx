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

const STYLES = {
  root: 'd-flex flex-column align-items-start gap-6 flex-fill align-self-stretch p-8',
  heading: 'm-0 fs-xl fw-bold',
  grid: 'row row-cols-3 g-2 w-100',
  col: 'col',
} as const

const InlineNav: DynamicRefForwardingComponent<'div', InlineNavProps> = React.forwardRef<HTMLElement, InlineNavProps>(
  ({ activeItemId, className, as: Component = 'div', ...rest }, ref) => {
    return (
      <Component ref={ref} className={clsx(className, STYLES.root)} {...rest}>
        <h2 className={STYLES.heading}>Navigation</h2>
        <div className={STYLES.grid} role="navigation" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <div className={STYLES.col} key={item.id}>
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
