
import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../services/book';

@Component({
  selector: 'app-book-detail',
  imports: [RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {

  // Access the current route and book service.
  private route = inject(ActivatedRoute);
  private bookService = inject(BookService);

  // Read the book ID from the URL.
  
bookId = this.route.snapshot.paramMap.get('id') ?? '';


  // Find the selected book using an Angular computed signal.
  book = computed(() => this.bookService.books().find(
    b => b.id === this.bookId
  ));
}
