import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequetesApiService {
  constructor(private httpClient: HttpClient) { }

  login(body:any){
    return this.httpClient.post<any>('http://localhost:3000/api/auth/login', body);
  }
  getCustomers(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJBbGljZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0OTUyMzE3LCJleHAiOjE3NzA5NTIzMTd9.9_KQpsXAR_EaI8hIDPdQCzjGk6EELg7Nd7sW81Z7KZE';
    if(!token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:token};
    return this.httpClient.get<any>('http://localhost:3000/api/customers', {headers});
  }
  getProduct(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJBbGljZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0OTUyMzE3LCJleHAiOjE3NzA5NTIzMTd9.9_KQpsXAR_EaI8hIDPdQCzjGk6EELg7Nd7sW81Z7KZE';
    if(!token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:token};
    return this.httpClient.get<any>('http://localhost:3000/api/products', {headers});
  }
  getOrders(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJBbGljZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0OTUyMzE3LCJleHAiOjE3NzA5NTIzMTd9.9_KQpsXAR_EaI8hIDPdQCzjGk6EELg7Nd7sW81Z7KZE';
    if(!token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:token};
    return this.httpClient.get<any>('http://localhost:3000/api/orders', {headers});
  }
  getUsers(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJBbGljZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0OTUyMzE3LCJleHAiOjE3NzA5NTIzMTd9.9_KQpsXAR_EaI8hIDPdQCzjGk6EELg7Nd7sW81Z7KZE';
    if(!token) {
      throw new Error('No authentification');
    }
    const headers= {Authorization:token};
    return this.httpClient.get<any>('http://localhost:3000/api/users', {headers});
  }
}
