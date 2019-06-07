export class Pelicula {
    title: string;
    poster_path: string;
    original_language: string;
    adult: boolean;
    overview: string;
    release_date: string;

    constructor(title: string, poster_path: string, original_language: string, adult: boolean, overview: string, release_date: string) {
        this.title = title;
        this.poster_path = poster_path;
        this.original_language = original_language;
        this.adult = adult;
        this.overview = overview;
        this.release_date = release_date;
    }

}