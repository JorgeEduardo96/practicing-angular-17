import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as he from 'he'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  question: any;
  incorrectAnswers: any[] = [];
  correctAnswer: any;
  chosenAnswer: any;
  answerSubmitted: boolean = false;
  winCount: any;
  loseCount: any;
  answers: any[] = [];

  url: string = "https://opentdb.com/api.php?amount=1&category=32";

  ngOnInit(): void {
    this.winCount = localStorage.getItem("winCount") ? localStorage.getItem("winCount") : 0;
    this.loseCount = localStorage.getItem("loseCount") ? localStorage.getItem("loseCount") : 0;
    this.getNewQuestion();
  }

  submitAnswer() {
    if (this.chosenAnswer) {
      this.answerSubmitted = true;
      if (this.chosenAnswer === this.correctAnswer) {
        this.winCount++;
        localStorage.setItem('winCount', this.winCount.toString());
      } else {
        this.loseCount++;
        localStorage.setItem('loseCount', this.loseCount.toString());
      }
    } else {
      alert("Escolha uma opção para seguir");
    }
  }

  getNewQuestion() {
    this.answerSubmitted = false;
    this.chosenAnswer = {};
    this.question = {};

    this.http.get(this.url).subscribe(res => {
      this.question = he.decode(res['results'][0].question);
      this.incorrectAnswers = res['results'][0].incorrect_answers;
      this.correctAnswer = res['results'][0].correct_answer;
      this.generateAnswers();
    });
  }

  generateAnswers() {
    let unorderedAnswers = JSON.parse(JSON.stringify(this.incorrectAnswers));
    unorderedAnswers.splice(Math.round(Math.random()) * unorderedAnswers.length, 0, this.correctAnswer);
    this.answers = unorderedAnswers;
  }

}
