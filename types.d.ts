export interface Genre {
  id: number;
  name: string;
}
export interface Movie {
  title: string;
  back_drop_path: string;
  media_type?: string;
  release_date: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_country: string;
  original_language: string;
  popularity: number;
  overview: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behid the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
