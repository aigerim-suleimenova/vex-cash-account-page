import { useState, useEffect } from 'react'

export type NavigationMode = 'sidebar' | 'inline' | 'drawer'

const DESKTOP_QUERY = '(min-width: 769px)'
const LARGE_DESKTOP_QUERY = '(min-width: 1440px)'

function deriveMode(): NavigationMode {
  if (typeof window === 'undefined') return 'inline'
  if (window.matchMedia(LARGE_DESKTOP_QUERY).matches) return 'sidebar'
  if (window.matchMedia(DESKTOP_QUERY).matches) return 'inline'
  return 'drawer'
}

/**
 * Returns 'sidebar' | 'inline' | 'drawer' based on the current viewport width,
 * matching the --bp-desktop (769px) / --bp-large-desktop (1440px) breakpoints.
 */
export function useNavigationMode(): NavigationMode {
  const [mode, setMode] = useState<NavigationMode>(deriveMode)

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_QUERY)
    const largeDesktopQuery = window.matchMedia(LARGE_DESKTOP_QUERY)

    const update = () => setMode(deriveMode())

    desktopQuery.addEventListener('change', update)
    largeDesktopQuery.addEventListener('change', update)

    return () => {
      desktopQuery.removeEventListener('change', update)
      largeDesktopQuery.removeEventListener('change', update)
    }
  }, [])

  return mode
}
