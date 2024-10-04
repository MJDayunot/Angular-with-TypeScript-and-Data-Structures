import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastlistComponent } from './podcastlist.component';

describe('PodcastlistComponent', () => {
  let component: PodcastlistComponent;
  let fixture: ComponentFixture<PodcastlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PodcastlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
