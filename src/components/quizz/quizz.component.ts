import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../assets/data/quizz_questions.json';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent implements OnInit {
  title: string = '';

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = true;

  constructor() {}

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = !this.finished;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  buttonPress(alias: string) {
    this.answers.push(alias);
    this.nextSetp();
  }

  async nextSetp() {
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const result: string = await this.checkResult(this.answers);

      this.finished = !this.finished;
      this.answerSelected =
        quizz_questions.results[result as keyof typeof quizz_questions.results];
    }
  }

  async checkResult(answers: string[]) {
    const results = answers.reduce((previous, current, index, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    return results;
  }
}
