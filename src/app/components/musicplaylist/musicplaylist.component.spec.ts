import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayListComponent } from './musicplaylist.component';

describe('MusicplaylistComponent', () => {
  let component: MusicPlayListComponent;
  let fixture: ComponentFixture<MusicPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlayListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
