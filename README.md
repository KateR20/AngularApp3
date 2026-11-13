
# Angular Assignment 3 — Book Browser 📚

**Student:** Kate Redman  
**Course:** Angular Development (MWD4B)  
**College:** triOS College

## Project Description

This project is an Angular Book Browser application developed for Assignment 3.

Users can browse a collection of books, view individual book details, and add, edit, or delete books.

The application demonstrates Angular Signals, routing, HTTP services, and CRUD operations using a simulated backend.

## Features

- Browse a list of books with titles, authors, and descriptions
- View individual book details
- Add new books
- Edit existing books
- Delete books
- Navigate between pages using Angular Router
- Manage application state using Angular Signals
- Perform CRUD operations using Angular HttpClient
- Store book data using JSON Server
- Responsive design with custom CSS

## Technologies Used

- Angular
- TypeScript
- HTML and CSS
- Angular Signals
- Angular Router
- HttpClient
- JSON Server
- Git and GitHub

## Installation

Clone the repository:

```bash
git clone https://github.com/KateR20/AngularApp3.git
```

Open the project folder:

```bash
cd AngularApp3
```

Install dependencies:

```bash
npm install
```

## Running the Application

The application requires two development servers.

### 1. Start JSON Server

Open a terminal in the project folder and run:

```bash
npx json-server db.json --port 3000
```

Book data is available at:

http://localhost:3000/books

### 2. Start Angular

Open a second terminal in the project folder and run:

```bash
npm start
```

Open the application at:

http://localhost:4200/books

Keep both servers running while using the application.

## Application Routes

- `/books` — View all books
- `/books/:id` — View individual book details
- `/books/new` — Add a new book
- `/books/edit/:id` — Edit an existing book

## CRUD Operations

The BookService uses Angular HttpClient to communicate with JSON Server.

- **Create:** POST
- **Read:** GET
- **Update:** PUT
- **Delete:** DELETE

Angular Signals manage the book list displayed in the application.

## Testing

The application was tested by adding, viewing, editing, and deleting books.

Changes were verified after refreshing the browser to confirm that JSON Server persisted the data.

The application also successfully completed an Angular production build using:

```bash
npm run build
```

## Author

Kate Redman  
Angular Development — Assignment 3  
triOS College
