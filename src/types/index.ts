export interface QuizOption {
  id: number
  letter: 'A' | 'B' | 'C' | 'D'
  text: string
  score_key: string
}

export interface QuizQuestion {
  id: number
  position: number
  scenario_title: string
  scene_text: string
  dimension: 'SOC' | 'TRU' | 'DEC' | 'ACT'
  options: QuizOption[]
}

export type Element = 'fire' | 'water' | 'earth' | 'air'

export interface Archetype {
  slug: string
  name: string
  element: Element
  tagline: string
  core_trait: string
  strengths: string[]
  blind_spots: string[]
  primary_scam: string
  secondary_scam: string
  scam_vulnerability_details: string
  compatible_types: string[]
  clashing_types: string[]
  safe_tips: string[]
  soc_pole: string
  tru_pole: string
  dec_pole: string
  act_pole: string
}
