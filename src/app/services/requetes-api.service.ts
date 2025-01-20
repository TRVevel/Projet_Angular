import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class RequetesApiService {
  constructor(private httpClient: HttpClient) { }
  private baseUrl = 'http://localhost:3000/api';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJBbGljZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0OTUyMzE3LCJleHAiOjE3NzA5NTIzMTd9.9_KQpsXAR_EaI8hIDPdQCzjGk6EELg7Nd7sW81Z7KZE';
  
  login(body:any){
    return this.httpClient.post<any>((`${this.baseUrl}/auth/login`), body);
  }
  getCustomers(){
   if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.get<any>(`${this.baseUrl}/customers`, {headers});
  }
  getProduct(){
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.get<any>(`${this.baseUrl}/products`, {headers});
  }
  getOrders(){
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.get<any>(`${this.baseUrl}/orders`, {headers});
  }
  getUsers(){
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.get<any>(`${this.baseUrl}/users`, {headers});
  }

  getOrderById(orderId: number): Observable<any> {
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.get<any>(`${this.baseUrl}/orders/${orderId}`, {headers});
  }

  getCustomerById(customerId: number): Observable<any> {
    if (!this.token) {
      throw new Error('No authentication token');
    }
    const headers = { Authorization: this.token };
    return this.httpClient.get<any>(`${this.baseUrl}/customers/${customerId}`, { headers });
  }
  
  getProductById(productId: number): Observable<any> {
    if (!this.token) {
      throw new Error('No authentication token');
    }
    const headers = { Authorization: this.token };
    return this.httpClient.get<any>(`${this.baseUrl}/products/${productId}`, { headers });
  }

  createOrder(orderData: any): Observable<any> {
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.post<any>(`${this.baseUrl}/orders`, orderData, {headers});
  }

  updateOrder(orderId: number, orderData: any): Observable<any> {
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.put<any>(`${this.baseUrl}/orders/${orderId}`, orderData, {headers});
  }

  updateCustomerOrders(customerId: number, customer: any): Observable<any> {
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.put(`${this.baseUrl}/customers/${customerId}`, customer, {headers});
  }
  createCustomer(customerData: any): Observable<any> {
    this.ensureToken();
    const headers = { Authorization: this.token };
    return this.httpClient.post<any>(`${this.baseUrl}/customers`, customerData, { headers });
  }
  updateCustomer(customerId: number, customer: any): Observable<any> {
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.put(`${this.baseUrl}/customers/${customerId}`, customer, {headers});
  }
  deleteCustomer(customerId: number): Observable<any> {
    this.ensureToken();
    const headers = { Authorization: this.token };
    return this.httpClient.delete<any>(`${this.baseUrl}/customers/${customerId}`, { headers });
  }
  updateProductStock(productId: number, updatedProduct: any): Observable<any> {
    if(!this.token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:this.token};
    return this.httpClient.put<any>(`${this.baseUrl}/products/${productId}`, updatedProduct, {headers});
  }
  deleteOrder(orderId: number): Observable<any> {
    if (!this.token) {
      throw new Error('No authentification');
    }
    const headers = { Authorization: this.token };
    return this.httpClient.delete(`${this.baseUrl}/orders/${orderId}`, { headers });
  }
   // Méthodes pour les produits
   createProduct(productData: any): Observable<any> {
    this.ensureToken();
    const headers = { Authorization: this.token };
    return this.httpClient.post<any>(`${this.baseUrl}/products`, productData, { headers });
  }

  updateProduct(productId: number, productData: any): Observable<any> {
    this.ensureToken();
    const headers = { Authorization: this.token };
    return this.httpClient.put<any>(`${this.baseUrl}/products/${productId}`, productData, { headers });
  }

  deleteProduct(productId: number): Observable<any> {
    this.ensureToken();
    const headers = { Authorization: this.token };
    return this.httpClient.delete<any>(`${this.baseUrl}/products/${productId}`, { headers });
  }

  // Utilitaires
  private ensureToken(): void {
    if (!this.token) {
      throw new Error('No authentication token');
    }
  }
}
