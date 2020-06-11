import { Component, OnInit } from '@angular/core';
import { Line } from '../models/line'
import { AuthService } from '../shared/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  chartTitle: any = { text: 'overview' };
  lines: Line[];
  lineId: number;
  inputData: number;
  errorMessage: string;
  userData:any;
  

  constructor(private authService:AuthService, private router:Router) {  }

  ngOnInit(): void {
    this.lines = [
      {id:0, name: "money", data: [123, 276, 310, 212, 240, 156, 98]},
      {id:1, name: "power", data: [165, 210, 287, 144, 190, 167, 212]},
      {id:2, name: "women", data: [56, 140, 195, 46, 123, 78, 95]}
    ]
    this.authService.getUserData().subscribe(
      res => {
        this.userData = res;
      }
    );
  }

  addValue(){
    if(this.lineId > this.lines.length || this.lineId <= 0){
      this.errorMessage = "This line does not exist."
      return
    }else{
      this.lines[this.lineId-1].data = [...this.lines[this.lineId-1].data,this.inputData];
      this.errorMessage = "";  
    }
  }
}
