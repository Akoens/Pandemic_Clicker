import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public chartTitle: any = { text: 'overview' };
  public chartData: number[][] = [[123, 276, 310, 212, 240, 156, 98], [165, 210, 287, 144, 190, 167, 212], [56, 140, 195, 46, 123, 78, 95]];

  constructor() { }

  ngOnInit(): void {
  }

}
