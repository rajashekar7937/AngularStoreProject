import { Component, OnInit } from '@angular/core';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  id:number;

  constructor(
    private customersSerivce: CustomersService,
    private loggingService: LoggingService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
    this.id =+params.id;
    this.customers = this.customersSerivce.getCustomers();
    });
  }

  onAdd() {
    this.loggingService.logMessage('Customer List - Add button clicked.');
    this.router.navigate(['/customers','add']);
  }
}
