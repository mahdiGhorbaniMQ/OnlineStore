import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';



@NgModule({
  declarations: [
    MenuItemComponent,
    MenuContainerComponent,
    SubMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuContainerComponent
  ]
})
export class MenuModule { }
