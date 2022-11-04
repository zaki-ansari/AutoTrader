import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-updaterules',
  templateUrl: './updaterules.component.html',
  styleUrls: ['./updaterules.component.css']
})
export class UpdaterulesComponent implements OnInit {

  rules:any;
  issubmitDissabled:boolean=true;
  constructor(private route:ActivatedRoute,
    private service:HttpService) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
  }


  GetDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      console.log(param.get("id"));
      this.service.getParticularRules(param.get("id"))
      .subscribe((response:any)=>{
        console.log(response);
        this.rules=response;
        
      })
    })
  }

  onupdate(){
    this.service.updateData(this.rules)
    .subscribe((response)=>{
      console.log(response);
    })
  }


}
