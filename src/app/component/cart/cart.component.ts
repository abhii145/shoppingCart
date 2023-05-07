import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartProduct: any[] = [];
  public grandTotal: number = 0;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.cartProduct = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    });
  }

  removeCartItem(item: any) {
    this.cartservice.removeCartItem(item);
  }

  emptyCart() {
    this.cartservice.removeAllCart();
  }
}
