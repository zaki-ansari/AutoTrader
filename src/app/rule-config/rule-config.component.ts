import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogFieldauditComponent } from '../mat-dialog-fieldaudit/mat-dialog-fieldaudit.component';

@Component({
  selector: 'app-rule-config',
  templateUrl: './rule-config.component.html',
  styleUrls: ['./rule-config.component.css']
})
export class RuleConfigComponent implements OnInit {


  ruleconfigdata:any[]=[{name:"Euro Retail",currency:"EUR",tenor:"=Spot",book:"Commercial",fromtime:"9:00",totime:"17:00",liquidityprovider:"CITI U K",status:"Active",},
                        {name:"Euro Spot Comm",currency:"EUR",tenor:"=Spot",book:"NorthZone",fromtime:"9:00",totime:"17:00",liquidityprovider:"CITI U K",status:"Active",},
                        {name:"Euro Fwd Comm",currency:"EUR",tenor:">Spot",book:"Commercial",fromtime:"9:00",totime:"17:00",liquidityprovider:"DEUTSCHE",status:"Active",},
                        {name:"Sterling Trader",currency:"GBP",tenor:"=Spot",book:"NorthZone",fromtime:"9:00",totime:"17:00",liquidityprovider:"BARCLAYS",status:"Inactive",},
                        {name:"John Swiss Franc",currency:"CHF",tenor:"=Spot",book:"Div1d",fromtime:"9:00",totime:"17:00",liquidityprovider:"BARCLAYS",status:"Active",},]
  constructor(private dialog: MatDialog) { }
  flag1:boolean=true;
  ngOnInit(): void {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogFieldauditComponent, {
      width: '80%',
      height: '300px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
