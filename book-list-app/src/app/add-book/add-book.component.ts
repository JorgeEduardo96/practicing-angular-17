import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {

  @Output()
  changeShowAddBookEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  addBookEvent: EventEmitter<any> = new EventEmitter<any>();

  newBook = {
    title: '',
    cover: '',
    isRead: false,
    isbn: '',
    author: ''
  }

  closeAddBook() {    
    this.changeShowAddBookEvent.emit();
  }

  addBook() {
    this.addBookEvent.emit(this.newBook);
    this.changeShowAddBookEvent.emit();
  }

}
