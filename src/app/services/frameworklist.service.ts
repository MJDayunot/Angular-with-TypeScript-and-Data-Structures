import { Injectable } from '@angular/core';

interface Framework {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {
  private frameworkList: Framework[] = [
    { name: 'Angular', description: 'A platform for building mobile and desktop web applications.' },
  ];

 
  getFrameworkList(): Framework[] {
    return this.frameworkList;
  }

  // Method to add a new framework to the list
  addFramework(framework: Framework) {
    this.frameworkList.push(framework);
  }
}
