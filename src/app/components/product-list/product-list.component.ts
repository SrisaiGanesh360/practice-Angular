import { Component } from '@angular/core';
import * as data from './products_data.json';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = (data as any).default;
  p: number = 1;
  searchText: string = '';
  addToCart(){
    Swal.fire('Congratulations!', "You're item is added to cart", 'success');
  }
  sortD(){
    this.products = this.products.sort((p1:any,p2:any) => p2.price - p1.price);
  }
  sortA(){
    this.products = this.products.sort((p1:any,p2:any) => p1.price - p2.price);
  }
}
