import { Injectable } from '@angular/core';

export interface Contact {
  name: string;           
  phoneNumber: string;    
  email?: string;         
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList: Contact[] = [
    { name: 'John Doe', phoneNumber: '123-456-7890', email: 'johndoe@example.com' },
  ];

  // Method to get the list of contacts
  getContacts(): Contact[] {
    return this.contactList;
  }

  // Method to add a new contact to the list
  addContact(contact: Contact) {
    this.contactList.push(contact);
  }
}
