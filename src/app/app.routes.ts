import { Routes } from '@angular/router';
import { GestionCommandesComponent } from './Commandes/gestion-commandes/gestion-commandes.component';
import { FormulaireComponent } from './Commandes/formulaire/formulaire.component';
import { GestionProduitsComponent } from './Produits/gestion-produits/gestion-produits.component';
import { FormulaireProduitComponent } from './Produits/formulaire-produit/formulaire-produit.component';
import { GestionClientsComponent } from './Clients/gestion-clients/gestion-clients.component';
import { FormulaireClientComponent } from './Clients/formulaire-client/formulaire-client.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path:'commandes',
        component: GestionCommandesComponent,
        pathMatch: 'full'

    },
    {
        path:'formulaire',
        component: FormulaireComponent,
        pathMatch: 'full'

    },{
        path:'produits',
        component: GestionProduitsComponent,
        pathMatch: 'full'

    },
    {
        path:'formulaire-produit',
        component: FormulaireProduitComponent,
        pathMatch: 'full'

    },
    {
        path:'clients',
        component: GestionClientsComponent,
        pathMatch: 'full'

    },
    {
        path:'formulaire-client',
        component: FormulaireClientComponent,
        pathMatch: 'full'

    },
    
    
];
