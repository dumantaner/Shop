import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
 
  constructor() { }
  title = "Kategori Listesi";
  categories :Category[]=[
    {id:1,name:"Elektronik"},
    {id:2,name:"İçecek"},
    {id:3,name:"Kitap"},
    {id:4,name:"İkinci El"},
    {id:5,name:"Spor"},
    {id:6,name:"Ev Eşyası"},
  ]
  ngOnInit(): void {
  }

}
