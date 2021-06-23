import { Component, OnInit } from '@angular/core';
import { BitconService } from 'src/app/services/bitcoin.service';
import { ChartType } from 'angular-google-charts';

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
    // columns: Object.keys(this.bitconService.getMarketPrice()),
    options: {
      colors: ['#f2931b'],
    }
    
  }
  chartMktPrice = {
    title: 'Bitcoin Value',
    type: ChartType.AreaChart,
    data: this.getData(),
    columnNames: ['Date', 'Price'],
    options: {
      colors: ['#f2931b'],
    }
  };

  getData() {
    const data= this.bitconService.getMarketPrice()
    return data.map((d:any)=>{
      return[new Date(d.x*1000).toLocaleString(),d.y]

    })
  }
  ngOnInit(): void {
    console.log(this.bitconService.getMarketPrice());
    console.log(this.marketPriceChart.data);
    console.log(this.getData());
    
    
  }

}
