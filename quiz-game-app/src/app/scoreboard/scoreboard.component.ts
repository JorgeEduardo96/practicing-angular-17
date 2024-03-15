import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent {

  @Input()
  winCount: any;

  @Input()
  loseCount: any;

}
