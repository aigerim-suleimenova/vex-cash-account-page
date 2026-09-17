import { useState, useEffect } from 'react'

export type NavigationMode = 'sidebar' | 'inline' | 'drawer'

const DESKTOP_QUERY = '(min-width: 768px)'
const LARGE_DESKTOP_QUERY = '(min-width: 1200px)'

function deriveMode(): NavigationMode {
  if (typeof window === 'undefined') return 'inline'
  if (window.matchMedia(LARGE_DESKTOP_QUERY).matches) return 'sidebar'
  if (window.matchMedia(DESKTOP_QUERY).matches) return 'inline'
  return 'drawer'
}

/**
 * Returns 'sidebar' | 'inline' | 'drawer' based on the current viewport width,
 * matching the app's md (768px) / xl (1200px) breakpoints — drawer covers small
 * + large mobile (<768px), inline covers tablet + desktop (768–1199px), sidebar
 * covers large desktop (≥1200px).
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
