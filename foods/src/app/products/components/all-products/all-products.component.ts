import { Products } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:Products []=[];

  constructor(private produtService:ProductsService){ }

  ngOnInit(): void {
       this.produtService.getAllProducts().subscribe((product:Products[]) =>
       {
        this.products = product
       })
  }

  getAllProducts(){
     
  }

}
