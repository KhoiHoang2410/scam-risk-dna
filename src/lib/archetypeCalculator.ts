import archetypesData from '@/data/archetypes.json'
import type { Archetype } from '@/types/index'

const DIMENSION_POLES: Record<string, [string, string]> = {
  SOC: ['SOC_OUT', 'SOC_IN'],
  TRU: ['TRU_GUT', 'TRU_FAC'],
  DEC: ['DEC_HAR', 'DEC_LOG'],
  ACT: ['ACT_STR', 'ACT_SPO'],
}

const POLE_CODES: Record<string, string> = {
  SOC_OUT: 'OUT',
  SOC_IN: 'IN',
  TRU_GUT: 'GUT',
  TRU_FAC: 'FAC',
  DEC_HAR: 'HAR',
  DEC_LOG: 'LOG',
  ACT_STR: 'STR',
  ACT_SPO: 'SPO',
}

function tallyCounts(answers: Record<number, string>): Record<string, number> {
  const tally: Record<string, number> = {}
  for (const scoreKey of Object.values(answers)) {
    tally[scoreKey] = (tally[scoreKey] ?? 0) + 1
  }
  return tally
}

function buildDimensionCode(tally: Record<string, number>): string {
  const poles = Object.entries(DIMENSION_POLES).map(([, [first, second]]) => {
    const firstCount = tally[first] ?? 0
    const secondCount = tally[second] ?? 0
    return POLE_CODES[firstCount >= secondCount ? first : second]
  })
  return poles.join('_')
}

export function calculateArchetype(answers: Record<number, string>): Archetype | null {
  const tally = tallyCounts(answers)
  const code = buildDimensionCode(tally)

  const [soc, tru, dec, act] = code.split('_')
  const archetype = (archetypesData.archetypes as Archetype[]).find(
    (a) => a.soc_pole === soc && a.tru_pole === tru && a.dec_pole === dec && a.act_pole === act
  )
  return archetype ?? null
}
