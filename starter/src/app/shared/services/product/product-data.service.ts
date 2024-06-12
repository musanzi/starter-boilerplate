import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Products } from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductDataService {
  
  constructor(private http: HttpClient) { }

  public products(): Observable<any> {
    return this.http.get('assets/data/product.json').pipe(
      map((res) => {
        return res;
      })
    );  
  }

  public getProduct(id: number): Observable<Products> {
    return this.products().pipe(
      map((items) => {
        return items.find((item: Products) => {
          return item.id === id;
        });
      })
    );
  }
}
