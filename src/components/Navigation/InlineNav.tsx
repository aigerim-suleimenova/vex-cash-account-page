import clsx from 'clsx'
import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

interface InlineNavProps {
  activeItemId: string | null
}

const ROOT = 'd-flex flex-column align-items-start gap-6 flex-fill align-self-stretch p-8'
const HEADING = 'm-0 fs-xl fw-bold'
const GRID = 'row row-cols-3 g-2 w-100'

export function InlineNav({ activeItemId }: InlineNavProps) {
  return (
    <div className={clsx(ROOT)}>
      <h2 className={clsx(HEADING)}>Navigation</h2>
      <div className={clsx(GRID)} role="navigation" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <div className={clsx('col')} key={item.id}>
            <NavItem item={item} active={item.id === activeItemId} variant="card" />
          </div>
        ))}
      </div>
    </div>
  )
}
