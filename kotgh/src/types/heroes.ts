import deepListAvatar from '@/assets/heroes/deepList.png'
import mylorikAvatar from '@/assets/heroes/mylorik.png'
import glebAvatar from '@/assets/heroes/gleb.png'
import leCrispAvatar from '@/assets/heroes/le_crisp.png'
import tolyaAvatar from '@/assets/heroes/tolya.png'
import hardKittyAvatar from '@/assets/heroes/amumu.png'
import sirinoksAvatar from '@/assets/heroes/sirinoks.png'
import mitsukiAvatar from '@/assets/heroes/mitsuki5.png'
import awdkaAvatar from '@/assets/heroes/awdka.png'
import octupusAvatar from '@/assets/heroes/octopus.png'
import darksciAvatar from '@/assets/heroes/darksci2.png'
import tigrAvatar from '@/assets/heroes/tigr.png'
import bratishkaAvatar from '@/assets/heroes/bratishka.png'
import tainAvatar from '@/assets/heroes/tain.png'
import vampyrAvatar from '@/assets/heroes/vampyr.png'
import kraborakAvatar from '@/assets/heroes/kraborak.png'
import weedwickAvatar from '@/assets/heroes/weedwick.png'
import kratosAvatar from '@/assets/heroes/kratos.png'



// kotgh/src/types/hero.ts
export interface HeroSummary {
  id: string
  name: string
  avatar: string
}


export const Heroes: HeroSummary[] = [
  {
    id: 'deepList',
    name: 'DeepList',
    avatar: deepListAvatar,
  },
  {
    id: 'mylorik',
    name: 'mylorik',
    avatar: mylorikAvatar,
  },
  {
    id: 'gleb',
    name: 'Глеб',
    avatar: glebAvatar,
  },
  {
    id: 'leCrisp',
    name: 'LeCrisp',
    avatar: leCrispAvatar,
  },
  {
    id: 'tolya',
    name: 'Толя',
    avatar: tolyaAvatar,
  },
  {
    id: 'hardKitty',
    name: 'HardKitty',
    avatar: hardKittyAvatar,
  },
  {
    id: 'sirinoks',
    name: 'Sirinoks',
    avatar: sirinoksAvatar,
  },
  {
    id: 'mitsuki',
    name: 'Школоло',
    avatar: mitsukiAvatar,
  },
  {
    id: 'awdka',
    name: 'AWDKA',
    avatar: awdkaAvatar,
  },
  {
    id: 'octopus',
    name: 'Осминожка',
    avatar: octupusAvatar,
  },
  {
    id: 'darksci',
    name: 'Darksci',
    avatar: darksciAvatar,
  },
  {
    id: 'tigr',
    name: 'Тигр',
    avatar: tigrAvatar,
  },
  {
    id: 'bratishka',
    name: 'Братишка',
    avatar: bratishkaAvatar,
  },
  {
    id: 'tain',
    name: 'Загадочный Спартанец в маске',
    avatar: tainAvatar,
  },
  {
    id: 'vampyr',
    name: 'Вампур',
    avatar: vampyrAvatar,
  },
  {
    id: 'kraborak',
    name: 'Краборак',
    avatar: kraborakAvatar,
  },
  {
    id: 'weedwick',
    name: 'Видвик',
    avatar: weedwickAvatar,
  },
  {
    id: 'kratos',
    name: 'Кратос',
    avatar: kratosAvatar,
  },
]