import { useParams, useOutletContext } from 'react-router'
import { EmptyState } from '../components/EmptyState/EmptyState'
import { PersonalDataContent } from '../components/PersonalDataContent/PersonalDataContent'
import { CONTENT_DESTINATION_ID } from '../data/navItems'
import type { NavigationMode } from '../hooks/useNavigationMode'

/** Path "/:itemId" — a nav item was selected. */
export function DestinationRoute() {
  const { itemId } = useParams()
  const mode = useOutletContext<NavigationMode>()

  if (itemId === CONTENT_DESTINATION_ID) {
    return <PersonalDataContent />
  }
  return <EmptyState variant={mode === 'drawer' ? 'shield' : 'lock'} />
}
