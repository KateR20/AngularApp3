


import { Component, inject, effect } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookService } from '../services/book';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})

export class BookForm {


  // Services for managing books and navigation.
  private bookService = inject(BookService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  title = '';
  author = '';
  description = '';

  // Track whether we are adding or editing a book.
  
editing = this.route.snapshot.paramMap.has('id');
bookId = this.route.snapshot.paramMap.get('id') ?? '';


private formLoaded = false;


  


// Populate the form once the book data has loaded.
// Run only once so later updates don't overwrite typing.
private loadExistingBook = effect(() => {
  
if (!this.editing || this.formLoaded) {

    return;
  }

  const existingBook = this.bookService.books().find(
    book => book.id === this.bookId
  );

 
if (existingBook) {
  this.title = existingBook.title;
  this.author = existingBook.author;
  this.description = existingBook.description;
  this.formLoaded = true;
}

});


  // Add a new book or update an existing book.
  addBook(): void {
    if (!this.title.trim() || !this.author.trim()) {
      return;
    }

    const book: Book = {
      id: this.editing ? this.bookId : crypto.randomUUID(),
      title: this.title,
      author: this.author,
      description: this.description
    };

    
if (this.editing) {
  // Navigate only after the update succeeds.
  this.bookService.updateBook(book, () => {
    this.router.navigate(['/books']);
  });
} else {
  // Navigate only after the new book is saved.
  this.bookService.addBook(book, () => {
    this.router.navigate(['/books']);
  });
}


    
  }
}

