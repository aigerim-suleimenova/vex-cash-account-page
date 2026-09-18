import clsx from 'clsx'
import type { NavigationMode } from '../../hooks/useNavigationMode'
import { IconMenu, IconXCircle } from '../Icons'

interface HeaderProps {
  mode: NavigationMode
  drawerOpen: boolean
  onToggleDrawer: () => void
}

const CONTENT_ROW = 'd-flex justify-content-between align-items-center py-4 px-6 px-md-8'
const LOGO_GROUP = 'd-flex flex-column align-items-start gap-2px'
const LOGO_ROW = 'd-flex align-items-baseline gap-2px fs-3xl fw-black'
const TAGLINE = 'text-body-secondary fs-2xs fw-medium'
const STAT_GROUP = 'd-flex align-items-center gap-7'
const STAT_BLOCK = 'd-flex flex-column align-items-end gap-2px'
const STAT_CAPTION = 'text-body-secondary fs-sm fw-normal'
const STAT_VALUE = 'fs-lg fw-bold'
const TOGGLE_BUTTON = 'btn-plain d-flex p-2 rounded'
const USER_BAR = 'd-flex align-items-stretch border-top'
const BAR_BLOCK = 'flex-fill d-flex flex-column align-items-start gap-1 p-4'
const BAR_BLOCK_END = 'flex-fill d-flex flex-column align-items-end gap-1 p-4 border-start text-end'
const BAR_CAPTION = 'text-body-secondary fs-xs fw-normal'

export function Header({ mode, drawerOpen, onToggleDrawer }: HeaderProps) {
  const isDrawerMode = mode === 'drawer'

  return (
    <header className="d-flex flex-column border-bottom bg-white">
      <div className={CONTENT_ROW}>
        <div className={LOGO_GROUP}>
          <div className={LOGO_ROW}>
            <span className="text-primary">VEX</span>
            <span>CASH</span>
          </div>
          <div className={TAGLINE}>Einfach 60 Tage Geld leihen</div>
        </div>

        {!isDrawerMode && (
          <div className={STAT_GROUP}>
            <div className={STAT_BLOCK}>
              <div className={STAT_CAPTION}>Hallo,</div>
              <div className={STAT_VALUE}>John Smith</div>
            </div>
            <div className={STAT_BLOCK}>
              <div className={STAT_CAPTION}>Status Ihrer Identifizierung</div>
              <div className={clsx(STAT_VALUE, 'text-accent-dark')}>Identifiziert</div>
            </div>
          </div>
        )}

        {isDrawerMode && (
          <button
            type="button"
            className={TOGGLE_BUTTON}
            onClick={onToggleDrawer}
            aria-label={drawerOpen ? 'Navigation schließen' : 'Navigation öffnen'}
            aria-expanded={drawerOpen}
          >
            {drawerOpen ? <IconXCircle /> : <IconMenu />}
          </button>
        )}
      </div>

      {isDrawerMode && (
        <div className={USER_BAR}>
          <div className={BAR_BLOCK}>
            <div className={BAR_CAPTION}>Hallo,</div>
            <div className={STAT_VALUE}>John Smith</div>
          </div>
          <div className={BAR_BLOCK_END}>
            <div className={BAR_CAPTION}>Status</div>
            <div className={clsx(STAT_VALUE, 'text-accent-dark')}>Identifiziert</div>
          </div>
        </div>
      )}
    </header>
  )
}
