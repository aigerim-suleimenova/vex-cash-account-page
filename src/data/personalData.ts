export interface PersonalDataField {
  label: string
  value: string
  icon?: 'mars'
}

export interface PersonalDataSection {
  id: string
  title: string
  fields: PersonalDataField[]
}

export const PERSONAL_DATA_SECTIONS: PersonalDataSection[] = [
  {
    id: 'persoenliche-daten',
    title: 'Persönliche Daten',
    fields: [
      { label: 'Anrede', value: 'Herr', icon: 'mars' },
      { label: 'Vorname', value: 'John' },
      { label: 'Nachname', value: 'Smith' },
      { label: 'Geburtsdatum', value: '27.08.1997' },
      { label: 'Geburtsort', value: 'Sindelfingen' },
      { label: 'Mobiltelefon-Nummer', value: '01606112233' },
      { label: 'Staatsbürgerschaft', value: 'Deutsch' },
    ],
  },
  {
    id: 'familiaere-angaben',
    title: 'Familiäre Angaben',
    fields: [
      { label: 'Familienstand', value: 'verheiratet' },
      { label: 'Kinder', value: '2' },
      { label: 'Kindergeld', value: 'Ja' },
    ],
  },
  {
    id: 'beschaeftigungsdaten',
    title: 'Beschäftigungsdaten',
    fields: [
      { label: 'Beschäftigungsstatus', value: 'Vollzeitanstellung' },
      { label: 'Arbeiten Sie in Kurzarbeit?', value: 'Nein' },
      { label: 'Nettoeinkommen', value: '2.500 €' },
    ],
  },
]
