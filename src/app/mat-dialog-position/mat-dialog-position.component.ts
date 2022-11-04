import { Component, Inject, OnInit } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rulemonitor } from 'model/rulemonitor';


@Component({
  selector: 'app-mat-dialog-position',
  templateUrl: './mat-dialog-position.component.html',
  styleUrls: ['./mat-dialog-position.component.css']
})
export class MatDialogPositionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Rulemonitor) { }

  ngOnInit(): void {
  }

  positionDetails:any[]=[{ref:"00123456",trans_desc:"Nostro A/c Balance",cashflow:-10000,position:16000,updatedtime:"10/13/2022 14:10:03 234"},
                         {ref:"916666345",trans_desc:"MCA A/c Balance",cashflow:-1000,position:6000,updatedtime:"10/13/2022 14:10:03 234"},
                         {ref:"134902",trans_desc:"Client Trade",cashflow:5000,position:5000,updatedtime:"10/13/2022 14:10:03 234"},
                         {ref:"134903",trans_desc:"Client Trade",cashflow:-4000,position:10000,updatedtime:"10/13/2022 14:10:03 234"},
                         {ref:"134904",trans_desc:"Cover Trade",cashflow:-10000,position:16000,updatedtime:"10/13/2022 14:10:03 234"},  ];

  
}
