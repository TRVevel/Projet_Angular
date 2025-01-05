import { Component } from '@angular/core';
import { CarteCommandeComponent } from "../carte-commande/carte-commande.component";

@Component({
  selector: 'app-gestion-commandes',
  imports: [CarteCommandeComponent],
  templateUrl: './gestion-commandes.component.html',
  styleUrl: './gestion-commandes.component.css'
})
export class GestionCommandesComponent {

}
