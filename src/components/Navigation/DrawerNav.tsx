import { NAV_ITEMS } from '../../data/navItems'
import { NavItem } from './NavItem'

interface DrawerNavProps {
  activeItemId: string | null
  onNavigate: () => void
}

const ROOT = 'd-flex flex-column align-items-start align-self-stretch flex-fill p-4'
const GRID = 'row row-cols-2 row-cols-sm-3 g-2 w-100'

export function DrawerNav({ activeItemId, onNavigate }: DrawerNavProps) {
  return (
    <div className={ROOT}>
      <div className={GRID} role="navigation" aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <div className="col" key={item.id}>
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
    </div>
  )
}
