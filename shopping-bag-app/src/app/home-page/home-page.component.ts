import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { EventService } from '../event-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient,
              public basketService: BasketService,
              private eventService: EventService) {}

  products: any;
  url: string = 'https://fakestoreapi.com/products';

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.products = res;
    });
  }

  addToBasket(product) {
    product.quantity = 1;
    this.basketService.addToBasket(product);
    this.eventService.emitProductAddedToBasketEvent();
  }

  removeFromBasket(product) {
    this.basketService.removeFromBasket(product);
    this.eventService.emitProductRemovedFromBagEvent();
  }

}
