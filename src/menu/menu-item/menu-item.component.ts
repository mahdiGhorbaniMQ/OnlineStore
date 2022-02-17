import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuInformationService } from '../information/menu-information.service';
import { MenuItemModel } from '../model/menu-item-model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input("item") item!:MenuItemModel;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showSubMenu(){
    this.item.isMouseEnter=true;
  }
  hideSubMenu(){
    this.item.isMouseEnter=false;
  }
}
