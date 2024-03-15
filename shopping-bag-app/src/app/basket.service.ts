import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BasketService {

    productsInBasket: any[] = [];

    addToBasket(product: any) {
        this.productsInBasket.push(product);
        localStorage.setItem('productsInBasket', JSON.stringify(this.productsInBasket));
    }

    removeFromBasket(product) {    
        if (confirm('Are you sure you want to remove the item from basket?')) {
            this.productsInBasket = this.productsInBasket.filter(item => item.id != product.id);
            localStorage.setItem('productsInBasket', JSON.stringify(this.productsInBasket));
        }
    }

    isInBag(product: any) {
        return this.productsInBasket.find(item => item.id == product.id);
    }

    clearBasket() {
        this.productsInBasket = [];
        localStorage.setItem('productsInBasket', '');
    }
}