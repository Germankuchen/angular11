import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  API_KEY = 'ababd6093bf2de9797fd78b4e5911877';
  URL = 'https://api.themoviedb.org/3';

  constructor(private jp: Jsonp, private http: Http) {
  }

  getPopulares(): Observable<any> {
    const urlALlamar = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=es&api_key=' +
       this.API_KEY + '&callback=JSONP_CALLBACK';
    return this.jp.get(urlALlamar);
  }

  getUltimas(): Observable<any> {
    const FECHA_FIN = moment().format('YYYY-MM-DD');
    const FECHA_SEMANA_ATRAS = moment().add(-7, 'day');
    const FECHA_INICIO = FECHA_SEMANA_ATRAS.format('YYYY-MM-DD');
    const urlALlamar = this.URL + '/discover/movie?language=es&primary_release_date.gte=' +
      FECHA_INICIO + '&primary_release_date.lte=' + FECHA_FIN +
      '&api_key=' + this.API_KEY + '&callback=JSONP_CALLBACK';
    return this.jp.get(urlALlamar);
  }

  getByName(nombre: string): Observable<any> {
    const urlALlamar = 'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&language=es&api_key=' +
    this.API_KEY + '&callback=JSONP_CALLBACK&query=' + nombre;
    console.log('La URL es: ' + urlALlamar);
    return this.jp.get(urlALlamar);
  }

}
