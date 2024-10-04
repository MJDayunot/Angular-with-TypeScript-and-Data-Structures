import { Component } from '@angular/core';  // Import Component

// Define an interface for the Book structure
interface Book {
  title: string;
  author: string;
  year: number;  // Publication year
}

@Component({
  selector: 'app-book-list',  // Ensure this matches your HTML tag
  templateUrl: './booklist.component.html',  // Path to the HTML file
  styleUrls: ['./booklist.component.css']  // Path to the CSS file
})
export class BookListComponent {
  // Declare properties for book details
  bookTitle: string = '';  // Variable to hold the book title input
  bookAuthor: string = '';  // Variable to hold the book author input
  bookYear: number | null = null;  // Variable to hold the book publication year input

  // Array to hold the list of books
  bookList: Book[] = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  ];

  // Method to add a new book to the list
  addBook() {
    if (this.bookTitle && this.bookAuthor && this.bookYear !== null) {
      const newBook: Book = {
        title: this.bookTitle,
        author: this.bookAuthor,
        year: this.bookYear
      };
      this.bookList.push(newBook);  // Add the new book to the list
      this.clearInputs();  // Clear the input fields after adding the book
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.bookTitle = '';
    this.bookAuthor = '';
    this.bookYear = null;  // Reset to null
  }
}
