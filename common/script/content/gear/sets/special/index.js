import {
  EVENTS,
} from '../../../constants';
import { ownsItem } from '../../gear-helper';
import backerGear from './special-backer';
import contributorGear from './special-contributor';
import wonderconGear from './special-wondercon';
import t from '../../../translation';

let armor = {
  0: backerGear.armorSpecial0,
  1: contributorGear.armorSpecial1,
  2: backerGear.armorSpecial2,
  finnedOceanicArmor: {
    text: t('armorSpecialFinnedOceanicArmorText'),
    notes: t('armorSpecialFinnedOceanicArmorNotes', { str: 15 }),
    str: 15,
    value: 130,
    canOwn: ownsItem('armor_special_finnedOceanicArmor'),
  },
  yeti: {
    event: EVENTS.winter,
    specialClass: 'warrior',
    text: t('armorSpecialYetiText'),
    notes: t('armorSpecialYetiNotes', { con: 9 }),
    con: 9,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  ski: {
    event: EVENTS.winter,
    specialClass: 'rogue',
    text: t('armorSpecialSkiText'),
    notes: t('armorSpecialSkiNotes', { per: 15 }),
    per: 15,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  candycane: {
    event: EVENTS.winter,
    specialClass: 'wizard',
    text: t('armorSpecialCandycaneText'),
    notes: t('armorSpecialCandycaneNotes', { int: 9 }),
    int: 9,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  snowflake: {
    event: EVENTS.winter,
    specialClass: 'healer',
    text: t('armorSpecialSnowflakeText'),
    notes: t('armorSpecialSnowflakeNotes', { con: 15 }),
    con: 15,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  birthday: {
    event: EVENTS.birthday,
    text: t('armorSpecialBirthdayText'),
    notes: t('armorSpecialBirthdayNotes'), value: 0,
  },
  springRogue: {
    event: EVENTS.spring,
    specialClass: 'rogue',
    text: t('armorSpecialSpringRogueText'),
    notes: t('armorSpecialSpringRogueNotes', { per: 15 }),
    value: 90,
    per: 15,
  },
  springWarrior: {
    event: EVENTS.spring,
    specialClass: 'warrior',
    text: t('armorSpecialSpringWarriorText'),
    notes: t('armorSpecialSpringWarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
  },
  springMage: {
    event: EVENTS.spring,
    specialClass: 'wizard',
    text: t('armorSpecialSpringMageText'),
    notes: t('armorSpecialSpringMageNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  springHealer: {
    event: EVENTS.spring,
    specialClass: 'healer',
    text: t('armorSpecialSpringHealerText'),
    notes: t('armorSpecialSpringHealerNotes', { con: 15 }),
    value: 90,
    con: 15,
  },
  summerRogue: {
    event: EVENTS.summer,
    specialClass: 'rogue',
    text: t('armorSpecialSummerRogueText'),
    notes: t('armorSpecialSummerRogueNotes', { per: 15 }),
    value: 90,
    per: 15,
  },
  summerWarrior: {
    event: EVENTS.summer,
    specialClass: 'warrior',
    text: t('armorSpecialSummerWarriorText'),
    notes: t('armorSpecialSummerWarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
  },
  summerMage: {
    event: EVENTS.summer,
    specialClass: 'wizard',
    text: t('armorSpecialSummerMageText'),
    notes: t('armorSpecialSummerMageNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  summerHealer: {
    event: EVENTS.summer,
    specialClass: 'healer',
    text: t('armorSpecialSummerHealerText'),
    notes: t('armorSpecialSummerHealerNotes', { con: 15 }),
    value: 90,
    con: 15,
  },
  fallRogue: {
    event: EVENTS.fall,
    specialClass: 'rogue',
    text: t('armorSpecialFallRogueText'),
    notes: t('armorSpecialFallRogueNotes', { per: 15 }),
    value: 90,
    per: 15,
    canBuy: () => {
      return true;
    },
  },
  fallWarrior: {
    event: EVENTS.fall,
    specialClass: 'warrior',
    text: t('armorSpecialFallWarriorText'),
    notes: t('armorSpecialFallWarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
    canBuy: () => {
      return true;
    },
  },
  fallMage: {
    event: EVENTS.fall,
    specialClass: 'wizard',
    text: t('armorSpecialFallMageText'),
    notes: t('armorSpecialFallMageNotes', { int: 9 }),
    value: 90,
    int: 9,
    canBuy: () => {
      return true;
    },
  },
  fallHealer: {
    event: EVENTS.fall,
    specialClass: 'healer',
    text: t('armorSpecialFallHealerText'),
    notes: t('armorSpecialFallHealerNotes', { con: 15 }),
    value: 90,
    con: 15,
    canBuy: () => {
      return true;
    },
  },
  winter2015Rogue: {
    event: EVENTS.winter2015,
    specialClass: 'rogue',
    text: t('armorSpecialWinter2015RogueText'),
    notes: t('armorSpecialWinter2015RogueNotes', { per: 15 }),
    value: 90,
    per: 15,
    canBuy: () => {
      return true;
    },
  },
  winter2015Warrior: {
    event: EVENTS.winter2015,
    specialClass: 'warrior',
    text: t('armorSpecialWinter2015WarriorText'),
    notes: t('armorSpecialWinter2015WarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
    canBuy: () => {
      return true;
    },
  },
  winter2015Mage: {
    event: EVENTS.winter2015,
    specialClass: 'wizard',
    text: t('armorSpecialWinter2015MageText'),
    notes: t('armorSpecialWinter2015MageNotes', { int: 9 }),
    value: 90,
    int: 9,
    canBuy: () => {
      return true;
    },
  },
  winter2015Healer: {
    event: EVENTS.winter2015,
    specialClass: 'healer',
    text: t('armorSpecialWinter2015HealerText'),
    notes: t('armorSpecialWinter2015HealerNotes', { con: 15 }),
    value: 90,
    con: 15,
    canBuy: () => {
      return true;
    },
  },
  birthday2015: {
    text: t('armorSpecialBirthday2015Text'),
    notes: t('armorSpecialBirthday2015Notes'),
    value: 0,
    canOwn: ownsItem('armor_special_birthday2015'),
  },
  spring2015Rogue: {
    event: EVENTS.spring2015,
    specialClass: 'rogue',
    text: t('armorSpecialSpring2015RogueText'),
    notes: t('armorSpecialSpring2015RogueNotes', { per: 15 }),
    value: 90,
    per: 15,
  },
  spring2015Warrior: {
    event: EVENTS.spring2015,
    specialClass: 'warrior',
    text: t('armorSpecialSpring2015WarriorText'),
    notes: t('armorSpecialSpring2015WarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
  },
  spring2015Mage: {
    event: EVENTS.spring2015,
    specialClass: 'wizard',
    text: t('armorSpecialSpring2015MageText'),
    notes: t('armorSpecialSpring2015MageNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  spring2015Healer: {
    event: EVENTS.spring2015,
    specialClass: 'healer',
    text: t('armorSpecialSpring2015HealerText'),
    notes: t('armorSpecialSpring2015HealerNotes', { con: 15 }),
    value: 90,
    con: 15,
  },
  summer2015Rogue: {
    event: EVENTS.summer2015,
    specialClass: 'rogue',
    text: t('armorSpecialSummer2015RogueText'),
    notes: t('armorSpecialSummer2015RogueNotes', { per: 15 }),
    value: 90,
    per: 15,
  },
  summer2015Warrior: {
    event: EVENTS.summer2015,
    specialClass: 'warrior',
    text: t('armorSpecialSummer2015WarriorText'),
    notes: t('armorSpecialSummer2015WarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
  },
  summer2015Mage: {
    event: EVENTS.summer2015,
    specialClass: 'wizard',
    text: t('armorSpecialSummer2015MageText'),
    notes: t('armorSpecialSummer2015MageNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  summer2015Healer: {
    event: EVENTS.summer2015,
    specialClass: 'healer',
    text: t('armorSpecialSummer2015HealerText'),
    notes: t('armorSpecialSummer2015HealerNotes', { con: 15 }),
    value: 90,
    con: 15,
  },
  fall2015Rogue: {
    event: EVENTS.fall2015,
    specialClass: 'rogue',
    text: t('armorSpecialFall2015RogueText'),
    notes: t('armorSpecialFall2015RogueNotes', { per: 15 }),
    value: 90,
    per: 15,
  },
  fall2015Warrior: {
    event: EVENTS.fall2015,
    specialClass: 'warrior',
    text: t('armorSpecialFall2015WarriorText'),
    notes: t('armorSpecialFall2015WarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
  },
  fall2015Mage: {
    event: EVENTS.fall2015,
    specialClass: 'wizard',
    text: t('armorSpecialFall2015MageText'),
    notes: t('armorSpecialFall2015MageNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  fall2015Healer: {
    event: EVENTS.fall2015,
    specialClass: 'healer',
    text: t('armorSpecialFall2015HealerText'),
    notes: t('armorSpecialFall2015HealerNotes', { con: 15 }),
    value: 90,
    con: 15,
  },
  gaymerx: {
    event: EVENTS.gaymerx,
    text: t('armorSpecialGaymerxText'),
    notes: t('armorSpecialGaymerxNotes'),
    value: 0,
  },
  winter2016Rogue: {
    event: EVENTS.winter2016,
    specialClass: 'rogue',
    text: t('armorSpecialWinter2016RogueText'),
    notes: t('armorSpecialWinter2016RogueNotes', { per: 15 }),
    value: 90,
    per: 15,
  },
  winter2016Warrior: {
    event: EVENTS.winter2016,
    specialClass: 'warrior',
    text: t('armorSpecialWinter2016WarriorText'),
    notes: t('armorSpecialWinter2016WarriorNotes', { con: 9 }),
    value: 90,
    con: 9,
  },
  winter2016Mage: {
    event: EVENTS.winter2016,
    specialClass: 'wizard',
    text: t('armorSpecialWinter2016MageText'),
    notes: t('armorSpecialWinter2016MageNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  winter2016Healer: {
    event: EVENTS.winter2016,
    specialClass: 'healer',
    text: t('armorSpecialWinter2016HealerText'),
    notes: t('armorSpecialWinter2016HealerNotes', { con: 15 }),
    value: 90,
    con: 15,
  },
  birthday2016: {
    text: t('armorSpecialBirthday2016Text'),
    notes: t('armorSpecialBirthday2016Notes'),
    value: 0,
    canOwn: ownsItem('armor_special_birthday2016'),
  },
};

let back = {
  wondercon_red: wonderconGear.backSpecialWonderconRed,  // eslint-disable-line camelcase
  wondercon_black: wonderconGear.backSpecialWonderconBlack,  // eslint-disable-line camelcase
};

let body = {
  wondercon_red: wonderconGear.bodySpecialWonderconRed,  // eslint-disable-line camelcase
  wondercon_gold: wonderconGear.bodySpecialWonderconGold,  // eslint-disable-line camelcase
  wondercon_black: wonderconGear.bodySpecialWonderconBlack,  // eslint-disable-line camelcase
  summerHealer: {
    event: EVENTS.summer,
    specialClass: 'healer',
    text: t('bodySpecialSummerHealerText'),
    notes: t('bodySpecialSummerHealerNotes'),
    value: 20,
  },
  summerMage: {
    event: EVENTS.summer,
    specialClass: 'wizard',
    text: t('bodySpecialSummerMageText'),
    notes: t('bodySpecialSummerMageNotes'),
    value: 20,
  },
  summer2015Healer: {
    event: EVENTS.summer2015,
    specialClass: 'healer',
    text: t('bodySpecialSummer2015HealerText'),
    notes: t('bodySpecialSummer2015HealerNotes'),
    value: 20,
  },
  summer2015Mage: {
    event: EVENTS.summer2015,
    specialClass: 'wizard',
    text: t('bodySpecialSummer2015MageText'),
    notes: t('bodySpecialSummer2015MageNotes'),
    value: 20,
  },
  summer2015Rogue: {
    event: EVENTS.summer2015,
    specialClass: 'rogue',
    text: t('bodySpecialSummer2015RogueText'),
    notes: t('bodySpecialSummer2015RogueNotes'),
    value: 20,
  },
  summer2015Warrior: {
    event: EVENTS.summer2015,
    specialClass: 'warrior',
    text: t('bodySpecialSummer2015WarriorText'),
    notes: t('bodySpecialSummer2015WarriorNotes'),
    value: 20,
  },
};

let eyewear = {
  wondercon_red: wonderconGear.eyewearSpecialWonderconRed,  // eslint-disable-line camelcase
  wondercon_black: wonderconGear.eyewearSpecialWonderconBlack,  // eslint-disable-line camelcase
  summerRogue: {
    event: EVENTS.summer,
    specialClass: 'rogue',
    text: t('eyewearSpecialSummerRogueText'),
    notes: t('eyewearSpecialSummerRogueNotes'),
    value: 20,
  },
  summerWarrior: {
    event: EVENTS.summer,
    specialClass: 'warrior',
    text: t('eyewearSpecialSummerWarriorText'),
    notes: t('eyewearSpecialSummerWarriorNotes'),
    value: 20,
  },
};

let head = {
  0: backerGear.headSpecial0,
  1: contributorGear.headSpecial1,
  2: backerGear.headSpecial2,
  fireCoralCirclet: {
    text: t('headSpecialFireCoralCircletText'),
    notes: t('headSpecialFireCoralCircletNotes', { per: 15 }),
    per: 15,
    value: 130,
    canOwn: ownsItem('head_special_fireCoralCirclet'),
  },
  nye: {
    event: EVENTS.winter2016,
    text: t('headSpecialNyeText'),
    notes: t('headSpecialNyeNotes'),
    value: 0,
  },
  yeti: {
    event: EVENTS.winter,
    specialClass: 'warrior',
    text: t('headSpecialYetiText'),
    notes: t('headSpecialYetiNotes', { str: 9 }),
    str: 9,
    value: 60,
    canBuy: () => {
      return true;
    },
  },
  ski: {
    event: EVENTS.winter,
    specialClass: 'rogue',
    text: t('headSpecialSkiText'),
    notes: t('headSpecialSkiNotes', { per: 9 }),
    per: 9,
    value: 60,
    canBuy: () => {
      return true;
    },
  },
  candycane: {
    event: EVENTS.winter,
    specialClass: 'wizard',
    text: t('headSpecialCandycaneText'),
    notes: t('headSpecialCandycaneNotes', { per: 7 }),
    per: 7,
    value: 60,
    canBuy: () => {
      return true;
    },
  },
  snowflake: {
    event: EVENTS.winter,
    specialClass: 'healer',
    text: t('headSpecialSnowflakeText'),
    notes: t('headSpecialSnowflakeNotes', { int: 7 }),
    int: 7,
    value: 60,
    canBuy: () => {
      return true;
    },
  },
  springRogue: {
    event: EVENTS.spring,
    specialClass: 'rogue',
    text: t('headSpecialSpringRogueText'),
    notes: t('headSpecialSpringRogueNotes', { per: 9 }),
    value: 60,
    per: 9,
  },
  springWarrior: {
    event: EVENTS.spring,
    specialClass: 'warrior',
    text: t('headSpecialSpringWarriorText'),
    notes: t('headSpecialSpringWarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
  },
  springMage: {
    event: EVENTS.spring,
    specialClass: 'wizard',
    text: t('headSpecialSpringMageText'),
    notes: t('headSpecialSpringMageNotes', { per: 7 }),
    value: 60,
    per: 7,
  },
  springHealer: {
    event: EVENTS.spring,
    specialClass: 'healer',
    text: t('headSpecialSpringHealerText'),
    notes: t('headSpecialSpringHealerNotes', { int: 7 }),
    value: 60,
    int: 7,
  },
  summerRogue: {
    event: EVENTS.summer,
    specialClass: 'rogue',
    text: t('headSpecialSummerRogueText'),
    notes: t('headSpecialSummerRogueNotes', { per: 9 }),
    value: 60,
    per: 9,
  },
  summerWarrior: {
    event: EVENTS.summer,
    specialClass: 'warrior',
    text: t('headSpecialSummerWarriorText'),
    notes: t('headSpecialSummerWarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
  },
  summerMage: {
    event: EVENTS.summer,
    specialClass: 'wizard',
    text: t('headSpecialSummerMageText'),
    notes: t('headSpecialSummerMageNotes', { per: 7 }),
    value: 60,
    per: 7,
  },
  summerHealer: {
    event: EVENTS.summer,
    specialClass: 'healer',
    text: t('headSpecialSummerHealerText'),
    notes: t('headSpecialSummerHealerNotes', { int: 7 }),
    value: 60,
    int: 7,
  },
  fallRogue: {
    event: EVENTS.fall,
    specialClass: 'rogue',
    text: t('headSpecialFallRogueText'),
    notes: t('headSpecialFallRogueNotes', { per: 9 }),
    value: 60,
    per: 9,
    canBuy: () => {
      return true;
    },
  },
  fallWarrior: {
    event: EVENTS.fall,
    specialClass: 'warrior',
    text: t('headSpecialFallWarriorText'),
    notes: t('headSpecialFallWarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
    canBuy: () => {
      return true;
    },
  },
  fallMage: {
    event: EVENTS.fall,
    specialClass: 'wizard',
    text: t('headSpecialFallMageText'),
    notes: t('headSpecialFallMageNotes', { per: 7 }),
    value: 60,
    per: 7,
    canBuy: () => {
      return true;
    },
  },
  fallHealer: {
    event: EVENTS.fall,
    specialClass: 'healer',
    text: t('headSpecialFallHealerText'),
    notes: t('headSpecialFallHealerNotes', { int: 7 }),
    value: 60,
    int: 7,
    canBuy: () => {
      return true;
    },
  },
  winter2015Rogue: {
    event: EVENTS.winter2015,
    specialClass: 'rogue',
    text: t('headSpecialWinter2015RogueText'),
    notes: t('headSpecialWinter2015RogueNotes', { per: 9 }),
    value: 60,
    per: 9,
    canBuy: () => {
      return true;
    },
  },
  winter2015Warrior: {
    event: EVENTS.winter2015,
    specialClass: 'warrior',
    text: t('headSpecialWinter2015WarriorText'),
    notes: t('headSpecialWinter2015WarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
    canBuy: () => {
      return true;
    },
  },
  winter2015Mage: {
    event: EVENTS.winter2015,
    specialClass: 'wizard',
    text: t('headSpecialWinter2015MageText'),
    notes: t('headSpecialWinter2015MageNotes', { per: 7 }),
    value: 60,
    per: 7,
    canBuy: () => {
      return true;
    },
  },
  winter2015Healer: {
    event: EVENTS.winter2015,
    specialClass: 'healer',
    text: t('headSpecialWinter2015HealerText'),
    notes: t('headSpecialWinter2015HealerNotes', { int: 7 }),
    value: 60,
    int: 7,
    canBuy: () => {
      return true;
    },
  },
  nye2014: {
    text: t('headSpecialNye2014Text'),
    notes: t('headSpecialNye2014Notes'),
    value: 0,
    canOwn: ownsItem('head_special_nye2014'),
  },
  spring2015Rogue: {
    event: EVENTS.spring2015,
    specialClass: 'rogue',
    text: t('headSpecialSpring2015RogueText'),
    notes: t('headSpecialSpring2015RogueNotes', { per: 9 }),
    value: 60,
    per: 9,
  },
  spring2015Warrior: {
    event: EVENTS.spring2015,
    specialClass: 'warrior',
    text: t('headSpecialSpring2015WarriorText'),
    notes: t('headSpecialSpring2015WarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
  },
  spring2015Mage: {
    event: EVENTS.spring2015,
    specialClass: 'wizard',
    text: t('headSpecialSpring2015MageText'),
    notes: t('headSpecialSpring2015MageNotes', { per: 7 }),
    value: 60,
    per: 7,
  },
  spring2015Healer: {
    event: EVENTS.spring2015,
    specialClass: 'healer',
    text: t('headSpecialSpring2015HealerText'),
    notes: t('headSpecialSpring2015HealerNotes', { int: 7 }),
    value: 60,
    int: 7,
  },
  summer2015Rogue: {
    event: EVENTS.summer2015,
    specialClass: 'rogue',
    text: t('headSpecialSummer2015RogueText'),
    notes: t('headSpecialSummer2015RogueNotes', { per: 9 }),
    value: 60,
    per: 9,
  },
  summer2015Warrior: {
    event: EVENTS.summer2015,
    specialClass: 'warrior',
    text: t('headSpecialSummer2015WarriorText'),
    notes: t('headSpecialSummer2015WarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
  },
  summer2015Mage: {
    event: EVENTS.summer2015,
    specialClass: 'wizard',
    text: t('headSpecialSummer2015MageText'),
    notes: t('headSpecialSummer2015MageNotes', { per: 7 }),
    value: 60,
    per: 7,
  },
  summer2015Healer: {
    event: EVENTS.summer2015,
    specialClass: 'healer',
    text: t('headSpecialSummer2015HealerText'),
    notes: t('headSpecialSummer2015HealerNotes', { int: 7 }),
    value: 60,
    int: 7,
  },
  fall2015Rogue: {
    event: EVENTS.fall2015,
    specialClass: 'rogue',
    text: t('headSpecialFall2015RogueText'),
    notes: t('headSpecialFall2015RogueNotes', { per: 9 }),
    value: 60,
    per: 9,
  },
  fall2015Warrior: {
    event: EVENTS.fall2015,
    specialClass: 'warrior',
    text: t('headSpecialFall2015WarriorText'),
    notes: t('headSpecialFall2015WarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
  },
  fall2015Mage: {
    event: EVENTS.fall2015,
    specialClass: 'wizard',
    text: t('headSpecialFall2015MageText'),
    notes: t('headSpecialFall2015MageNotes', { per: 7 }),
    value: 60,
    per: 7,
  },
  fall2015Healer: {
    event: EVENTS.fall2015,
    specialClass: 'healer',
    text: t('headSpecialFall2015HealerText'),
    notes: t('headSpecialFall2015HealerNotes', { int: 7 }),
    value: 60,
    int: 7,
  },
  gaymerx: {
    event: EVENTS.gaymerx,
    text: t('headSpecialGaymerxText'),
    notes: t('headSpecialGaymerxNotes'),
    value: 0,
  },
  winter2016Rogue: {
    event: EVENTS.winter2016,
    specialClass: 'rogue',
    text: t('headSpecialWinter2016RogueText'),
    notes: t('headSpecialWinter2016RogueNotes', { per: 9 }),
    value: 60,
    per: 9,
  },
  winter2016Warrior: {
    event: EVENTS.winter2016,
    specialClass: 'warrior',
    text: t('headSpecialWinter2016WarriorText'),
    notes: t('headSpecialWinter2016WarriorNotes', { str: 9 }),
    value: 60,
    str: 9,
  },
  winter2016Mage: {
    event: EVENTS.winter2016,
    specialClass: 'wizard',
    text: t('headSpecialWinter2016MageText'),
    notes: t('headSpecialWinter2016MageNotes', { per: 7 }),
    value: 60,
    per: 7,
  },
  winter2016Healer: {
    event: EVENTS.winter2016,
    specialClass: 'healer',
    text: t('headSpecialWinter2016HealerText'),
    notes: t('headSpecialWinter2016HealerNotes', { int: 7 }),
    value: 60,
    int: 7,
  },
  nye2015: {
    text: t('headSpecialNye2015Text'),
    notes: t('headSpecialNye2015Notes'),
    value: 0,
    canOwn: ownsItem('head_special_nye2015'),
  },
};

let headAccessory = {
  springRogue: {
    event: EVENTS.spring,
    specialClass: 'rogue',
    text: t('headAccessorySpecialSpringRogueText'),
    notes: t('headAccessorySpecialSpringRogueNotes'),
    value: 20,
  },
  springWarrior: {
    event: EVENTS.spring,
    specialClass: 'warrior',
    text: t('headAccessorySpecialSpringWarriorText'),
    notes: t('headAccessorySpecialSpringWarriorNotes'),
    value: 20,
  },
  springMage: {
    event: EVENTS.spring,
    specialClass: 'wizard',
    text: t('headAccessorySpecialSpringMageText'),
    notes: t('headAccessorySpecialSpringMageNotes'),
    value: 20,
  },
  springHealer: {
    event: EVENTS.spring,
    specialClass: 'healer',
    text: t('headAccessorySpecialSpringHealerText'),
    notes: t('headAccessorySpecialSpringHealerNotes'),
    value: 20,
  },
  spring2015Rogue: {
    event: EVENTS.spring2015,
    specialClass: 'rogue',
    text: t('headAccessorySpecialSpring2015RogueText'),
    notes: t('headAccessorySpecialSpring2015RogueNotes'),
    value: 20,
  },
  spring2015Warrior: {
    event: EVENTS.spring2015,
    specialClass: 'warrior',
    text: t('headAccessorySpecialSpring2015WarriorText'),
    notes: t('headAccessorySpecialSpring2015WarriorNotes'),
    value: 20,
  },
  spring2015Mage: {
    event: EVENTS.spring2015,
    specialClass: 'wizard',
    text: t('headAccessorySpecialSpring2015MageText'),
    notes: t('headAccessorySpecialSpring2015MageNotes'),
    value: 20,
  },
  spring2015Healer: {
    event: EVENTS.spring2015,
    specialClass: 'healer',
    text: t('headAccessorySpecialSpring2015HealerText'),
    notes: t('headAccessorySpecialSpring2015HealerNotes'),
    value: 20,
  },
  bearEars: {
    gearSet: 'animal',
    text: t('headAccessoryBearEarsText'),
    notes: t('headAccessoryBearEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_bearEars'),
    canBuy: () => {
      return true;
    },
  },
  cactusEars: {
    gearSet: 'animal',
    text: t('headAccessoryCactusEarsText'),
    notes: t('headAccessoryCactusEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_cactusEars'),
    canBuy: () => {
      return true;
    },
  },
  foxEars: {
    gearSet: 'animal',
    text: t('headAccessoryFoxEarsText'),
    notes: t('headAccessoryFoxEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_foxEars'),
    canBuy: () => {
      return true;
    },
  },
  lionEars: {
    gearSet: 'animal',
    text: t('headAccessoryLionEarsText'),
    notes: t('headAccessoryLionEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_lionEars'),
    canBuy: () => {
      return true;
    },
  },
  pandaEars: {
    gearSet: 'animal',
    text: t('headAccessoryPandaEarsText'),
    notes: t('headAccessoryPandaEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_pandaEars'),
    canBuy: () => {
      return true;
    },
  },
  pigEars: {
    gearSet: 'animal',
    text: t('headAccessoryPigEarsText'),
    notes: t('headAccessoryPigEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_pigEars'),
    canBuy: () => {
      return true;
    },
  },
  tigerEars: {
    gearSet: 'animal',
    text: t('headAccessoryTigerEarsText'),
    notes: t('headAccessoryTigerEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_tigerEars'),
    canBuy: () => {
      return true;
    },
  },
  wolfEars: {
    gearSet: 'animal',
    text: t('headAccessoryWolfEarsText'),
    notes: t('headAccessoryWolfEarsNotes'),
    value: 20,
    canOwn: ownsItem('headAccessory_special_wolfEars'),
    canBuy: () => {
      return true;
    },
  },
};

let shield = {
  0: backerGear.shieldSpecial0,
  1: contributorGear.shieldSpecial1,
  goldenknight: {
    text: t('shieldSpecialGoldenknightText'),
    notes: t('shieldSpecialGoldenknightNotes', { attrs: 25 }),
    con: 25,
    per: 25,
    value: 200,
    canOwn: ownsItem('shield_special_goldenknight'),
  },
  moonpearlShield: {
    text: t('shieldSpecialMoonpearlShieldText'),
    notes: t('shieldSpecialMoonpearlShieldNotes', { con: 15 }),
    con: 15,
    value: 130,
    canOwn: ownsItem('shield_special_moonpearlShield'),
  },
  yeti: {
    event: EVENTS.winter,
    specialClass: 'warrior',
    text: t('shieldSpecialYetiText'),
    notes: t('shieldSpecialYetiNotes', { con: 7 }),
    con: 7,
    value: 70,
    canBuy: () => {
      return true;
    },
  },
  ski: {
    event: EVENTS.winter,
    specialClass: 'rogue',
    text: t('weaponSpecialSkiText'),
    notes: t('weaponSpecialSkiNotes', { str: 8 }),
    str: 8,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  snowflake: {
    event: EVENTS.winter,
    specialClass: 'healer',
    text: t('shieldSpecialSnowflakeText'),
    notes: t('shieldSpecialSnowflakeNotes', { con: 9 }),
    con: 9,
    value: 70,
    canBuy: () => {
      return true;
    },
  },
  springRogue: {
    event: EVENTS.spring,
    specialClass: 'rogue',
    text: t('shieldSpecialSpringRogueText'),
    notes: t('shieldSpecialSpringRogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  springWarrior: {
    event: EVENTS.spring,
    specialClass: 'warrior',
    text: t('shieldSpecialSpringWarriorText'),
    notes: t('shieldSpecialSpringWarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
  },
  springHealer: {
    event: EVENTS.spring,
    specialClass: 'healer',
    text: t('shieldSpecialSpringHealerText'),
    notes: t('shieldSpecialSpringHealerNotes', { con: 9 }),
    value: 70,
    con: 9,
  },
  summerRogue: {
    event: EVENTS.summer,
    specialClass: 'rogue',
    text: t('shieldSpecialSummerRogueText'),
    notes: t('shieldSpecialSummerRogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  summerWarrior: {
    event: EVENTS.summer,
    specialClass: 'warrior',
    text: t('shieldSpecialSummerWarriorText'),
    notes: t('shieldSpecialSummerWarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
  },
  summerHealer: {
    event: EVENTS.summer,
    specialClass: 'healer',
    text: t('shieldSpecialSummerHealerText'),
    notes: t('shieldSpecialSummerHealerNotes', { con: 9 }),
    value: 70,
    con: 9,
  },
  fallRogue: {
    event: EVENTS.fall,
    specialClass: 'rogue',
    text: t('shieldSpecialFallRogueText'),
    notes: t('shieldSpecialFallRogueNotes', { str: 8 }),
    value: 80,
    str: 8,
    canBuy: () => {
      return true;
    },
  },
  fallWarrior: {
    event: EVENTS.fall,
    specialClass: 'warrior',
    text: t('shieldSpecialFallWarriorText'),
    notes: t('shieldSpecialFallWarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
    canBuy: () => {
      return true;
    },
  },
  fallHealer: {
    event: EVENTS.fall,
    specialClass: 'healer',
    text: t('shieldSpecialFallHealerText'),
    notes: t('shieldSpecialFallHealerNotes', { con: 9 }),
    value: 70,
    con: 9,
    canBuy: () => {
      return true;
    },
  },
  winter2015Rogue: {
    event: EVENTS.winter2015,
    specialClass: 'rogue',
    text: t('shieldSpecialWinter2015RogueText'),
    notes: t('shieldSpecialWinter2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
    canBuy: () => {
      return true;
    },
  },
  winter2015Warrior: {
    event: EVENTS.winter2015,
    specialClass: 'warrior',
    text: t('shieldSpecialWinter2015WarriorText'),
    notes: t('shieldSpecialWinter2015WarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
    canBuy: () => {
      return true;
    },
  },
  winter2015Healer: {
    event: EVENTS.winter2015,
    specialClass: 'healer',
    text: t('shieldSpecialWinter2015HealerText'),
    notes: t('shieldSpecialWinter2015HealerNotes', { con: 9 }),
    value: 70,
    con: 9,
    canBuy: () => {
      return true;
    },
  },
  spring2015Rogue: {
    event: EVENTS.spring2015,
    specialClass: 'rogue',
    text: t('shieldSpecialSpring2015RogueText'),
    notes: t('shieldSpecialSpring2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  spring2015Warrior: {
    event: EVENTS.spring2015,
    specialClass: 'warrior',
    text: t('shieldSpecialSpring2015WarriorText'),
    notes: t('shieldSpecialSpring2015WarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
  },
  spring2015Healer: {
    event: EVENTS.spring2015,
    specialClass: 'healer',
    text: t('shieldSpecialSpring2015HealerText'),
    notes: t('shieldSpecialSpring2015HealerNotes', { con: 9 }),
    value: 70,
    con: 9,
  },
  summer2015Rogue: {
    event: EVENTS.summer2015,
    specialClass: 'rogue',
    text: t('shieldSpecialSummer2015RogueText'),
    notes: t('shieldSpecialSummer2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  summer2015Warrior: {
    event: EVENTS.summer2015,
    specialClass: 'warrior',
    text: t('shieldSpecialSummer2015WarriorText'),
    notes: t('shieldSpecialSummer2015WarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
  },
  summer2015Healer: {
    event: EVENTS.summer2015,
    specialClass: 'healer',
    text: t('shieldSpecialSummer2015HealerText'),
    notes: t('shieldSpecialSummer2015HealerNotes', { con: 9 }),
    value: 70,
    con: 9,
  },
  fall2015Rogue: {
    event: EVENTS.fall2015,
    specialClass: 'rogue',
    text: t('shieldSpecialFall2015RogueText'),
    notes: t('shieldSpecialFall2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  fall2015Warrior: {
    event: EVENTS.fall2015,
    specialClass: 'warrior',
    text: t('shieldSpecialFall2015WarriorText'),
    notes: t('shieldSpecialFall2015WarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
  },
  fall2015Healer: {
    event: EVENTS.fall2015,
    specialClass: 'healer',
    text: t('shieldSpecialFall2015HealerText'),
    notes: t('shieldSpecialFall2015HealerNotes', { con: 9 }),
    value: 70,
    con: 9,
  },
  winter2016Rogue: {
    event: EVENTS.winter2016,
    specialClass: 'rogue',
    text: t('shieldSpecialWinter2016RogueText'),
    notes: t('shieldSpecialWinter2016RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  winter2016Warrior: {
    event: EVENTS.winter2016,
    specialClass: 'warrior',
    text: t('shieldSpecialWinter2016WarriorText'),
    notes: t('shieldSpecialWinter2016WarriorNotes', { con: 7 }),
    value: 70,
    con: 7,
  },
  winter2016Healer: {
    event: EVENTS.winter2016,
    specialClass: 'healer',
    text: t('shieldSpecialWinter2016HealerText'),
    notes: t('shieldSpecialWinter2016HealerNotes', { con: 9 }),
    value: 70,
    con: 9,
  },
};

let weapon = {
  0: backerGear.weaponSpecial0,
  1: contributorGear.weaponSpecial1,
  2: backerGear.weaponSpecial2,
  3: backerGear.weaponSpecial3,
  critical: contributorGear.weaponSpecialCritical,
  tridentOfCrashingTides: {
    text: t('weaponSpecialTridentOfCrashingTidesText'),
    notes: t('weaponSpecialTridentOfCrashingTidesNotes', { int: 15 }),
    int: 15,
    value: 130,
    canOwn: ownsItem('weapon_special_tridentOfCrashingTides'),
  },
  yeti: {
    event: EVENTS.winter,
    specialClass: 'warrior',
    text: t('weaponSpecialYetiText'),
    notes: t('weaponSpecialYetiNotes', { str: 15 }),
    str: 15,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  ski: {
    event: EVENTS.winter,
    specialClass: 'rogue',
    text: t('weaponSpecialSkiText'),
    notes: t('weaponSpecialSkiNotes', { str: 8 }),
    str: 8,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  candycane: {
    event: EVENTS.winter,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialCandycaneText'),
    notes: t('weaponSpecialCandycaneNotes', { int: 15, per: 7 }),
    int: 15,
    per: 7,
    value: 160,
    canBuy: () => {
      return true;
    },
  },
  snowflake: {
    event: EVENTS.winter,
    specialClass: 'healer',
    text: t('weaponSpecialSnowflakeText'),
    notes: t('weaponSpecialSnowflakeNotes', { int: 9 }),
    int: 9,
    value: 90,
    canBuy: () => {
      return true;
    },
  },
  springRogue: {
    event: EVENTS.spring,
    specialClass: 'rogue',
    text: t('weaponSpecialSpringRogueText'),
    notes: t('weaponSpecialSpringRogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  springWarrior: {
    event: EVENTS.spring,
    specialClass: 'warrior',
    text: t('weaponSpecialSpringWarriorText'),
    notes: t('weaponSpecialSpringWarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
  },
  springMage: {
    event: EVENTS.spring,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialSpringMageText'),
    notes: t('weaponSpecialSpringMageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
  },
  springHealer: {
    event: EVENTS.spring,
    specialClass: 'healer',
    text: t('weaponSpecialSpringHealerText'),
    notes: t('weaponSpecialSpringHealerNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  summerRogue: {
    event: EVENTS.summer,
    specialClass: 'rogue',
    text: t('weaponSpecialSummerRogueText'),
    notes: t('weaponSpecialSummerRogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  summerWarrior: {
    event: EVENTS.summer,
    specialClass: 'warrior',
    text: t('weaponSpecialSummerWarriorText'),
    notes: t('weaponSpecialSummerWarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
  },
  summerMage: {
    event: EVENTS.summer,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialSummerMageText'),
    notes: t('weaponSpecialSummerMageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
  },
  summerHealer: {
    event: EVENTS.summer,
    specialClass: 'healer',
    text: t('weaponSpecialSummerHealerText'),
    notes: t('weaponSpecialSummerHealerNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  fallRogue: {
    event: EVENTS.fall,
    specialClass: 'rogue',
    text: t('weaponSpecialFallRogueText'),
    notes: t('weaponSpecialFallRogueNotes', { str: 8 }),
    value: 80,
    str: 8,
    canBuy: () => {
      return true;
    },
  },
  fallWarrior: {
    event: EVENTS.fall,
    specialClass: 'warrior',
    text: t('weaponSpecialFallWarriorText'),
    notes: t('weaponSpecialFallWarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
    canBuy: () => {
      return true;
    },
  },
  fallMage: {
    event: EVENTS.fall,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialFallMageText'),
    notes: t('weaponSpecialFallMageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
    canBuy: () => {
      return true;
    },
  },
  fallHealer: {
    event: EVENTS.fall,
    specialClass: 'healer',
    text: t('weaponSpecialFallHealerText'),
    notes: t('weaponSpecialFallHealerNotes', { int: 9 }),
    value: 90,
    int: 9,
    canBuy: () => {
      return true;
    },
  },
  winter2015Rogue: {
    event: EVENTS.winter2015,
    specialClass: 'rogue',
    text: t('weaponSpecialWinter2015RogueText'),
    notes: t('weaponSpecialWinter2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
    canBuy: () => {
      return true;
    },
  },
  winter2015Warrior: {
    event: EVENTS.winter2015,
    specialClass: 'warrior',
    text: t('weaponSpecialWinter2015WarriorText'),
    notes: t('weaponSpecialWinter2015WarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
    canBuy: () => {
      return true;
    },
  },
  winter2015Mage: {
    event: EVENTS.winter2015,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialWinter2015MageText'),
    notes: t('weaponSpecialWinter2015MageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
    canBuy: () => {
      return true;
    },
  },
  winter2015Healer: {
    event: EVENTS.winter2015,
    specialClass: 'healer',
    text: t('weaponSpecialWinter2015HealerText'),
    notes: t('weaponSpecialWinter2015HealerNotes', { int: 9 }),
    value: 90,
    int: 9,
    canBuy: () => {
      return true;
    },
  },
  spring2015Rogue: {
    event: EVENTS.spring2015,
    specialClass: 'rogue',
    text: t('weaponSpecialSpring2015RogueText'),
    notes: t('weaponSpecialSpring2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  spring2015Warrior: {
    event: EVENTS.spring2015,
    specialClass: 'warrior',
    text: t('weaponSpecialSpring2015WarriorText'),
    notes: t('weaponSpecialSpring2015WarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
  },
  spring2015Mage: {
    event: EVENTS.spring2015,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialSpring2015MageText'),
    notes: t('weaponSpecialSpring2015MageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
  },
  spring2015Healer: {
    event: EVENTS.spring2015,
    specialClass: 'healer',
    text: t('weaponSpecialSpring2015HealerText'),
    notes: t('weaponSpecialSpring2015HealerNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  summer2015Rogue: {
    event: EVENTS.summer2015,
    specialClass: 'rogue',
    text: t('weaponSpecialSummer2015RogueText'),
    notes: t('weaponSpecialSummer2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  summer2015Warrior: {
    event: EVENTS.summer2015,
    specialClass: 'warrior',
    text: t('weaponSpecialSummer2015WarriorText'),
    notes: t('weaponSpecialSummer2015WarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
  },
  summer2015Mage: {
    event: EVENTS.summer2015,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialSummer2015MageText'),
    notes: t('weaponSpecialSummer2015MageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
  },
  summer2015Healer: {
    event: EVENTS.summer2015,
    specialClass: 'healer',
    text: t('weaponSpecialSummer2015HealerText'),
    notes: t('weaponSpecialSummer2015HealerNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  fall2015Rogue: {
    event: EVENTS.fall2015,
    specialClass: 'rogue',
    text: t('weaponSpecialFall2015RogueText'),
    notes: t('weaponSpecialFall2015RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  fall2015Warrior: {
    event: EVENTS.fall2015,
    specialClass: 'warrior',
    text: t('weaponSpecialFall2015WarriorText'),
    notes: t('weaponSpecialFall2015WarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
  },
  fall2015Mage: {
    event: EVENTS.fall2015,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialFall2015MageText'),
    notes: t('weaponSpecialFall2015MageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
  },
  fall2015Healer: {
    event: EVENTS.fall2015,
    specialClass: 'healer',
    text: t('weaponSpecialFall2015HealerText'),
    notes: t('weaponSpecialFall2015HealerNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
  winter2016Rogue: {
    event: EVENTS.winter2016,
    specialClass: 'rogue',
    text: t('weaponSpecialWinter2016RogueText'),
    notes: t('weaponSpecialWinter2016RogueNotes', { str: 8 }),
    value: 80,
    str: 8,
  },
  winter2016Warrior: {
    event: EVENTS.winter2016,
    specialClass: 'warrior',
    text: t('weaponSpecialWinter2016WarriorText'),
    notes: t('weaponSpecialWinter2016WarriorNotes', { str: 15 }),
    value: 90,
    str: 15,
  },
  winter2016Mage: {
    event: EVENTS.winter2016,
    specialClass: 'wizard',
    twoHanded: true,
    text: t('weaponSpecialWinter2016MageText'),
    notes: t('weaponSpecialWinter2016MageNotes', { int: 15, per: 7 }),
    value: 160,
    int: 15,
    per: 7,
  },
  winter2016Healer: {
    event: EVENTS.winter2016,
    specialClass: 'healer',
    text: t('weaponSpecialWinter2016HealerText'),
    notes: t('weaponSpecialWinter2016HealerNotes', { int: 9 }),
    value: 90,
    int: 9,
  },
};

let specialSet = {
  armor,
  back,
  body,
  eyewear,
  head,
  headAccessory,
  shield,
  weapon,
};

export default specialSet;
