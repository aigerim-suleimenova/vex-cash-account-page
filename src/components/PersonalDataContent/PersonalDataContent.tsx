import { IconMars } from '../Icons'
import { PERSONAL_DATA_SECTIONS, type PersonalDataSection } from '../../data/personalData'

// Named so the JSX below reads like the old semantic class names did
// (.pdc, .pdc-field, etc.) despite being built from Bootstrap utilities.
const ROOT = 'd-flex align-items-start gap-6 gap-md-7 flex-fill align-self-stretch p-6 p-md-7 p-lg-9'
const COLUMN_LEFT = 'd-flex flex-column align-items-start gap-1 gap-md-3 gap-lg-1 flex-fill min-w-0'
const COLUMN_RIGHT = 'd-flex flex-column align-items-start gap-4 gap-md-6 gap-lg-4 flex-fill min-w-0'
const SECTION = 'd-flex flex-column align-items-start align-self-stretch'
const SECTION_HEADER = 'd-flex flex-column gap-2 pt-3 pb-2 align-self-stretch'
const SECTION_TITLE = 'm-0 fs-xl fw-bold text-break'
const SECTION_ACCENT = 'h-2px align-self-stretch bg-primary'
// Stacked at mobile (<768px)/desktop+ (992px+), a same-row form field only at the
// tablet tier (768–991px) — see design.md - Decisions for why this flips twice, not once.
const FIELD_ROW =
  'd-flex flex-column flex-md-row flex-lg-column align-items-start align-items-md-center align-items-lg-start justify-content-md-between gap-1 py-3 align-self-stretch border-bottom border-divider'
const FIELD_LABEL = 'pdc-field-label text-body-secondary fw-normal fs-xs fs-md-sm text-md-end text-lg-start text-break'
const FIELD_VALUE = 'd-flex align-items-center gap-2 fw-semibold fs-md fs-md-base fs-lg-md ps-md-6 ps-lg-0 text-break'

function Section({ section }: { section: PersonalDataSection }) {
  return (
    <div className={SECTION}>
      <div className={SECTION_HEADER}>
        <h3 className={SECTION_TITLE}>{section.title}</h3>
        <div className={SECTION_ACCENT} />
      </div>
      {section.fields.map((field, index) => (
        <div
          className={FIELD_ROW}
          key={field.label}
          style={index === section.fields.length - 1 ? { borderBottom: 'none' } : undefined}
        >
          <div className={FIELD_LABEL}>{field.label}</div>
          <div className={FIELD_VALUE}>
            {field.icon === 'mars' && <IconMars />}
            <span>{field.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function PersonalDataContent() {
  const [left, ...right] = PERSONAL_DATA_SECTIONS

  return (
    <div className={ROOT}>
      <div className={COLUMN_LEFT}>
        <Section section={left} />
      </div>
      <div className={COLUMN_RIGHT}>
        {right.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}
