import { Product } from 'src/app/models/product.model';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessangerService {

  subject = new Subject<Product>();

  constructor() { }

  sendMsg(product) { // **
    this.subject.next(product);
  }

  getMsg(): Observable<Product> {
    return this.subject.asObservable();
  }
}
