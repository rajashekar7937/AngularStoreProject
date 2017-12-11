import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  id: number;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private loggingService: LoggingService,
    private router:Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id=+params.id;
      this.customer = this.customersService.getCustomer(this.id);
    });
    
  }

  onEdit() {
    this.loggingService.logMessage('Customer Detail - Edit button clicked.');
    this.router.navigate(['/customers',this.id,'edit']);
  }

  onDelete() {
    this.loggingService.logMessage('Customer Detail - Delete button clicked.');
    this.customersService.deletecustomer(this.id);
    this.router.navigate(['/customers']);
  }
}
