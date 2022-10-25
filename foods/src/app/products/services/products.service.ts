import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from '../models/product.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private path= "food";
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Products[]>
  {
    return this.http.get<Products[]>("http://localhost:3000/food")
  }
  
}
