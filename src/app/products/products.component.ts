import { Component, Input } from '@angular/core';
import { IProduct } from '../Data/IProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
@Input({required: true}) productData:IProduct; 
}
