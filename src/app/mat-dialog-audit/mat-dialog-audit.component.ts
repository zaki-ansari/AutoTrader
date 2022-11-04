import { InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Rulemonitor } from 'model/rulemonitor';

@Component({
  selector: 'app-mat-dialog-audit',
  templateUrl: './mat-dialog-audit.component.html',
  styleUrls: ['./mat-dialog-audit.component.css']
})
export class MatDialogAuditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Rulemonitor) { }

  ngOnInit(): void {
  }

  auditDetails:any[]=[{desc:"Request Nostro account balances",time:"10/13/2022 09:00:01 234"},
                      {desc:"Nostro Account #00123456; Credit 10,000.00; Position = +16,000.00",time:"10/13/2022 09:00:01 234"},
                      {desc:"Request MCA account balances",time:"10/13/2022 09:00:01 234"},
                      {desc:"MCA Account #91666345; Debit -1,000.00; Position= +6,000.00.",time:"10/13/2022 09:00:01 234"},
                      {desc:"Request open trades with Value date >= Today",time:"10/13/2022 09:00:01 234"},
                      {desc:"Calculating Initial position for the day. Starting Position = +50,000",time:"10/13/2022 09:00:01 234"},
                      {desc:"Processing Trade 134902. Buy 5,000.00; Position = +5,000.00",time:"10/13/2022 09:00:01 234"},
                      {desc:"Processing Trade 134903. Sell 4,000.00; Position = +10,000.00",time:"10/13/2022 09:00:01 234"},
                      {desc:"Placed an Order to 'Sell 10,000.00 EUR with Citibank UK' ",time:"10/13/2022 09:00:01 234"},]
}
