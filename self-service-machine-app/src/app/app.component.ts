import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  url: string = '/assets/products.json';
  products: any;

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.products = res;
    });
  }

  changeQuantity(product, event, operation) {
    event.stopPropagation();
    operation == '+' ? product.quantity++ : product.quantity--;
  }

  total(): number {
    let total = 0;
    this.products.forEach(product => {
      if (product.active) total += product.price * product.quantity;
    });

    return total;
  }

  title = 'self-service-machine-app';
}
