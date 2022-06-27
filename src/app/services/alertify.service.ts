import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() {
    this.set('notifier', 'position', 'top-right')
   }

  success(message: string) {
    alertify.success(message)
  }
  error(message: string) {
    alertify.error(message)
  }

  warning(message: string) {
    alertify.warning(message)
  }

  set(notifier: string, position: string, location: string) {
    alertify.set(notifier, position, location);

  }

  delay(time: number) {
    alertify.delay(time)
  }



}
