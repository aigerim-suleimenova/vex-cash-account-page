import type { ComponentType, SVGProps } from 'react'
import {
  IconBanknote,
  IconUpload,
  IconUser,
  IconMail,
  IconLockKeyhole,
  IconGift,
  IconHandshake,
  IconLogOut,
} from '../components/Icons'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface NavItem {
  id: string
  label: string
  Icon: IconComponent
  DrawerIcon: IconComponent
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'kredite', label: 'Kredite', Icon: IconBanknote, DrawerIcon: IconBanknote },
  {
    id: 'dokumente',
    label: 'Dokumente hochladen',
    Icon: IconUpload,
    DrawerIcon: IconUpload,
  },
  {
    id: 'persoenliche-daten',
    label: 'Persönliche Daten',
    Icon: IconUser,
    DrawerIcon: IconUser,
  },
  { id: 'email', label: 'E-Mail ändern', Icon: IconMail, DrawerIcon: IconMail },
  {
    id: 'kennwort',
    label: 'Kennwort ändern',
    Icon: IconLockKeyhole,
    DrawerIcon: IconLockKeyhole,
  },
  {
    id: 'kunden-werben',
    label: 'Kunden werben',
    Icon: IconGift,
    DrawerIcon: IconHandshake,
  },
  { id: 'abmelden', label: 'Abmelden', Icon: IconLogOut, DrawerIcon: IconLogOut },
]

export const CONTENT_DESTINATION_ID = 'persoenliche-daten'
