import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  imports:[CommonModule]
})
export class CustomersComponent implements OnInit{
  customers: any[] = [];
  selectedCustomer: any = null;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  // Charger les clients depuis l'API
  loadCustomers(): void {
    this.httpService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  // Rediriger vers le formulaire de modification
  editCustomer(id: number): void {
    this.router.navigate(['/edit-customer', id]);
  }

  //Ajouter un nouveau client
  addCustomer(): void {
    this.router.navigate(['/add-customer']);
  }

  // Supprimer un client
  deleteCustomer(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.httpService.deleteCustomer(id).subscribe(() => {
        this.loadCustomers();
      });
    }
    }
  }

