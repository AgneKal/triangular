import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangle-area-calc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './triangle-area-calc.component.html',
  styleUrl: './triangle-area-calc.component.css'
})
export class TriangleAreaCalcComponent {
  public a:number|null = null;
  public b:number|null = null;
  public c:number|null = null;
  public area:number|null|undefined|boolean = null;

  private triangleCalc(a:number, b:number, c:number):boolean {
    if (a + b > c && b + c > a && a + c > b) {
        return true;
    } else {
        return false;
    }
  }

  private getArea() {
    if (this.a != null && this.b != null && this.c != null) {
      const p = (this.a + this.b + this.c) / 2;
      const heronFormula = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return heronFormula;
    } else {
      return
    }
  }

  public calculate():number|null|undefined {
    if (this.a != null && this.b != null && this.c != null) {
       if (this.triangleCalc(this.a, this.b, this.c) == true) {
        this.area = this.getArea();
       } else {
        this.area = false;
       }
    } else {
       this.area = false;
    }
    this.a = null;
    this.b = null;
    this.c = null;
    return
  }
}

