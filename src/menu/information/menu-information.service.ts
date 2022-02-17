import { Injectable } from '@angular/core';
import { CategoryInformationService } from 'src/choose-category/information/category-information.service';
import { MenuItemModel } from '../model/menu-item-model';

@Injectable({
  providedIn: 'root'
})
export class MenuInformationService {

  menuItems:MenuItemModel[];
  constructor(private categoriesInformatin:CategoryInformationService) { 
    this.menuItems=[
      {
        title: "صفحه اصلی",
        icon: null,
        path: "home",
      },
      {
        title: "محصولات",
        icon: null,
        isMouseEnter: false,
        children: categoriesInformatin.categories,
      },
      {
        title: "پیشنهادات ویژه",
        icon: null,
        path: ""
      },
      {
        title: "اخبار",
        icon: null,
        path: ""
      },
      {
        title: "حساب شخصی",
        icon: null,
        path: ""
      }
    ]
  }
}
