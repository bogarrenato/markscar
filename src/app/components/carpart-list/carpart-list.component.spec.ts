import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpartListComponent } from './carpart-list.component';

describe('CarpartListComponent', () => {
  let component: CarpartListComponent;
  let fixture: ComponentFixture<CarpartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpartListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
