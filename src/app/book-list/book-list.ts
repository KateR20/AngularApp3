
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../services/book';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {

  // Access the service that manages our books.
  private bookService = inject(BookService);

  // Read the list of books from the Angular signal.
  books = this.bookService.books;

  // Remove a book from the list.
  
deleteBook(id: string): void {
  this.bookService.deleteBook(id);
}

}
