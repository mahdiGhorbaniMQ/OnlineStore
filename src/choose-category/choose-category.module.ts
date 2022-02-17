import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    ChooseCategoryComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChooseCategoryModule { }
