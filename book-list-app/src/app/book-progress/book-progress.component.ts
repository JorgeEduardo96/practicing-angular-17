import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-progress',
  templateUrl: './book-progress.component.html',
  styleUrl: './book-progress.component.css'
})
export class BookProgressComponent {

  @Input()
  books: any[] = [];

  booksRead() {
    return this.books.filter(book => book.isRead).length;
  }

  booksReadMessage() {
    return this.booksRead() >= this.books.length ? 'Parabéns, você leu todos os livros!' : `${this.booksRead()} de ${this.books.length} livros lidos`;
  }

}
