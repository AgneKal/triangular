import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TriangleAreaCalcComponent } from './triangle-area-calc/triangle-area-calc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TriangleAreaCalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'triangular';
}
