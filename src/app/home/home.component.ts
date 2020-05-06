import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  resetCount(){
    this.clickCounter = 0;
  }

  countClick(){
    this.clickCounter += 1;
  }

  setClasses() {
    let classes = {
      active: this.clickCounter > 20,
      halfactive: this.clickCounter > 10 && this.clickCounter <= 20,
      notactive: this.clickCounter <= 10,
    }
    return classes;
  }

}
