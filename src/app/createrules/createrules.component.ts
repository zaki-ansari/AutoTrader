import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-createrules',
  templateUrl: './createrules.component.html',
  styleUrls: ['./createrules.component.css']
})
export class CreaterulesComponent implements OnInit {

  constructor(private service:HttpService,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }


  onSubmit(f:NgForm){

    let obj={
      currency:f.value.currency,
      longTrigger:f.value.longtrigger,
      shortTrigger:f.value.shorttrigger,
      duration:f.value.duration,
      lp:f.value.lp
      
    }
    console.log(obj);
    this.service.createRules(obj)
    .subscribe((response)=>{
      console.log(response);
      this.toastr.success("Rules Created Successfully");
      f.resetForm();
      
      
    })
    
   }

}
