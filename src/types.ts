export interface CareerStats {
  goals: number;
  appearances: number;
  assists: number;
  hatTricks: number;
}

export interface ClubSpint {
  id: string;
  club: string;
  league: string;
  startYear: number;
  endYear: number | 'Present';
  apps: number;
  goals: number;
  assists: number;
  colorCode: string;
  logoText: string;
}

export interface Trophy {
  id: string;
  name: string;
  competition: string;
  season: string;
  imageIcon: string; // Will map to a lucide icon or similar for generic display
}

export interface SeasonTrophies {
  season: string;
  club: string;
  trophies: Trophy[];
}
