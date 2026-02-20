<template>
  <article class="match">
    <div>
      <div class="winnerBox">
      <div class="winPlace">{{ winner?.place }}</div>
        <div class="matchHero matchHeroWin">
          <img v-if="winner" :src="winner.hero.avatar" :alt="winner.hero.name" :class="{ player: winner.playerId === props.match.participantId }" />
        </div>

      </div>
      <div class="othersBox">
        <time :datetime="props.match.dateEnd" class="matchDate">
          {{ formattedDateEnd }}
        </time>

        <div class="othersTopRow">
          <div class="matchHero matchHeroLose" v-for="player in topRow" :key="player.playerId">
            <img :src="player.hero.avatar" :alt="player.hero.name" :class="{ player: player.playerId === props.match.participantId }" />
          </div>
        </div>

      </div>
    </div>
    <div>
      <div class="matchGains">
        <div>+</div>
        <div>{{ props.match.gains.gold }}</div>
        <div>
          <PhCoins aria-hidden="true" :size="12" weight="fill" color="var(--kh-c-text-highlight-primary)" />
        </div>
        </div>
      <div class="othersBotRow">
        <div class="matchHero matchHeroLose" v-for="player in bottomRow" :key="player.playerId">
          <img :src="player.hero.avatar" :alt="player.hero.name" :class="{ player: player.playerId === props.match.participantId }" />
        </div>
      </div>
    </div>    
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PhCoins } from '@phosphor-icons/vue'
import type { MatchHistory, Player } from '@/types/matchHistory'
import type { HeroSummary } from '@/types/heroes'
import {formatMatchDate} from '@/utils/date'

type MatchPlayerCard = Player & { hero: HeroSummary }
type MatchCard = Omit<MatchHistory, 'players'> & { players: MatchPlayerCard[] }

const props = defineProps<{ match: MatchCard }>()

const playersSorted = computed(() => [...props.match.players].sort((a, b) => a.place - b.place))
const winner = computed(() => playersSorted.value[0])
const topRow = computed(() => playersSorted.value.slice(1, 4))
const bottomRow = computed(() => playersSorted.value.slice(4))
const formattedDateEnd = computed(() => formatMatchDate(props.match.dateEnd))
console.log(props)


</script>

<style scoped>
*{display:flex;}

.match{
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  align-items: end;
  align-content: end;
  background-color: var(--kh-c-neutrals-sat-650);
  border: 0.063rem solid var(--kh-c-neutrals-sat-500);
  cursor: pointer;
}

.match:hover{
  background-color: var(--kh-c-neutrals-sat-700);
}

.match>div:first-of-type{
  height: 3.125rem;
  gap: 0.25rem;
}
.match>div:last-of-type{
  height: 1.875rem;
}

.match div{
  gap: 0.25rem;
}

.match *{
  align-items: end;
  align-content: end;
}

.match img{
  width:1.875rem;
  height:1.875rem;
}
.match .winnerBox{
  align-self: stretch;
}

.match .othersBox{
  flex-direction: column;
}

.winPlace{
  padding: 0 0.25rem;
  font-size: 1rem;
  align-self: center;
}

.matchHeroWin img{
  height: 3.125rem;
  width: 3.125rem;
}

.match .matchHero .player{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 0.063rem solid var(--kh-c-text-highlight-primary);
}

.match .matchDate{
  font-size:0.625rem;
  color: var(--kh-c-text-primary-700);
}

.match .matchGains{
  width: 3.75rem;
  padding: 0 0.063rem;
  gap: 0;
  align-self: center;/*unsure, check if center or stretch to align correctly*/
  align-items: center;
  justify-content: flex-end;

  color: var(--kh-c-text-highlight-primary);
  font-size: 0.75rem;
}

.match .matchGains *{
  align-items: center;
  justify-content: center;
}

.match .matchGains div:last-of-type{
  width: 1rem;
  height: 1rem;
}


</style>
