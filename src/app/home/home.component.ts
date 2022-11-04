import { Component, Input, OnInit } from '@angular/core';
import { MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data_items:any=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]
  constructor() { }

  @Input()
yPosition: MenuPositionY | undefined
  ngOnInit(): void {
  }

}
