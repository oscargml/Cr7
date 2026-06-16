import { CareerStats, ClubSpint, SeasonTrophies } from './types.ts';

export const careerOverview: CareerStats = {
  goals: 900,
  appearances: 1235,
  assists: 254,
  hatTricks: 66,
};

export const clubHistory: ClubSpint[] = [
  {
    id: 'sporting',
    club: 'Sporting CP',
    league: 'Primeira Liga',
    startYear: 2002,
    endYear: 2003,
    apps: 31,
    goals: 5,
    assists: 6,
    colorCode: 'bg-green-700',
    logoText: 'SCP',
  },
  {
    id: 'manu1',
    club: 'Manchester United',
    league: 'Premier League',
    startYear: 2003,
    endYear: 2009,
    apps: 292,
    goals: 118,
    assists: 59,
    colorCode: 'bg-red-600',
    logoText: 'MUN',
  },
  {
    id: 'realmadrid',
    club: 'Real Madrid',
    league: 'La Liga',
    startYear: 2009,
    endYear: 2018,
    apps: 438,
    goals: 450,
    assists: 131,
    colorCode: 'bg-zinc-100',
    logoText: 'RMA',
  },
  {
    id: 'juventus',
    club: 'Juventus',
    league: 'Serie A',
    startYear: 2018,
    endYear: 2021,
    apps: 134,
    goals: 101,
    assists: 22,
    colorCode: 'bg-neutral-900',
    logoText: 'JUV',
  },
  {
    id: 'manu2',
    club: 'Manchester United',
    league: 'Premier League',
    startYear: 2021,
    endYear: 2022,
    apps: 54,
    goals: 27,
    assists: 5,
    colorCode: 'bg-red-600',
    logoText: 'MUN',
  },
  {
    id: 'alnassr',
    club: 'Al Nassr',
    league: 'Saudi Pro League',
    startYear: 2023,
    endYear: 'Present',
    apps: 67,
    goals: 61,
    assists: 16,
    colorCode: 'bg-yellow-500',
    logoText: 'NAS',
  },
];

export const majorSeasonsTrophies: SeasonTrophies[] = [
  {
    season: '2007-08',
    club: 'Manchester United',
    trophies: [
      { id: 'ucl-08', name: 'Champions League', competition: 'UEFA', season: '07/08', imageIcon: 'Trophy' },
      { id: 'pl-08', name: 'Premier League', competition: 'England', season: '07/08', imageIcon: 'Medal' },
      { id: 'bdo-08', name: 'Ballon d\'Or', competition: 'Individual', season: '2008', imageIcon: 'Star' }
    ]
  },
  {
    season: '2013-14',
    club: 'Real Madrid',
    trophies: [
      { id: 'ucl-14', name: 'Champions League', competition: 'UEFA', season: '13/14', imageIcon: 'Trophy' },
      { id: 'cdr-14', name: 'Copa del Rey', competition: 'Spain', season: '13/14', imageIcon: 'Medal' },
      { id: 'bdo-13', name: 'Ballon d\'Or', competition: 'Individual', season: '2013', imageIcon: 'Star' },
      { id: 'bdo-14', name: 'Ballon d\'Or', competition: 'Individual', season: '2014', imageIcon: 'Star' }
    ]
  },
  {
    season: '2015-16',
    club: 'Real Madrid / Portugal',
    trophies: [
      { id: 'ucl-16', name: 'Champions League', competition: 'UEFA', season: '15/16', imageIcon: 'Trophy' },
      { id: 'euro-16', name: 'UEFA Euro', competition: 'International', season: '2016', imageIcon: 'Globe' },
      { id: 'bdo-16', name: 'Ballon d\'Or', competition: 'Individual', season: '2016', imageIcon: 'Star' }
    ]
  },
  {
    season: '2016-17',
    club: 'Real Madrid',
    trophies: [
        { id: 'ucl-17', name: 'Champions League', competition: 'UEFA', season: '16/17', imageIcon: 'Trophy' },
        { id: 'll-17', name: 'La Liga', competition: 'Spain', season: '16/17', imageIcon: 'Medal' },
        { id: 'bdo-17', name: 'Ballon d\'Or', competition: 'Individual', season: '2017', imageIcon: 'Star' }
    ]
  },
  {
    season: '2018-19',
    club: 'Juventus / Portugal',
    trophies: [
      { id: 'sa-19', name: 'Serie A', competition: 'Italy', season: '18/19', imageIcon: 'Medal' },
      { id: 'unl-19', name: 'UEFA Nations League', competition: 'International', season: '18/19', imageIcon: 'Globe' }
    ]
  }
];
