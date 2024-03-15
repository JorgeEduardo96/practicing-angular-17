import { Component, Input } from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  @Input()
  books: any[] = [];

  faEye = faEye;

}
