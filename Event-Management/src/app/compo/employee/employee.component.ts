import { Component } from '@angular/core';
import { AdminheaderComponent } from "../adminheader/adminheader.component";
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../class/employee';
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-employee',
    standalone: true,
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css',
    imports: [AdminheaderComponent, CommonModule, RouterLink]
})
export class EmployeeComponent {


    serviceService!:ServiceService;

    constructor(private router:Router,ServiceService:ServiceService){
        this.serviceService=ServiceService;
    }

    addemp() {
        this.router.navigate(['addEmployee']);
    }

    name:any = sessionStorage.getItem("username");

    employee1!:Employee[];

    ngOnInit(): void {
        if(this.name == null){
          this.router.navigate(['login']);
        }
        this.serviceService.getAllEmp().subscribe(
            data => this.employee1=data,
            err => console.error('Error fetching products:', err)
        );
        // console.log("employee "+this.employee1);
    }

}
