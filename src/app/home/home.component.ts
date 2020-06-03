import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title =  "Pandemic Clicker";
  clickCounter: number = 0;
  name: string = '';
  joke: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.giveJokes().subscribe(res => {
      this.joke = res;
    });
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
