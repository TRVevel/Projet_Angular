import { Routes } from '@angular/router';
import { GestionCommandesComponent } from './Commandes/gestion-commandes/gestion-commandes.component';
import { FormulaireComponent } from './Commandes/formulaire/formulaire.component';
import { GestionProduitsComponent } from './Produits/gestion-produits/gestion-produits.component';
import { FormulaireProduitComponent } from './Produits/formulaire-produit/formulaire-produit.component';

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
    
    
];
