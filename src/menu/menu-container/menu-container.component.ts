import { Component, OnInit } from '@angular/core';
import { MenuInformationService } from '../information/menu-information.service';
import { MenuItemModel } from '../model/menu-item-model';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {

  menuItems:MenuItemModel[]=[];
  constructor(private menuInformation:MenuInformationService) { }

  ngOnInit(): void {
    this.menuItems=this.menuInformation.menuItems;
  }

}
