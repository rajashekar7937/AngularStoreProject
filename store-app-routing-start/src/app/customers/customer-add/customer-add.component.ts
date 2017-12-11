import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/models/customer';
import { CustomersService } from 'app/services/customers.service';
import { LoggingService } from 'app/services/logging.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  Formcustomer:Customer=new Customer;
  
  constructor(
    private customersService: CustomersService,
    private loggingService: LoggingService,
    private route:ActivatedRoute,
    private routes:Router
  ) { }

  ngOnInit() {
    this.customersService.getCustomers();
  }
  onSave(){
    this.loggingService.logMessage('Customer Form - Add button is executing.');
      this.customersService.addCustomer(this.Formcustomer);
      this.routes.navigate(['/customers']);
  }
}
