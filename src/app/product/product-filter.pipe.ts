import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
   if(!value) return[] ;
   if(!filterText) return value;
   
   
   return filterText.length>=3?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value



  }

}
