import { Routes } from '@angular/router';
import { GestionCommandesComponent } from './Commandes/gestion-commandes/gestion-commandes.component';
import { FormulaireComponent } from './Commandes/formulaire/formulaire.component';

export const routes: Routes = [
    {
        path:'commandes',
        component: GestionCommandesComponent,
        pathMatch: 'full'

    },
    {
        path:'formulaire',
        component: FormulaireComponent,
        pathMatch: 'full'

    },
];
