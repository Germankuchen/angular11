import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Rutas
import { app_routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusquedaComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    app_routing
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
