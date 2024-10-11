import { Injectable } from '@angular/core';

export interface StationeryItem {
  name: string;      
  quantity: number;   
  price: number;      
}

@Injectable({
  providedIn: 'root'
})
export class StationeryService {
  private stationeryList: StationeryItem[] = [
    { name: 'Notebook', quantity: 20, price: 1.50 },
  ];

  // Method to get the list of stationery items
  getStationeryItems(): StationeryItem[] {
    return this.stationeryList;
  }

  // Method to add a new stationery item to the list
  addStationeryItem(item: StationeryItem) {
    this.stationeryList.push(item);
  }
}
