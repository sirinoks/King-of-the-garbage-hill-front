<template>
  <div class="homeProfile">
    <div class="userInfo">
        <div class="userName">
            {{username}}
        </div>
        <div class="currency">
            <div>
            {{ currency }}
            </div>
            <div>
                <PhCoins :size="20" weight="fill" color="var(--kh-c-text-highlight-primary)" />
            </div>
        </div>
    </div>
    <div class="matches">
        <div>
            <h4>Matches</h4>
        </div>
        <div class="matchList">
            <MatchBox v-for="match in matchCards" :key="match.matchId" :match="match" />
        </div>
    </div>
    <div class="chances">
        <div>
            <h4>
                Chances
            </h4>
        </div>
        <div class="chanceList">
            <ChanceBox v-for="chance in chances" :key="chance.heroId" :hero="getHeroById(chance.heroId)" :chance="chance.chance"></ChanceBox>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MatchBox from '@/components/Home/MatchBox.vue'
import ChanceBox from '@/components/Home/ChanceBox.vue'
import { PhCoins } from '@phosphor-icons/vue'
import {Heroes} from '@/types/heroes'
import type{MatchHistory} from '@/types/matchHistory'
import type { HeroSummary } from '@/types/heroes'


const username = ref('Sirinoks')
const currency = ref(124)

const chances = [
    {heroId: 'octopus', chance: 16.4},
    {heroId: 'tain', chance: 12.5},
    {heroId: 'sirinoks', chance: 7.1},
]

const heroById: Record<string, HeroSummary> = Object.fromEntries(
  Heroes.map((h) => [h.id, h]),
)

const getHeroById = (heroId: string): HeroSummary => {
  const hero = heroById[heroId]
  if (!hero) throw new Error(`Unknown heroId: ${heroId}`)
  return hero
}

const matches: MatchHistory[] = [
    {
        matchId: 54352367,
        dateBegin: new Date().toISOString(),
        dateEnd: new Date().toISOString(),
        gains: {
            gold: 120,
            exp: 40,
            elo: 1250
        },
        participantId: '12f3',
        players: [
            {playerId: '12f3', heroId: 'leCrisp', place: 1},
            {playerId: '03', heroId: 'mylorik', place: 2},
            {playerId: '04', heroId: 'tain', place: 3},
            {playerId: '05', heroId: 'sirinoks', place: 4},
            {playerId: '06', heroId: 'kraborak', place: 5},
            {playerId: '07', heroId: 'awdka', place: 6},
            {playerId: '08', heroId: 'bratishka', place: 8},
            {playerId: '02', heroId: 'hardKitty', place: 7},
        ],
    },
    {
        matchId: 65644645,
        dateBegin: new Date().toISOString(),
        dateEnd: new Date().toISOString(),
        gains: {
            gold: 0,
            exp: 4,
            elo: 1123
        },
        participantId: '06',
        players: [
            {playerId: '12f3', heroId: 'octopus', place: 1},
            {playerId: '03', heroId: 'mylorik', place: 3},
            {playerId: '04', heroId: 'deepList', place: 2},
            {playerId: '05', heroId: 'leCrisp', place: 4},
            {playerId: '06', heroId: 'tolya', place: 5},
            {playerId: '01', heroId: 'awdka', place: 6},
            {playerId: '07', heroId: 'kratos', place: 7},
            {playerId: '08', heroId: 'tigr', place: 8}
        ],
    }
]

const matchCards = computed(() =>
  matches.map((m) => ({
    ...m,
    players: m.players.map((p) => ({ ...p, hero: getHeroById(p.heroId) }))
  }))
)
</script>

<style scoped>
*{display: flex;}
.homeProfile{
    background-color: var(--kh-c-neutrals-sat-600);
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
}

.homeProfile h4{
    font-size: 1rem;
    color: var(--kh-c-text-primary-700);
}
.userInfo{
    flex-direction: column;
    font-size: 1.5rem;
    color: var(--kh-c-text-primary-700);
    gap: 0.75rem;
}
.currency{
    gap: 0.25rem;
    color: var(--kh-c-text-highlight-primary);
    align-items: center;
}

.homeProfile>div{
    flex-direction: column;
}


.matches{
    flex-direction: column;
    gap: 0.5rem;
}
.matchList, .chanceList{
    flex-direction: column;
    gap: 0.5rem;
}

.chances{
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.chances .chanceList {
    gap: 0.5rem;
}

</style>