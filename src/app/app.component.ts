import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BingoAngular';
  number = 0;
  letter = [
    "B",
    "I",
    "N",
    "G",
    "O"
  ];
  letterSelected = "";
  bingo:number[] = [];

  searchArray(index:number) {
    return this.bingo.find(i => i === index);
  }

  cleanBoard() {
    this.bingo = [];
    this.number = 0;
    this.letterSelected = '';
  }

  newNumber() {
    if (this.bingo.length >= 75) {
      this.number = 0;
      this.letterSelected = "ERROR";
      return;
    }
    let validNumber = false
    let numberSelected = 0;
    let searchNumber: number | undefined = 0;
    do {
      numberSelected = Math.round(Math.random() * 74) + 1;
      searchNumber = this.searchArray(numberSelected);
      validNumber = searchNumber === undefined ? false : true;
    } while (validNumber);
    this.bingo.push(numberSelected);
    this.number = numberSelected;
    this.letterSelected = this.letter[Math.floor((numberSelected - 1) / 15)];
  }
}

