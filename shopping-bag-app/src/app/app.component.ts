import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { EventService } from './event-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  productsInBasketQuantity: number = 0;

  constructor(private basketService: BasketService,
              private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.addToBasketEvent.subscribe(() => {
      this.productsInBasketQuantity = this.basketService.productsInBasket.length;
    });
    
    this.eventService.removeFromBasketEvent.subscribe(() => {
      this.productsInBasketQuantity = this.basketService.productsInBasket.length;
    })

    if (localStorage.getItem('productsInBasket') !== null) {
        console.log(JSON.parse(localStorage.getItem('productsInBasket')));
        this.basketService.productsInBasket = JSON.parse(localStorage.getItem('productsInBasket'));
        this.eventService.emitProductAddedToBasketEvent();
    }
  }

  title = 'shopping-bag-app';
}
