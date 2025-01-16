import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  imports:[ ReactiveFormsModule ]

})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup = {} as FormGroup;
  customerId: number | null = null;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;

    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });

    if (this.customerId) {
      this.httpService.getCustomers().subscribe((customers) => {
        const customer = customers.find((c:any) => c.id === this.customerId);
        if (customer) {
          this.customerForm.patchValue(customer);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      if (this.customerId) {
        this.httpService.updateCustomer(this.customerId, this.customerForm.value).subscribe(() => {
          this.router.navigate(['/customers']);
        });
      } else {
        this.httpService.addCustomer(this.customerForm.value).subscribe(() => {
          this.router.navigate(['/customers']);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}