import { Injectable } from '@angular/core';

export interface Software {
  name: string;             
  version: string;           
  installedYear: number;     
}

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  private softwareList: Software[] = [
    { name: 'Visual Studio Code', version: '1.66.0', installedYear: 2021 },
  ];

  // Method to get the list of software
  getSoftware(): Software[] {
    return this.softwareList;
  }

  // Method to add new software to the list
  addSoftware(software: Software) {
    this.softwareList.push(software);
  }
}
