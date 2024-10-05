import { Component } from '@angular/core';  


interface Contact {
  name: string; 
  phoneNumber: string;  
  email?: string;  
}

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
  contactList: Contact[] = [
    { name: 'John Doe', phoneNumber: '123-456-7890', email: 'johndoe@example.com' },

  ];

  // Method to add a new contact to the list
  addContact() {
    if (this.contactName && this.contactPhoneNumber) {
      const newContact: Contact = {
        name: this.contactName,
        phoneNumber: this.contactPhoneNumber,
        email: this.contactEmail || undefined  
      };
      this.contactList.push(newContact);  
      this.clearInputs();  
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.contactName = '';
    this.contactPhoneNumber = '';
    this.contactEmail = '';
  }
}
