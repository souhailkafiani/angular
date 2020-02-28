import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetProductCategorieService {
  private url = "http://127.0.0.1:8000/api"
  constructor(private http:HttpClient) {
    
   }
   get_gome_products(){
    return this.http.get(`${this.url}/products`);
  }
}
