// mobile-app.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileAppService {
  private appList: string[] = [
    'Facebook',
  ];

  // Method to get the list of mobile apps
  getAppList(): string[] {
    return this.appList;
  }

  // Method to add a new mobile app to the list
  addApp(app: string) {
    this.appList.push(app);
  }
}
