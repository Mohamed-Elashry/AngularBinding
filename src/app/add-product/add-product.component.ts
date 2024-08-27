import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Data/IProducts';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  name: string = "";
  description: string = "";
  price: number = 0;
  @Output() productNewData = new EventEmitter<IProduct>();
  onAddProduct() {
    if(this.name != null && this.name != ""){
      this.productNewData.emit({
        Id: 10,
        Name: this.name,
        Image: "../images/product.jpg",
        Description: this.description,
        Price: this.price,
        Category: "product"
      });
      this.name = "";
      this.description = "";
      this.price = 0;
    }
  }
}
