import { Component, OnInit } from '@angular/core';
import { AdminheaderComponent } from "../adminheader/adminheader.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../service/service.service';
import { Router } from '@angular/router';
import { Employee } from '../../class/employee';

@Component({
    selector: 'app-addemployee',
    standalone: true,
    templateUrl: './addemployee.component.html',
    styleUrl: './addemployee.component.css',
    imports: [AdminheaderComponent, FormsModule, CommonModule]
})
export class AddemployeeComponent implements OnInit {
    serviceService!: ServiceService;

    constructor(private router:Router, serviceService:ServiceService){
        this.serviceService = serviceService;
    }
    name:any = sessionStorage.getItem("username");
    ngOnInit(): void {
        if(this.name == null){
          this.router.navigate(['login']);
        }
    }

    private  firstname!:string;
    private  lastname!:string;
    private email!:string;
    onSubmit(formdata:any) {
        this.firstname = formdata.value['firstname'];
        this.lastname= formdata.value['lastname'];
        this.email= formdata.value['email'];

        this.serviceService.addEmployee(this.firstname, this.lastname, this.email).subscribe(()=>{
            alert('Employee added successfully'),
            this.router.navigate(['employee'])
        });
    }
  
}
