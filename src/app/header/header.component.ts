import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogSearchComponent } from '../mat-dialog-search/mat-dialog-search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              private dialog: MatDialog) { }

  
  ngOnInit(): void {
  }

  
  
  openDialog3(): void {
    const dialogRef = this.dialog.open(MatDialogSearchComponent, {
      width: '60%',
      height: '400px',
      position: {
        top: '125px',
        left: '15px'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
