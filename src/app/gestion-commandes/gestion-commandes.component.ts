import { Component } from '@angular/core';
import { CarteCommandeComponent } from "../carte-commande/carte-commande.component";
import { RequetesApiService } from '../services/requetes-api.service';
import { CommonModule } from '@angular/common';
import { Order } from '../models/Order';
import { Product } from '../models/Product';

@Component({
  selector: 'app-gestion-commandes',
  imports: [CarteCommandeComponent, CommonModule],
  templateUrl: './gestion-commandes.component.html',
  styleUrl: './gestion-commandes.component.css'
})
export class GestionCommandesComponent {
  orderList!: Order[]
  productList!: Product[]

  constructor(private requetesApiService: RequetesApiService) {
    this.orderList = [];
    this.productList = [];
   }
  ngOnInit() {
    let authBody = {"username": "admin", "password": "pwd" };
    this.requetesApiService.login(authBody).subscribe((value)=>{
      console.log(value);
      localStorage.setItem("token", value.token)

      this.requetesApiService.getOrders().subscribe((value)=>{
        console.log(value);
        this.orderList = value.map((order: any) => new Order(order.id, order.productId, order.quantity, order.userId, order.createdAt));
        console.log(this.orderList);

        this.requetesApiService.getProduct().subscribe((value)=>{
          console.log(value);
          this.productList = value.map((product: any) => new Product(product.id, product.name, product.price, product.stock));
          console.log(this.productList);
      })
    });
  }
)}
}
