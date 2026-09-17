import { useOutletContext } from 'react-router'
import { EmptyState } from '../components/EmptyState/EmptyState'
import type { NavigationMode } from '../hooks/useNavigationMode'

/** Path "/" — nothing selected yet. */
export function IndexRoute() {
  const mode = useOutletContext<NavigationMode>()
  return <EmptyState variant={mode === 'drawer' ? 'shield' : 'lock'} />
}
