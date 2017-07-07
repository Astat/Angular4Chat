import {Image} from './image';

export class Show {
  score: number;
  show:  {
    id: number;
    externals: External;
    genres: Kind[];
    image: Image;
    language: string;
    name: string;
    network: any;
    officialSite: string;
    premiered: string;
    rating: any;
    schedule: any;
    summary: string;
    url: string;
    links: any;
  }
}


export class External {
  imdb: string;
  thetvdb: number;
  tvrage: number;
}

export enum Kind {
  DRAMA,
  ROMANCE
}


export class Country {
code: string;
name: string;
timezone: string
}
