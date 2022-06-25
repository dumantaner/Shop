import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ) { }  // yapıcı metod içerisine instance oluşturuluyor
  
    title = "Ürün Listesi"
  buy = "Sepete Ekle"
  filterText = ""
  products: Product[] = [];
 

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data
    })


})


  }

  addToCard(_product: Product) {
    this.alertifyService.set('notifier', 'position', 'top-right');

    this.alertifyService.warning(_product.name + "  Sepete Eklendi");


  }

}
