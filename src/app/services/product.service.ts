import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';



@Injectable()
export class ProductService {
  

  constructor(private http:HttpClient) { }
  path="http://localhost:3000/products" ;

  getProducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.path).pipe(
    tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

handleError(err:HttpErrorResponse){
  let errorMessage=''
  if(err.error instanceof ErrorEvent){
    errorMessage='Bir Hata Oluştu'
  }else{
    errorMessage='Sistemsel Bir Hata'
  }

  return throwError(errorMessage);

}


}