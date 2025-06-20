import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '', //Al no poner nada se usa la raiz
        //component: HomePageComponent, //El componente se puede cargar directamente aqui o en el modulo home
        loadChildren: () => import('./modules/home/home-module').then(m => m.HomeModule) //En el caso de los modulos, se cargan lazy
    }
];
