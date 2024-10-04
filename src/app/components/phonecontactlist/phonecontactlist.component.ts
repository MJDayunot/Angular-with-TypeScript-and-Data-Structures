import { Component } from '@angular/core';  // Import Component

// Define an interface for the Contact structure
interface Contact {
  name: string;  // Name of the contact
  phoneNumber: string;  // Phone number of the contact
  email?: string;  // Optional email of the contact
}

@Component({
  selector: 'app-phone-contact-list',  // Ensure this matches your HTML tag
  templateUrl: './phonecontactlist.component.html',  // Path to the HTML file
  styleUrls: ['./phonecontactlist.component.css']  // Path to the CSS file
})
export class PhoneContactListComponent {
  // Declare properties for contact details
  contactName: string = '';      // Variable to hold the contact name input
  contactPhoneNumber: string = ''; // Variable to hold the contact phone number input
  contactEmail: string = '';      // Variable to hold the contact email input

  // Array to hold the list of contacts
  contactList: Contact[] = [
    { name: 'John Doe', phoneNumber: '123-456-7890', email: 'johndoe@example.com' },

  ];

  // Method to add a new contact to the list
  addContact() {
    if (this.contactName && this.contactPhoneNumber) {
      const newContact: Contact = {
        name: this.contactName,
        phoneNumber: this.contactPhoneNumber,
        email: this.contactEmail || undefined  // Set email only if provided
      };
      this.contactList.push(newContact);  // Add the new contact to the list
      this.clearInputs();  // Clear the input fields after adding the contact
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.contactName = '';
    this.contactPhoneNumber = '';
    this.contactEmail = '';
  }
}
