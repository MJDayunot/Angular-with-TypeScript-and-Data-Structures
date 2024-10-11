import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareService {
  private hardwareList: string[] = [
    'CPU',
  ];

  // Method to get the list of hardware components
  getHardwareList(): string[] {
    return this.hardwareList;
  }

  // Method to add a new hardware component to the list
  addHardware(component: string) {
    this.hardwareList.push(component);
  }
}
