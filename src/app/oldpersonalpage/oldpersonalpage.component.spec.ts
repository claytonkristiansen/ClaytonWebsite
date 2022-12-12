import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldpersonalpageComponent } from './oldpersonalpage.component';

describe('OldpersonalpageComponent', () => {
  let component: OldpersonalpageComponent;
  let fixture: ComponentFixture<OldpersonalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldpersonalpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldpersonalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
