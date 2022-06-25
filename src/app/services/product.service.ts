import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';



@Injectable()
export class ProductService {


  constructor(private http: HttpClient, private alertify: AlertifyService) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId: any): Observable<Product[]> {
    
   let newPath=this.path
   if(categoryId){
   newPath= newPath+"?categoryId=" + categoryId
   }


    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir Hata Oluştu'
    } else {
      errorMessage = 'Sistemsel Bir Hatadır.....!!!!'
    }

    return throwError(errorMessage);

  }


}
