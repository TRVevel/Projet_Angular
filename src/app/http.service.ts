import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpClient: HttpClient){}

    login(body:any){
        return this.httpClient.post<any>("http://localhost:3000/api/auth/login",body)
    }
getUsers(){
    const token = localStorage.getItem("token")
    if (!token) {
        throw new Error("Aucun token d'authentification trouvé !")
    } 
const headers = {Authorization: token}
return this.httpClient.get<any>("http://localhost:3000/api/users",{headers})
}
}