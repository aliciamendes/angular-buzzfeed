import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomePageComponent } from '../pages/home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-buzzfeed';
}
