import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DikstrasDemoComponent } from './dikstras-demo.component';

describe('DikstrasDemoComponent', () => {
  let component: DikstrasDemoComponent;
  let fixture: ComponentFixture<DikstrasDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DikstrasDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DikstrasDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
