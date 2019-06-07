import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicuta.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  peliculasUltimas: Pelicula[] = [];
  peliculasSolicitadas: Pelicula[] = [];

  constructor(private _ps: PeliculasService) { }

  ngOnInit() {
    this._ps.getPopulares().subscribe(data => {
      const PELICULAS = data._body.results;
      for (let peliculaNum = 0; peliculaNum < PELICULAS.length; peliculaNum++) {
          this.peliculasSolicitadas.push(new Pelicula(PELICULAS[peliculaNum].title, PELICULAS[peliculaNum].poster_path,
            PELICULAS[peliculaNum].original_language, PELICULAS[peliculaNum].adult,
            PELICULAS[peliculaNum].overview, PELICULAS[peliculaNum].release_date));
      }
    });
    this._ps.getUltimas().subscribe(data => {
      const PELICULAS = data._body.results;
      for (let peliculaNum = 0; peliculaNum < PELICULAS.length; peliculaNum++) {
          this.peliculasUltimas.push(new Pelicula(PELICULAS[peliculaNum].title, PELICULAS[peliculaNum].poster_path,
            PELICULAS[peliculaNum].original_language, PELICULAS[peliculaNum].adult,
            PELICULAS[peliculaNum].overview, PELICULAS[peliculaNum].release_date));
      }
    });
  }

}
