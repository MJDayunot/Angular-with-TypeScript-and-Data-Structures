import { Injectable } from '@angular/core';

interface Book {
  title: string;
  author: string;
  year: number;  
}

@Injectable({
  providedIn: 'root',
})
export class BooklistService {
  
  private bookList: Book[] = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  ];

  // Method to get the list of books
  getBooks(): Book[] {
    return this.bookList;
  }

  // Method to add a new book to the list
  addBook(book: Book): void {
    this.bookList.push(book);
  }
}
