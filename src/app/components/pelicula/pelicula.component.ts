import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicuta.interface';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula;
  peliculasPopulares: Pelicula[];
  peliculasUltimas: Pelicula[];
  peliculasBuscadas: Pelicula[];
  id: number;
  ultimo: string;

  constructor(private activateRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params  => {
      this.id = params['id'];

      this.ultimo = localStorage.getItem('ultimo');

      let storage = localStorage.getItem('populares');
      if (storage != null) {
        this.peliculasPopulares = JSON.parse(storage);
      }
      storage = localStorage.getItem('ultimas');
      if (storage != null) {
        this.peliculasUltimas = JSON.parse(storage);
      }
      storage = localStorage.getItem('buscadas');
      if (storage != null) {
        this.peliculasBuscadas = JSON.parse(storage);
      }
      for (let peliculaNum = 0; peliculaNum < this.peliculasPopulares.length; peliculaNum++) {
        if (this.peliculasPopulares[peliculaNum].id == this.id) {
           this.pelicula = this.peliculasPopulares[peliculaNum];
        }
      }
      for (let peliculaNum = 0; peliculaNum < this.peliculasUltimas.length; peliculaNum++) {
        if (this.peliculasUltimas[peliculaNum].id == this.id) {
           this.pelicula = this.peliculasUltimas[peliculaNum];
        }
      }
      for (let peliculaNum = 0; peliculaNum < this.peliculasBuscadas.length; peliculaNum++) {
        if (this.peliculasBuscadas[peliculaNum].id == this.id) {
           this.pelicula = this.peliculasBuscadas[peliculaNum];
        }
      }
    });
  }

  volver() {
    if (this.ultimo == 'home') {
      this.route.navigate(['/home']);
    } else {
      this.route.navigate(['/buscar']);
    }
  }

}
