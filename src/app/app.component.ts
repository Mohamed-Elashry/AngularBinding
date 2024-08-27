import { Component } from '@angular/core';
import { AllProducts, IProduct } from './Data/IProducts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EcommerceTask';
  products = AllProducts;
  showAddProductDiv:boolean = false;

  onPressAddProduct(){
    this.showAddProductDiv = !this.showAddProductDiv;
  }
  onAddNewProduct(newProduct:IProduct){
    this.products.push(newProduct);
  }
}


