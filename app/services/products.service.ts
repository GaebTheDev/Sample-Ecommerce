import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + "/products");
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiURL + "/products/categories");
  }
}
