import algoPng from 'assets/png/algoritmica.png';
import webmobilePng from 'assets/png/webmobile.png';
import gamedevPng from 'assets/png/gamedev.png';
import roROwebmobileInfoMd from './content/webmobile/ro-RO/info.md';
import roROwebmobileRulesMd from './content/webmobile/ro-RO/rules.md';
import roROwebmobilePreviousEditionsMd from './content/webmobile/ro-RO/previousEditions.md';
import roROgamedevInfoMd from './content/gamedev/ro-RO/info.md';
import roROgamedevRulesMd from './content/gamedev/ro-RO/rules.md';
import roROgamedevPreviousEditionsMd from './content/gamedev/ro-RO/previousEditions.md';
import roROalgoInfoMd from './content/algo/ro-RO/info.md';
import roROalgoRulesMd from './content/algo/ro-RO/rules.md';
import roROalgoPreviousEditionsMd from './content/algo/ro-RO/previousEditions.md';

import enUSwebmobileInfoMd from './content/webmobile/en-US/info.md';
import enUSwebmobileRulesMd from './content/webmobile/en-US/rules.md';
import enUSwebmobilePreviousEditionsMd from './content/webmobile/en-US/previousEditions.md';
import enUSgamedevInfoMd from './content/gamedev/en-US/info.md';
import enUSgamedevRulesMd from './content/gamedev/en-US/rules.md';
import enUSgamedevPreviousEditionsMd from './content/gamedev/en-US/previousEditions.md';
import enUSalgoInfoMd from './content/algo/en-US/info.md';
import enUSalgoRulesMd from './content/algo/en-US/rules.md';
import enUSalgoPreviousEditionsMd from './content/algo/en-US/previousEditions.md';

export const webMobile = {
  'ro-RO': {
    title: 'WEB/Mobile',
    roundsInfo: [
      {
        title: 'Runda online:',
        content: '10 Februarie - 17 Aprilie',
      },
      {
        title: 'Runda finala:',
        content: '28-30 August',
      },
    ],
    color: '#2f3490',
    image: webmobilePng,
    content: {
      info: roROwebmobileInfoMd,
      rules: roROwebmobileRulesMd,
      previousEditions: roROwebmobilePreviousEditionsMd,
    },
  },
  'en-US': {
    title: 'WEB/Mobile',
    roundsInfo: [
      {
        title: 'Online round:',
        content: '10 February - 17 April',
      },
      {
        title: 'Final round:',
        content: '28-30 August',
      },
    ],
    color: '#2f3490',
    image: webmobilePng,
    content: {
      info: enUSwebmobileInfoMd,
      rules: enUSwebmobileRulesMd,
      previousEditions: enUSwebmobilePreviousEditionsMd,
    },
  },
};

export const gamedev = {
  'ro-RO': {
    title: 'GAMEDEV',
    roundsInfo: [
      {
        title: 'Runda online:',
        content: '10 Februarie - 2 Mai',
      },
      {
        title: 'Runda finala:',
        content: '28-30 August',
      },
    ],
    color: '#bb2425',
    image: gamedevPng,
    content: {
      info: roROgamedevInfoMd,
      rules: roROgamedevRulesMd,
      previousEditions: roROgamedevPreviousEditionsMd,
    },
  },
  'en-US': {
    title: 'GAMEDEV',
    roundsInfo: [
      {
        title: 'Online round:',
        content: '10 February - 2 May',
      },
      {
        title: 'Final round:',
        content: '28-30 August',
      },
    ],
    color: '#bb2425',
    image: gamedevPng,
    content: {
      info: enUSgamedevInfoMd,
      rules: enUSgamedevRulesMd,
      previousEditions: enUSgamedevPreviousEditionsMd,
    },
  },
};
export const algo = {
  'ro-RO': {
    title: 'ALGORITMICA',
    roundsInfo: [
      {
        title: 'Prima runda:',
        content: '14 Februarie, 18:05 (UTC + 2)',
      },
      {
        title: 'A doua runda:',
        content: '28 Februarie, 18:05 (UTC + 2)',
      },
      {
        title: 'A treia runda:',
        content: '13 Martie, 18:05 (UTC + 2)',
      },
      {
        title: 'Finala:',
        content: '28-30 August',
      },
    ],
    color: '#193C46',
    image: algoPng,
    content: {
      info: roROalgoInfoMd,
      rules: roROalgoRulesMd,
      previousEditions: roROalgoPreviousEditionsMd,
    },
  },
  'en-US': {
    title: 'ALGORITHMICS',
    roundsInfo: [
      {
        title: 'First round:',
        content: '14 February, 18:05 (UTC + 2)',
      },
      {
        title: 'Second round:',
        content: '28 February, 18:05 (UTC + 2)',
      },
      {
        title: 'Third round:',
        content: '13 March, 18:05 (UTC + 2)',
      },
      {
        title: 'The final:',
        content: '28-30 August',
      },
    ],
    color: '#193C46',
    image: algoPng,
    content: {
      info: enUSalgoInfoMd,
      rules: enUSalgoRulesMd,
      previousEditions: enUSalgoPreviousEditionsMd,
    },
  },
};
