import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private CartService: CartService) {}
  cart: Cart = {
    items: [
      {
        product: 'https://placehold.co/400/orange/white',
        name: 'sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: 'https://placehold.co/400/orange/white',
        name: 'sneakers',
        price: 150,
        quantity: 1,
        id: 1,
      },
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
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    // this.dataSource = this.cart.items;
    this.CartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }
  getTotal(items: Array<CartItem>): number {
    return this.CartService.getTotal(items);
  }

  onClearCart() {
    this.CartService.clearCart();
  }
  onRemoveFromCart(item: CartItem): void {
    this.CartService.removeFromCart(item);
  }
  onAddQuantity(item: CartItem): void {
    this.CartService.addToCart(item);
  }
  onRemoveQuantity(item: CartItem): void{
    this.CartService.removeQuantity(item)
  }
}
