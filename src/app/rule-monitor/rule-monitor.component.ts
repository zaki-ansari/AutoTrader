import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogAuditComponent } from '../mat-dialog-audit/mat-dialog-audit.component';
import { MatDialogPositionComponent } from '../mat-dialog-position/mat-dialog-position.component';
import { MatDialogSearchComponent } from '../mat-dialog-search/mat-dialog-search.component';

@Component({
  selector: 'app-rule-monitor',
  templateUrl: './rule-monitor.component.html',
  styleUrls: ['./rule-monitor.component.css']
})
export class RuleMonitorComponent implements OnInit {

  data_items:any=[{id:1,title:"Euro Retail",ccy:"EUR",long:"100,000",short:"10,000",position:+50000},
                  {id:2,title:"Euro Spot Comm.",ccy:"EUR",long:"100,000",short:"10,000",position:+20000},
                  {id:3,title:"John Swiss Franc",ccy:"CHF",long:"100,000",short:"10,000",position:-25000},
                  {id:4,title:"Sterling Trader",ccy:"GBP",long:"100,000",short:"10,000",position:50000},
                  {id:5,title:"Canada Retail",ccy:"CAD",long:"100,000",short:"10,000",position:35000},
                  {id:6,title:"INR Comm.",ccy:"INR",long:"100,000",short:"10,000",position:22000},
                  {id:7,title:"Ruble Trader",ccy:"RUB",long:"100,000",short:"10,000",position:-12000},
                  {id:8,title:"Sing Trader",ccy:"SGD",long:"100,000",short:"10,000",position:5000}];
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {

  }
  
  openDialog(item:any): void {
    const dialogRef = this.dialog.open(MatDialogPositionComponent, {
      width: '80%',
      height: '600px',
      data:item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  openDialog2(item:any): void {
    const dialogRef = this.dialog.open(MatDialogAuditComponent, {
      width: '80%',
      height: '600px',
      data:item
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  


}
