import { Component, Input } from '@angular/core';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Component({
  selector: 'app-carte-commande',
  imports: [],
  templateUrl: './carte-commande.component.html',
  styleUrl: './carte-commande.component.css'
})
export class CarteCommandeComponent {
  @Input() order!: Order;
  @Input() product!: Product;
}
