import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {


  allRules:any[]=[];
  constructor(private service:HttpService,
              private router:Router) { }

  p:number=1;
  ngOnInit(): void {

    this.getAllRules();
  }

  getAllRules(){
    this.service.getAllRules()
    .subscribe((response:any)=>{
      console.log(response);
      this.allRules=response;
    })
  }
  
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.allRules, event.previousIndex, event.currentIndex);
    console.log(this.allRules);

    this.service.changeData(this.allRules)
    .subscribe((response)=>{
      console.log(response);
    })

    location.reload();
  }

  onEdit(item:any){
    // this.service.updateData(item)
    // .subscribe((response)=>{
    //   console.log(response);
    // })
    
    this.router.navigate(['/updaterules',item.ruleId]);
  }

  onDelete(item:any){
    console.log(item);
    if(confirm("Do you want to delete "+item.ruleId)){

      this.service.deleteData(item.ruleId)
      .subscribe((response)=>{
        console.log(response);
      })
      location.reload();
    }
   

    
  }
}
