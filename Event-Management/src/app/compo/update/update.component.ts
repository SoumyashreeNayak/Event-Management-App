import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../class/employee';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule, AdminheaderComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private service:ServiceService){}
  name:any = sessionStorage.getItem("username");
 
  id!:string;

  employee!:Employee;

  ngOnInit(): void {
    if(this.name == null){
      this.router.navigate(['login']);
    }

    this.route.paramMap.subscribe(params=>{
      this.id= params.get('uid')!;
    });

    this.service.GetEmpById(this.id).subscribe(
      data => this.employee=data,
      err => console.log(err),
    );
  }
  onSubmit(formdata:any) {
    this.service.UpdateEmployee(this.employee.id,
      formdata.value['firstname'], 
      formdata.value['lastname'],
      formdata.value['email'])
      .subscribe(()=>{
      alert("Updated Successfully!"),
      this.router.navigate(['employee/'+this.employee.id])
    });
  }

}
