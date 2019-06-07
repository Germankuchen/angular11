import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicuta.interface';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  peliculas: Pelicula[] = [];
  textoABuscar = '';
  constructor(private _ps: PeliculasService) { }

  ngOnInit() {
  }

  buscar() {
    if (this.textoABuscar == null) {
      this.peliculas = [];
      return;
    }
    this._ps.getByName(this.textoABuscar).subscribe(data => {
      const PELICULAS = data._body.results;
      this.peliculas = [];
      for (let peliculaNum = 0; peliculaNum < PELICULAS.length; peliculaNum++) {
          this.peliculas.push(new Pelicula(PELICULAS[peliculaNum].title, PELICULAS[peliculaNum].poster_path,
            PELICULAS[peliculaNum].original_language, PELICULAS[peliculaNum].adult,
            PELICULAS[peliculaNum].overview, PELICULAS[peliculaNum].release_date));
      }
    });
  }

}
