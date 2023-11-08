import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/products.models';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css'],
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 230,
    category: 'Shoes',
    description: 'descriptions',
    image: 'https://placehold.co/400/orange/white',
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
