import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpClient: HttpClient){}

    //authentification
    login(body:any){
        return this.httpClient.post<any>("http://localhost:3000/api/auth/login",body)
    }

//récupération des utilisateurs
getUsers(){
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Aucun token d'authentification trouvé !")
    } 
    const headers = {Authorization: token}
    return this.httpClient.get<any>("http://localhost:3000/api/users",{headers})
}

//récupération des produits
getProducts() {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Aucun token d'authentification trouvé !")
    } 
    const headers = {Authorization: token}
    return this.httpClient.get<any>("http://localhost:3000/api/products",{headers});
}

//récupération des clients
getCustomers(): Observable<any> {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Aucun token d'authentification trouvé !")
    } 
    const headers = {Authorization: token}
    return this.httpClient.get<any>("http://localhost:3000/api/customers",{headers});
}

//récupération des commandes
getOrders() {
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Aucun token d'authentification trouvé !")
    } 
    const headers = {Authorization: token}
    return this.httpClient.get<any>("http://localhost:3000/api/orders",{headers});
}
// Ajouter un nouveau client
addCustomer(customer: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Aucun token d'authentification trouvé !");
    }
    const headers = { Authorization: token };
    return this.httpClient.post<any>('http://localhost:3000/api/customers', customer, { headers });
  }

  // Mettre à jour un client existant
  updateCustomer(id: number, customer: any): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Aucun token d'authentification trouvé !");
    }
    const headers = { Authorization: token };
    return this.httpClient.put<any>(`http://localhost:3000/api/customers/${id}`, customer, { headers });
  }

  // Supprimer un client
  deleteCustomer(id: number): Observable<any> {
    const token = localStorage.getItem("token");
    if (!token) {
       throw new Error("Aucun token d'authentification trouvé !");
    }
    const headers = { Authorization: token };
    return this.httpClient.delete<any>(`http://localhost:3000/api/customers/${id}`, { headers });
  }
}

