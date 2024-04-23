import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangleAreaCalcComponent } from './triangle-area-calc.component';

describe('TriangleAreaCalcComponent', () => {
  let component: TriangleAreaCalcComponent;
  let fixture: ComponentFixture<TriangleAreaCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriangleAreaCalcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TriangleAreaCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
