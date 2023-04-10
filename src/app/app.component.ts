import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BingoAngular';
  number = 0;
  letter = ''
  b:number[] = [];
  i:number[] = [];
  n:number[] = [];
  g:number[] = [];
  o:number[] = [];
  bingo:number[] = [];

  searchArray(index:number) {
    return this.bingo.find(i => i === index);
  }

  cleanBoard() {
    this.b = [];
    this.i = [];
    this.n = [];
    this.g = [];
    this.o = [];
    this.bingo = [];
  }

  newNumber() {
    let validNumber = false
    let numberSelected = 0;
    let letterSelected = 'B';
    let searchNumber: number | undefined = 0;
    do {
      numberSelected = Math.round(Math.random() * 75) + 1;
      let selectLetter = Math.floor(numberSelected / 15);
      
      switch (selectLetter) {
        case 0:
          searchNumber = this.b.find(i => i == numberSelected);
          validNumber = searchNumber === undefined ? false : true;
          if (!validNumber) {
            this.b.push(numberSelected);
          }
          letterSelected = 'B';
          break;
      
        case 1:
          searchNumber = this.b.find(i => i == numberSelected);
          validNumber = searchNumber === undefined ? false : true;
          if (!validNumber) {
            this.i.push(numberSelected);
          }
          letterSelected = 'I';
          break;
      
        case 2:
          searchNumber = this.b.find(i => i == numberSelected);
          validNumber = searchNumber === undefined ? false : true;
          if (!validNumber) {
            this.n.push(numberSelected);
          }
          letterSelected = 'N';
          break;
      
        case 3:
          searchNumber = this.b.find(i => i == numberSelected);
          validNumber = searchNumber === undefined ? false : true;
          if (!validNumber) {
            this.g.push(numberSelected);
          }
          letterSelected = 'G';
          break;
      
        case 4:
          searchNumber = this.b.find(i => i == numberSelected);
          validNumber = searchNumber === undefined ? false : true;
          if (!validNumber) {
            this.o.push(numberSelected);
          }
          letterSelected = 'O';
          break;
      
        default:
        break;
      }
    } while (validNumber);
    this.bingo.push(numberSelected);
    this.number = numberSelected;
    this.letter = letterSelected;
  }
}
