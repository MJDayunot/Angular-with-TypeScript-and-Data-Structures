import { Component } from '@angular/core';
import { Contact, ContactService } from '../../services/phonecontactlist.service'; // Adjust import path

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phonecontactlist.component.html',
  styleUrls: ['./phonecontactlist.component.css']
})
export class PhoneContactListComponent {
  // Declare properties for contact details
  contactName: string = '';
  contactPhoneNumber: string = '';
  contactEmail: string = '';

  // Array to hold the list of contacts
  contactList: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contactList = this.contactService.getContacts(); // Fetch contacts from the service
  }

  // Method to add a new contact to the list
  addContact() {
    if (this.contactName && this.contactPhoneNumber) {
      const newContact: Contact = {
        name: this.contactName,
        phoneNumber: this.contactPhoneNumber,
        email: this.contactEmail || undefined  // Use undefined for the optional email
      };
      this.contactService.addContact(newContact); // Use the service to add the contact
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
