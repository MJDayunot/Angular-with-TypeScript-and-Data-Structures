import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerlistComponent } from './composerlist.component';

describe('ComposerlistComponent', () => {
  let component: ComposerlistComponent;
  let fixture: ComponentFixture<ComposerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposerlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
