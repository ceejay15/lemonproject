import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AosSampleComponent } from './aos-sample.component';

describe('AosSampleComponent', () => {
  let component: AosSampleComponent;
  let fixture: ComponentFixture<AosSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AosSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AosSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
