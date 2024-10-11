import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private showList: string[] = [
    'Stranger Things',
  ];

  // Method to get the list of TV shows
  getShowList(): string[] {
    return this.showList;
  }

  
  addShow(show: string) {
    this.showList.push(show);
  }
}
