import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolAlgorithmsComponent } from './cool-algorithms.component';

describe('CoolAlgorithmsComponent', () => {
  let component: CoolAlgorithmsComponent;
  let fixture: ComponentFixture<CoolAlgorithmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolAlgorithmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
