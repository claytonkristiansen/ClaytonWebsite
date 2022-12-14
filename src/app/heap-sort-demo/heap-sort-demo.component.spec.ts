import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapSortDemoComponent } from './heap-sort-demo.component';

describe('HeapSortDemoComponent', () => {
  let component: HeapSortDemoComponent;
  let fixture: ComponentFixture<HeapSortDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeapSortDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeapSortDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
