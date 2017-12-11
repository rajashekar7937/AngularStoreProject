import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  // addcustomer:Customer=new Customer;
  customer: Customer;
  id: number;
  // submitted = false;

  // onSubmit() { this.submitted = true; }

  constructor(
    private customersService: CustomersService,
    private loggingService: LoggingService,
    private route:ActivatedRoute,
    private routes:Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params=>{
    this.id = +params.id;
    // if(!isNaN(this.id))
      this.customer = this.customersService.getCustomer(this.id);
    // else
    //   this.customersService.getCustomers();
    });
  }

  onSave() {
    this.loggingService.logMessage('Customer Form - upadte is executing.');
    // if(!isNaN(this.id)){
      this.customersService.updatecustomer(this.id,this.customer);
      this.routes.navigate(['/customers',this.id]);
    // }
    // else
    // {
    //   this.loggingService.logMessage('Customer Form - Add button is executing.');
    //   this.customersService.addCustomer(this.addcustomer);
    //   this.routes.navigate(['/customers']);
    // }
  }
}
