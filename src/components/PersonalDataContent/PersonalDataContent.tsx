import { forwardRef, type ElementType, type HTMLAttributes } from 'react'
import clsx from 'clsx'
import type { DynamicRefForwardingComponent } from '../../types/polymorphic'
import { IconMars } from '../Icons'
import { PERSONAL_DATA_SECTIONS, type PersonalDataSection } from '../../data/personalData'

// Named so the JSX below reads like the old semantic class names did
// (.pdc, .pdc-field, etc.) despite being built from Bootstrap utilities.
const STYLES = {
  root: 'd-flex align-items-start gap-6 gap-md-7 flex-fill align-self-stretch p-6 p-md-7 p-lg-9',
  columnLeft: 'd-flex flex-column align-items-start gap-1 gap-md-3 gap-lg-1 flex-fill min-w-0',
  columnRight: 'd-flex flex-column align-items-start gap-4 gap-md-6 gap-lg-4 flex-fill min-w-0',
  section: 'd-flex flex-column align-items-start align-self-stretch',
  sectionHeader: 'd-flex flex-column gap-2 pt-3 pb-2 align-self-stretch',
  sectionTitle: 'm-0 fs-xl fw-bold text-break',
  sectionAccent: 'h-2px align-self-stretch bg-primary',
  // Stacked at mobile (<768px)/desktop+ (992px+), a same-row form field only at the
  // tablet tier (768–991px) — see design.md - Decisions for why this flips twice, not once.
  fieldRow:
    'pdc-field-row d-flex flex-column flex-md-row flex-lg-column align-items-start align-items-md-center align-items-lg-start justify-content-md-between gap-1 py-3 align-self-stretch border-bottom border-divider',
  fieldLabel: 'pdc-field-label text-body-secondary fw-normal fs-xs fs-md-sm text-md-end text-lg-start text-break',
  fieldValue: 'd-flex align-items-center gap-2 fw-semibold fs-md fs-md-base fs-lg-md ps-md-6 ps-lg-0 text-break',
} as const

// Private to this file — not part of the public API, so it doesn't need forwardRef/as
// itself; only PersonalDataContent's own root is a consumer-facing render target.
function Section({ section }: { section: PersonalDataSection }) {
  return (
    <div className={STYLES.section}>
      <div className={STYLES.sectionHeader}>
        <h3 className={STYLES.sectionTitle}>{section.title}</h3>
        <div className={STYLES.sectionAccent} />
      </div>
      {section.fields.map((field) => (
        <div className={STYLES.fieldRow} key={field.label}>
          <div className={STYLES.fieldLabel}>{field.label}</div>
          <div className={STYLES.fieldValue}>
            {field.icon === 'mars' && <IconMars />}
            <span>{field.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export interface PersonalDataContentProps extends HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: ElementType | undefined
}

const PersonalDataContent: DynamicRefForwardingComponent<'div', PersonalDataContentProps> = forwardRef<
  HTMLElement,
  PersonalDataContentProps
>(({ className, as: Component = 'div', ...rest }, ref) => {
  const [left, ...right] = PERSONAL_DATA_SECTIONS

  return (
    <Component ref={ref} className={clsx(className, STYLES.root)} {...rest}>
      <div className={STYLES.columnLeft}>
        <Section section={left} />
      </div>
      <div className={STYLES.columnRight}>
        {right.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </Component>
  )
})

PersonalDataContent.displayName = 'PersonalDataContent'

export { PersonalDataContent }
