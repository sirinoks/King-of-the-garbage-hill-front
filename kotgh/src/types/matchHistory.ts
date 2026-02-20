import type { HeroSummary } from './heroes'

type HeroId = HeroSummary['id']

export interface Player {
  playerId: string
  heroId: HeroId
  place: number
}

export interface MatchHistory {
  matchId: number
  dateBegin: string
  dateEnd: string
  gains: {
    gold: number
    exp: number
    elo: number
  }
  participantId?: string
  players: Player[]
}
