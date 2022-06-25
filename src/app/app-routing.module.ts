import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ActivatedRoute } from '@angular/router';
const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'category',component:CategoryComponent},
  {path:'products/category/:categoryId',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
