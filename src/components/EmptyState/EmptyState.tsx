import * as React from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import type { IconComponent } from '../../data/navItems'
import { IconLockKeyholeLarge, IconShieldCheck } from '../Icons'

// Per-variant data (icon + text + its own accent color), not a reusable style token —
// kept separate from STYLES rather than folded in, since it's a variant lookup table.
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

export interface EmptyStateProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType | undefined

  variant: EmptyStateVariant
}

const STYLES = {
  root: 'd-flex flex-column justify-content-center align-items-center gap-4 flex-fill align-self-stretch p-9',
  text: 'm-0 text-body-secondary text-center',
} as const

const EmptyState: DynamicRefForwardingComponent<'div', EmptyStateProps> = React.forwardRef<HTMLElement, EmptyStateProps>(
  ({ variant, className, as: Component = 'div', ...rest }, ref) => {
    const { Icon, className: iconClassName, text } = VARIANTS[variant]

    return (
      <Component ref={ref} className={clsx(className, STYLES.root)} {...rest}>
        <Icon className={iconClassName} />
        <p className={STYLES.text}>{text}</p>
      </Component>
    )
  },
)

EmptyState.displayName = 'EmptyState'

export { EmptyState }
