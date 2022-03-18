import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfritiaoPrimeComponent } from './anfritiao-prime.component';

describe('AnfritiaoPrimeComponent', () => {
  let component: AnfritiaoPrimeComponent;
  let fixture: ComponentFixture<AnfritiaoPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfritiaoPrimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfritiaoPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
