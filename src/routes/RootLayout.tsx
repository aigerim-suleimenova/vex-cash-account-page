import { useState, type ReactNode } from 'react'
import clsx from 'clsx'
import { Outlet, Link, useParams } from 'react-router'
import { useNavigationMode } from '../hooks/useNavigationMode'
import { Header } from '../components/Header/Header'
import { SidebarNav } from '../components/Navigation/SidebarNav'
import { InlineNav } from '../components/Navigation/InlineNav'
import { DrawerNav } from '../components/Navigation/DrawerNav'

const APP_ROOT = 'd-flex flex-column min-vh-svh bg-white'
const LAYOUT_WRAPPER = 'd-flex align-items-start flex-fill align-self-stretch'
// Sidebar mode's <main> renders the Outlet directly; inline/drawer modes need
// flex-column since they conditionally stack a nav grid or back-link above it.
const MAIN_SIDEBAR = 'd-flex flex-fill align-self-stretch min-w-0 bg-white'
const MAIN_STACKED = 'd-flex flex-column flex-fill align-self-stretch min-w-0 bg-white'
const CONTENT_WITH_BACK_LINK = 'd-flex flex-column flex-fill align-self-stretch min-w-0'
const BACK_LINK = 'link-hover-underline align-self-start mt-4 ms-4 text-accent-dark fw-medium'

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
      <div className={clsx(LAYOUT_WRAPPER)}>
        <SidebarNav activeItemId={activeItemId} />
        <main className={clsx(MAIN_SIDEBAR)}>
          <Outlet context={mode} />
        </main>
      </div>
    )
  } else if (mode === 'inline') {
    body = (
      <div className={clsx(LAYOUT_WRAPPER)}>
        <main className={clsx(MAIN_STACKED)}>
          {activeItemId === null ? (
            <InlineNav activeItemId={activeItemId} />
          ) : (
            <div className={clsx(CONTENT_WITH_BACK_LINK)}>
              <Link to="/" className={clsx(BACK_LINK)}>
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
      <div className={clsx(LAYOUT_WRAPPER)}>
        <main className={clsx(MAIN_STACKED)}>
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
    <div className={clsx(APP_ROOT)}>
      <Header mode={mode} drawerOpen={drawerOpen} onToggleDrawer={handleToggleDrawer} />
      {body}
    </div>
  )
}
