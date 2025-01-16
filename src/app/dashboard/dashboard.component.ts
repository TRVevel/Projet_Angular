import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[CommonModule]
})
export class DashboardComponent implements OnInit {
  customers:any[]=[]
  orders:any[]=[]
  products=[]
  ordersByProduct: {[productId:number]:number} = {};

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  loadDashboardData(): void {
    // Récupérer les données des clients, commandes et produits

    this.httpService.getCustomers().subscribe(customers => {
      this.customers=customers;
    });

    this.httpService.getOrders().subscribe(orders => {
      this.orders=orders;
      this.calculateOrdersByProduct();
    });

    this.httpService.getProducts().subscribe(products => {
      this.products = products;
    });

  }

  // Calculer le nombre de commandes par client

  calculateOrdersByCustomer(customer: any): void {
    const totalOrdersByCustomer = customer.orders.length;
    return(totalOrdersByCustomer)
    }
  
  // Calculer le nombre de commandes par produit
  calculateOrdersByProduct(): void {
    this.ordersByProduct = {};

    for (let order of this.orders) {
      const productId = order.productId;
      if (this.ordersByProduct[productId]) {
        this.ordersByProduct[productId] += 1;
      } else {
        this.ordersByProduct[productId] = 1;
      }
    }
  }
  
  //récupération des commandes par produit
  getOrdersForProduct(productId: number): number {
    return this.ordersByProduct[productId] || 0;
  }
  }