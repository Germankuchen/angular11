import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'buscar', component: BusquedaComponent },
   { path: '**', component: HomeComponent }
];
export const app_routing = RouterModule.forRoot(routes);
