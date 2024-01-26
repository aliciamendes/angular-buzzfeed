import { Component } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [QuizzComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
