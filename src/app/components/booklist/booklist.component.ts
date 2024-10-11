import { Component } from '@angular/core';
import { BooklistService } from '../../services/booklist.service';  // Import the service

interface Book {
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent {
  bookTitle: string = '';
  bookAuthor: string = '';
  bookYear: number | null = null;
  bookList: Book[] = [];

  // Inject the service into the component
  constructor(private booklistService: BooklistService) {}

  // Load the books from the service when the component initializes
  ngOnInit() {
    this.bookList = this.booklistService.getBooks();
  }

  // Method to add a new book using the service
  addBook() {
    if (this.bookTitle && this.bookAuthor && this.bookYear !== null) {
      const newBook: Book = {
        title: this.bookTitle,
        author: this.bookAuthor,
        year: this.bookYear
      };
      this.booklistService.addBook(newBook);  // Add the book via the service
      this.bookList = this.booklistService.getBooks();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.bookTitle = '';
    this.bookAuthor = '';
    this.bookYear = null;
  }
}
