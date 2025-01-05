import { Routes } from '@angular/router';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';

export const routes: Routes = [
    {
        path:'commandes',
        component: GestionCommandesComponent,
        pathMatch: 'full'

    },
];
