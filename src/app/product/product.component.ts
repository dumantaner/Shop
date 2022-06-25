import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,private productService:ProductService) { }  // yapıcı metod içerisine instance oluşturuluyor
  title = "Ürün Listesi"
  buy = "Sepete Ekle"
  filterText = ""
  products: Product[] = [];
 

  ngOnInit(): void {

this.productService.getProducts().subscribe(data=>{
  this.products=data;
})


  }

  addToCard(_product: Product) {
    this.alertifyService.set('notifier', 'position', 'top-right');

    this.alertifyService.warning(_product.name + "  Sepete Eklendi");


  }

}
