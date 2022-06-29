import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute, private http: HttpClient
  ) { }  // yapıcı metod içerisine instance oluşturuluyor

  title = "Ürün Listesi"
  buy = "Sepete Ekle"
  delete = "Sil"
  filterText = ""
  products: Product[] = [];
  path = "http://localhost:3000/products";

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      })
    })


  }

  addToCard(_product: Product) {
    this.alertifyService.set('notifier', 'position', 'top-right');

    this.alertifyService.success(_product.name + "  Sepete Eklendi");


  }


  deleteToCard(_product: Product) {
    this.alertifyService.warning(_product.name + "  Silindi");
    let newPath = this.path;
    newPath = newPath + '/' + _product.id
    this.http.delete(newPath).subscribe();
    
  }



}
