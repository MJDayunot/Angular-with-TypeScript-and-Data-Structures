import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private laptopList: string[] = [
    'MacBook Pro',  
  ];

  // Method to get the list of laptops
  getLaptops(): string[] {
    return this.laptopList;
  }

  // Method to add a new laptop model to the list
  addLaptop(laptop: string) {
    this.laptopList.push(laptop);
  }
}
