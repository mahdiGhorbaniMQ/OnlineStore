import { Injectable } from '@angular/core';
import { CategoryModel } from '../model/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryInformationService {

  categories:CategoryModel[]=[];
  constructor() { 
    this.categories=[
      {
        name:"لوازم الکتریکی",
        children:[
          {
            title:"تلفن همراه",
            icon:null,
            isActive:false,
            children:[
              {
                title:"اپل",
                icon:null,
                path:""
              },
              {
                title:"سامسونگ",
                icon:null,
                path:""
              },
              {
                title:"هوآوی",
                icon:null,
                path:""
              },
              {
                title:"ال جی",
                icon:null,
                path:""
              },
              {
                title:"نوکیا",
                icon:null,
                path:""
              }
            ]      
          },
          {
            title:"لپتاب",
            icon:null,
            isActive:false,
            children:[
              {
                title:"اپل",
                icon:null,
                path:""
              },
              {
                title:"سامسونگ",
                icon:null,
                path:""
              },
              {
                title:"لنووا",
                icon:null,
                path:""
              },
              {
                title:"ایسوز",
                icon:null,
                path:""
              },
              {
                title:"اچ پی",
                icon:null,
                path:""
              }
            ]      
          },
          {
            title:"تبلت",
            icon:null,
            isActive:false,
            children:[
              {
                title:"اپل",
                icon:null,
                path:""
              },
              {
                title:"سامسونگ",
                icon:null,
                path:""
              },
              {
                title:"هوآوی",
                icon:null,
                path:""
              },
              {
                title:"ال جی",
                icon:null,
                path:""
              },
              {
                title:"شیاومی",
                icon:null,
                path:""
              },
            ]      
          },
          {
            title:"کاور گوشی",
            path:"",
            icon:null
          },
          {
            title:"پایه نگه دارنده گوشی",
            path:"",
            icon:null
          },
          {
            title:"گلس",
            path:"",
            icon:null
          },
          {
            title:"هدفون",
            icon:null,
            isActive:false,
            children:[
              {
                title:"فلیپس",
                path:"",
                icon:null
              },
              {
                title:"سامسونگ",
                path:"",
                icon:null
              },
              {
                title:"اپل",
                path:"",
                icon:null
              },
            ]
          }
        ],
        isMouseEnter:false,
        icon:null,
      },
      {
        name:"لوازم بهداشتی",
        children:[
          {
            title:"لوازم حمام",
            icon:null,
            isActive:false,
            children:[
              {
                title:"شامپو",
                icon:null,
                path:""
              },
              {
                title:"صابون",
                icon:null,
                path:""
              },
              {
                title:"لیف",
                icon:null,
                path:""
              },
              {
                title:"شامپو بدن",
                icon:null,
                path:""
              },
              {
                title:"کیسه",
                icon:null,
                path:""
              }
            ]      
          },
          {
            title:"کرم ها",
            icon:null,
            isActive:false,
            children:[
              {
                title:"ضد آفتاب",
                icon:null,
                path:""
              },
              {
                title:"کرم شستوشوی صورت",
                icon:null,
                path:""
              },
              {
                title:"کرم مرطوب کننده",
                icon:null,
                path:""
              },
              {
                title:"کرم شستوشوی مو",
                icon:null,
                path:""
              },
              {
                title:"کرم خوشبو کننده بدن",
                icon:null,
                path:""
              }
            ]      
          },
          {
            title:"لوازم آرایشی",
            icon:null,
            isActive:false,
            children:[
              {
                title:"رژ لب",
                icon:null,
                path:""
              },
              {
                title:"تافت مو",
                icon:null,
                path:""
              },
              {
                title:"خط چشم",
                icon:null,
                path:""
              },
              {
                title:"کرم پودر",
                icon:null,
                path:""
              },
              {
                title:"لاک",
                icon:null,
                path:""
              },
            ]      
          }
        ],
        isMouseEnter:false,
        icon:null,
      },
    ]
  }
}
