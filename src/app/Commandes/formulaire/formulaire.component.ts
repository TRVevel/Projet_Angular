import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-formulaire',
  imports: [FormsModule,CommonModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  formu:string|null=""
  id:string|null=""
  quantity:string|null=""
  name:string|null=""
  date:string|null=""
  address:string|null=""
  product:string|null=""
  selectedDatetime: string|null="";
  isCreateFormVisible = false;
  isModifierFormVisible = false;

ngOnInit() {
  const urlParams = new URLSearchParams(window.location.search);
  this.formu = urlParams.get('formu');
  this.id = urlParams.get('id');
  this.quantity = urlParams.get('quantity');
  this.name= urlParams.get('name');
  this.date = urlParams.get('date');
  this.address = urlParams.get('address');
  this.product = urlParams.get('product');
  console.log(this.name);
  this.selectedDatetime = this.date ? this.formatToDatetimeLocal(this.date) : null;
  console.log(this.selectedDatetime);
  if (this.formu == "0") {
    this.isCreateFormVisible=true;
    console.log('Créer');
  } else if (this.formu == "1") {
    this.isModifierFormVisible=true;
    console.log('Modifier');
}

}
onCreerClick(
  event: Event
) {
  event.preventDefault(); // Empêche le comportement par défaut
  let whereClick: number = 0; // Vous pouvez définir d'autres valeurs si nécessaire
  window.location.href = `formulaire?formu=${whereClick}`;
  console.log(`Lien Creer cliqué`);
}
formatToDatetimeLocal(date: string): string {
    // Créer un objet Date à partir de la chaîne ISO
    const dateOk = new Date(date);

    // Retourner sous le format 'YYYY-MM-DDTHH:mm'
    return dateOk.toISOString().slice(0, 16);
  }
  
}
