import { Component, Input } from '@angular/core';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { Customer } from '../models/Customer';

@Component({
  selector: 'app-carte-commande',
  imports: [],
  templateUrl: './carte-commande.component.html',
  styleUrl: './carte-commande.component.css'
})
export class CarteCommandeComponent {
  
  @Input() order!: Order;
  @Input() product!: Product[];
  @Input() customer!: Customer[];
  productRelier: Product | undefined;
  customerRelier: Customer | undefined;
  ngOnInit() {
    this.productRelier = this.product.find((product) => product.id == this.order.productId);
    console.log(this.productRelier)
    this.customerRelier = this.customer.find((customer) => customer.orders.includes(this.order.id));
    console.log(this.customerRelier);
  }
}
