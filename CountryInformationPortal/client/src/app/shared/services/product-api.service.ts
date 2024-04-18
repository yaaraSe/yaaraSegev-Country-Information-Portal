// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { map } from 'rxjs';
// import { IProduct } from '../models/products.interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductApiService {
//   http = inject(HttpClient);
//   constructor() {}

//   getProducts() {
//     return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
//       map((products) => {
//         return products.map((product) => {
//           return { ...product, quality: 1 };
//         });
//       })
//     );
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { IProduct } from '../models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      map((products) => {
        return products.map((product) => {
          return { ...product, quality: 1 };
        });
      })
    );
  }
}
