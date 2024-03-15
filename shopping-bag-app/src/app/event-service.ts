import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  addToBasketEvent: EventEmitter<any> = new EventEmitter<any>();
  removeFromBasketEvent: EventEmitter<any> = new EventEmitter<any>();

  emitProductAddedToBasketEvent() {
    this.addToBasketEvent.emit();
  }

  emitProductRemovedFromBagEvent() {
    this.removeFromBasketEvent.emit();
  }



}
