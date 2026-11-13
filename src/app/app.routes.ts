
import { Routes } from '@angular/router';
import { BookList } from './book-list/book-list';
import { BookDetail } from './book-detail/book-detail';
import { BookForm } from './book-form/book-form';

// Routes for browsing books, viewing details, and adding books.
export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookList },
  { path: 'books/new', component: BookForm },

{ path: 'books/edit/:id', component: BookForm },

  { path: 'books/:id', component: BookDetail },
  { path: '**', redirectTo: 'books' }
];

