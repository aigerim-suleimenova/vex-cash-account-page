import * as React from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import type { NavigationMode } from '../../hooks/useNavigationMode'
import { IconMenu, IconXCircle } from '../Icons'

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType | undefined

  mode: NavigationMode
  drawerOpen: boolean
  onToggleDrawer: () => void
}

const STYLES = {
  header: 'd-flex flex-column border-bottom bg-white',
  contentRow: 'd-flex justify-content-between align-items-center py-4 px-6 px-md-8',
  logoGroup: 'd-flex flex-column align-items-start gap-2px',
  logoRow: 'd-flex align-items-baseline gap-2px fs-3xl fw-black',
  tagline: 'text-body-secondary fs-2xs fw-medium',
  statGroup: 'd-flex align-items-center gap-7',
  statBlock: 'd-flex flex-column align-items-end gap-2px',
  statCaption: 'text-body-secondary fs-sm fw-normal',
  statValue: 'fs-lg fw-bold',
  statValueAccent: 'fs-lg fw-bold text-accent-dark',
  toggleButton: 'btn-plain d-flex p-2 rounded',
  userBar: 'd-flex align-items-stretch border-top',
  barBlock: 'flex-fill d-flex flex-column align-items-start gap-1 p-4',
  barBlockEnd: 'flex-fill d-flex flex-column align-items-end gap-1 p-4 border-start text-end',
  barCaption: 'text-body-secondary fs-xs fw-normal',
} as const

const Header: DynamicRefForwardingComponent<'header', HeaderProps> = React.forwardRef<HTMLElement, HeaderProps>(
  ({ mode, drawerOpen, onToggleDrawer, className, as: Component = 'header', ...rest }, ref) => {
    const isDrawerMode = mode === 'drawer'

    return (
      <Component ref={ref} className={clsx(className, STYLES.header)} {...rest}>
        <div className={STYLES.contentRow}>
          <div className={STYLES.logoGroup}>
            <div className={STYLES.logoRow}>
              <span className="text-primary">VEX</span>
              <span>CASH</span>
            </div>
            <div className={STYLES.tagline}>Einfach 60 Tage Geld leihen</div>
          </div>

          {!isDrawerMode && (
            <div className={STYLES.statGroup}>
              <div className={STYLES.statBlock}>
                <div className={STYLES.statCaption}>Hallo,</div>
                <div className={STYLES.statValue}>John Smith</div>
              </div>
              <div className={STYLES.statBlock}>
                <div className={STYLES.statCaption}>Status Ihrer Identifizierung</div>
                <div className={STYLES.statValueAccent}>Identifiziert</div>
              </div>
            </div>
          )}

          {isDrawerMode && (
            <button
              type="button"
              className={STYLES.toggleButton}
              onClick={onToggleDrawer}
              aria-label={drawerOpen ? 'Navigation schließen' : 'Navigation öffnen'}
              aria-expanded={drawerOpen}
            >
              {drawerOpen ? <IconXCircle /> : <IconMenu />}
            </button>
          )}
        </div>

        {isDrawerMode && (
          <div className={STYLES.userBar}>
            <div className={STYLES.barBlock}>
              <div className={STYLES.barCaption}>Hallo,</div>
              <div className={STYLES.statValue}>John Smith</div>
            </div>
            <div className={STYLES.barBlockEnd}>
              <div className={STYLES.barCaption}>Status</div>
              <div className={STYLES.statValueAccent}>Identifiziert</div>
            </div>
          </div>
        )}
      </Component>
    )
  },
)

Header.displayName = 'Header'

export { Header }
