import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  url: string = '/assets/books.json'
  books: any;
  showAddBook: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.books = res;
    })
  }

  changeShowAddBook() {
    this.showAddBook = false;
  }

  addBook(event) {
    console.log(event);
    this.books.push(event);
  }

}
