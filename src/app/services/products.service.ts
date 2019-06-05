import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [{
    id: '1',
    name: 'Compass',
    image: 'assets/products/compass.jpg',
    price: 30,
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra arcu ipsum, sed venenatis quam ultricies id. Suspendisse a tortor finibus, placerat neque eget, facilisis quam. Integer in tellus accumsan.',
    url: '/'
  }, {
    id: '2',
    name: 'Rift',
    image: 'assets/products/rift.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra arcu ipsum, sed venenatis quam ultricies id. Suspendisse a tortor finibus, placerat neque eget, facilisis quam. Integer in tellus accumsan.',
    price: 300,
    url: '/'
  }, {
    id: '3',
    name: 'Silver  Fox',
    image: 'assets/products/silver-fox.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra arcu ipsum, sed venenatis quam ultricies id. Suspendisse a tortor finibus, placerat neque eget, facilisis quam. Integer in tellus accumsan.',
    price: 100,
    url: '/'
  }];

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(3000));
  }

  getProductById(id: string): Observable<Product | null> {
    const product = this.products.find(x => x.id === id) || null;

    return of(product);
  }
}
