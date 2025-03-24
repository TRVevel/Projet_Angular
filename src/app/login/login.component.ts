import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RequetesApiService } from '../services/requetes-api.service';

@Component({
  selector: 'app-login',
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router,private requeteApiService:RequetesApiService) { }

  onSubmit(): void {
    
    if (this.username && this.password) {
      this.router.navigate(["/dashboard"])
      let authBody={"username":"admin","password":"pwd"}

      this.requeteApiService.login(authBody).subscribe(value=>{
        console.log(value)
        localStorage.setItem("token", value.token)
        })
      }
    else { console.log('Veuillez renseigner tous les champs.'); }
  }
}

