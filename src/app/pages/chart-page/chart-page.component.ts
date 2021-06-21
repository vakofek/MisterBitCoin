import { Component, OnInit } from '@angular/core';
import { BitconService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent implements OnInit {

  constructor(private bitconService: BitconService) { }

  marketPriceChart = {
    title: 'Market Price',
    chartType: 'LineChart',
    data: this.bitconService.getMarketPrice(),
    columns: Object.keys(this.bitconService.getMarketPrice())
  }
  ngOnInit(): void {
  }

}
