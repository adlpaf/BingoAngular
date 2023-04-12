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
  typeOfBingo:string = '75';
  typeOfBingoNumeric = 75;
  numberByColumn:number = 15;
  arrayByColumn:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14, 15];

  changeTypeOfBingo(value: string) {
    this.typeOfBingo = value;
    this.typeOfBingoNumeric = parseInt(value);
    this.numberByColumn = parseInt(this.typeOfBingo) / 5;
    this.arrayByColumn = [];
    for (let i = 1; i <= this.numberByColumn; i++) {
      this.arrayByColumn.push(i);
    }
  }

  searchArray(index:number) {
    return this.bingo.find(i => i === index);
  }

  cleanBoard() {
    this.bingo = [];
    this.number = 0;
    this.letterSelected = '';
  }

  newNumber() {
    if (this.bingo.length >= parseInt(this.typeOfBingo)) {
      this.number = 0;
      this.letterSelected = "ERROR";
      return;
    }
    let validNumber = false
    let numberSelected = 0;
    let searchNumber: number | undefined = 0;
    do {
      numberSelected = Math.round(Math.random() * (parseInt(this.typeOfBingo) - 1)) + 1;
      searchNumber = this.searchArray(numberSelected);
      validNumber = searchNumber === undefined ? false : true;
    } while (validNumber);
    this.bingo.push(numberSelected);
    this.number = numberSelected;
    this.letterSelected = this.letter[Math.floor((numberSelected - 1) / this.numberByColumn)];
  }
}

