import clsx from 'clsx'
import type { IconComponent } from '../../data/navItems'
import { IconLockKeyholeLarge, IconShieldCheck } from '../Icons'

const VARIANTS: Record<'lock' | 'shield', { Icon: IconComponent; className: string; text: string }> = {
  lock: {
    Icon: IconLockKeyholeLarge,
    // #777777 — exact match for Bootstrap's $body-secondary-color override.
    className: 'text-body-secondary',
    text: 'Inhalte geschützt — Wählen Sie ein Navigationsziel',
  },
  shield: {
    Icon: IconShieldCheck,
    // #E9EAEA — lighter than any Bootstrap text-color utility; see _bootstrap-custom.scss.
    className: 'text-border-color',
    text: 'Inhalte geschützt',
  },
}

export type EmptyStateVariant = keyof typeof VARIANTS

interface EmptyStateProps {
  variant: EmptyStateVariant
}

const ROOT = 'd-flex flex-column justify-content-center align-items-center gap-4 flex-fill align-self-stretch p-9'
const TEXT = 'm-0 text-body-secondary text-center'

export function EmptyState({ variant }: EmptyStateProps) {
  const { Icon, className, text } = VARIANTS[variant]

  return (
    <div className={clsx(ROOT)}>
      <Icon className={clsx(className)} />
      <p className={clsx(TEXT)}>{text}</p>
    </div>
  )
}
