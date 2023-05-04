import { Component } from '@angular/core';
import * as data from './products_data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = (data as any).default;
  p: number = 1;
  searchText: string = '';
}
