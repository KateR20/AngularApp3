
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private http = inject(HttpClient);

  // Address of our JSON Server backend.
  private apiUrl = 'http://localhost:3000/books';

  // Store books using an Angular Signal.
  private booksSignal = signal<Book[]>([]);

  // Allow components to read the books.
  books = this.booksSignal.asReadonly();

  constructor() {
    this.loadBooks();
  }

  // READ: Retrieve books from JSON Server.
  loadBooks(): void {
    this.http.get<Book[]>(this.apiUrl).subscribe({
      next: (books) => this.booksSignal.set(books),
      error: (error) => console.error('Error loading books:', error)
    });
  }

  // READ: Find a book by its ID.
  getBook(id: string): Book | undefined {
    return this.booksSignal().find(book => book.id === id);
  }

 
  // CREATE: Add a new book and report the result.
  addBook(book: Book, onSuccess?: () => void): void {
    this.http.post<Book>(this.apiUrl, book).subscribe({
      next: (createdBook) => {
        // Update the books signal after the server saves.
        this.booksSignal.update(books => [...books, createdBook]);

        // Let the form know the save was successful.
        onSuccess?.();
      },
      error: (error) => {
        console.error('Error adding book:', error);
        alert('The book could not be saved. Please try again.');
      }
    });
  }


 
  // UPDATE: Save a book and report the result.
  updateBook(updatedBook: Book, onSuccess?: () => void): void {
    this.http.put<Book>(
      `${this.apiUrl}/${updatedBook.id}`,
      updatedBook
    ).subscribe({
      next: (savedBook) => {
        // Update the signal after JSON Server confirms the save.
        this.booksSignal.update(books =>
          books.map(book =>
            book.id === savedBook.id ? savedBook : book
          )
        );

        // Notify the form that saving succeeded.
        onSuccess?.();
      },
      error: (error) => {
        console.error('Error updating book:', error);
        alert('The changes could not be saved. Please try again.');
      }
    });
  }

  // DELETE: Remove a book through HTTP.
  deleteBook(id: string): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.booksSignal.update(books =>
          books.filter(book => book.id !== id)
        );
      },
      error: (error) => console.error('Error deleting book:', error)
    });
  }
}


