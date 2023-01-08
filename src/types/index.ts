export interface IMovie {
    id: number;
    poster_path: string;
    title: string;
}

export interface IMovieList {
    page: number;
    results: IMovieDetails[];
    total_pages: number;
    total_results: number;
}

export interface ICrewMember {
    id: number;
    job: string;
    name: string;
}

export interface ICredits {
    id: number;
    crew: ICrewMember[];
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IMovieDetails extends IMovie {
    imdb_id: string;
    genres: IGenre[];
    original_title: string;
    overview: string;
    release_date: string;
    runtime: number;
    vote_average: number;
}
