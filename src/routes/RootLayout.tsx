import { useState, type ReactNode } from 'react'
import { Outlet, Link, useParams } from 'react-router'
import { useNavigationMode } from '../hooks/useNavigationMode'
import { Header } from '../components/Header/Header'
import { SidebarNav } from '../components/Navigation/SidebarNav'
import { InlineNav } from '../components/Navigation/InlineNav'
import { DrawerNav } from '../components/Navigation/DrawerNav'

const STYLES = {
  appRoot: 'd-flex flex-column min-vh-svh bg-white',
  layoutWrapper: 'd-flex align-items-start flex-fill align-self-stretch',
  // Sidebar mode's <main> renders the Outlet directly; inline/drawer modes need
  // flex-column since they conditionally stack a nav grid or back-link above it.
  mainSidebar: 'd-flex flex-fill align-self-stretch min-w-0 bg-white',
  mainStacked: 'd-flex flex-column flex-fill align-self-stretch min-w-0 bg-white',
  contentWithBackLink: 'd-flex flex-column flex-fill align-self-stretch min-w-0',
  backLink: 'link-hover-underline align-self-start mt-4 ms-4 text-accent-dark fw-medium',
} as const

export function RootLayout() {
  const mode = useNavigationMode()
  const { itemId } = useParams()
  const activeItemId = itemId ?? null
  const [drawerOpen, setDrawerOpen] = useState(false)

  function handleToggleDrawer() {
    setDrawerOpen((open) => !open)
  }

  let body: ReactNode

  if (mode === 'sidebar') {
    body = (
      <div className={STYLES.layoutWrapper}>
        <SidebarNav activeItemId={activeItemId} />
        <main className={STYLES.mainSidebar}>
          <Outlet context={mode} />
        </main>
      </div>
    )
  } else if (mode === 'inline') {
    body = (
      <div className={STYLES.layoutWrapper}>
        <main className={STYLES.mainStacked}>
          {activeItemId === null ? (
            <InlineNav activeItemId={activeItemId} />
          ) : (
            <div className={STYLES.contentWithBackLink}>
              <Link to="/" className={STYLES.backLink}>
                ← Navigation
              </Link>
              <Outlet context={mode} />
            </div>
          )}
        </main>
      </div>
    )
  } else {
    body = (
      <div className={STYLES.layoutWrapper}>
        <main className={STYLES.mainStacked}>
          {drawerOpen ? (
            <DrawerNav activeItemId={activeItemId} onNavigate={() => setDrawerOpen(false)} />
          ) : (
            <Outlet context={mode} />
          )}
        </main>
      </div>
    )
  }

  return (
    <div className={STYLES.appRoot}>
      <Header mode={mode} drawerOpen={drawerOpen} onToggleDrawer={handleToggleDrawer} />
      {body}
    </div>
  )
}
