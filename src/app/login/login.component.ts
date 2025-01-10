import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router,private httpservice:HttpService) { }

  onSubmit(): void {
    // on ajoute ici la logique pour l'authentification, par exemple une API
    if (this.username && this.password) {
      console.log('Utilisateur:', this.username);
      console.log('Mot de passe:', this.password);
      this.router.navigate(["/dashboard"])
      let authBody={"username":"admin","password":"pwd"}

      this.httpservice.login(authBody).subscribe(value=>{
        console.log(value)
        localStorage.setItem("token", value.token)
        })
      }
    else { console.log('Veuillez renseigner tous les champs.'); }
  }
}

