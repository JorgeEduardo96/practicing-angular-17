import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { EventService } from '../event-service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrl: './shopping-basket.component.scss'
})
export class ShoppingBasketComponent {

  constructor(public basketService: BasketService,
    private eventService: EventService) { }

  removeItemFromBasket(product) {
    this.basketService.removeFromBasket(product);
    this.eventService.emitProductRemovedFromBagEvent();
  }

  calculateGrandTotal() {
    let grandTotal = 0;
    this.basketService.productsInBasket.forEach(element => {
      grandTotal += element.price * element.quantity
    });
    return grandTotal;
  }

}
