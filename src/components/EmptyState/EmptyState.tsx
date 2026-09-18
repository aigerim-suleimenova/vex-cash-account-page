import * as React from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
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

export interface EmptyStateProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: React.ElementType | undefined

  variant: EmptyStateVariant
}

const ROOT = 'd-flex flex-column justify-content-center align-items-center gap-4 flex-fill align-self-stretch p-9'
const TEXT = 'm-0 text-body-secondary text-center'

const EmptyState: DynamicRefForwardingComponent<'div', EmptyStateProps> = React.forwardRef<HTMLElement, EmptyStateProps>(
  ({ variant, className, as: Component = 'div', ...rest }, ref) => {
    const { Icon, className: iconClassName, text } = VARIANTS[variant]

    return (
      <Component ref={ref} className={clsx(className, ROOT)} {...rest}>
        <Icon className={clsx(iconClassName)} />
        <p className={clsx(TEXT)}>{text}</p>
      </Component>
    )
  },
)

EmptyState.displayName = 'EmptyState'

export { EmptyState }
