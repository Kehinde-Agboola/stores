import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: 'https://placehold.co/400/orange/white',
        name: 'sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];

  displayedColumns: Array<string> = [
    'product',
    // 'name',
    // 'price',
    // 'quantity',
    // 'total',
    // 'action',
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
