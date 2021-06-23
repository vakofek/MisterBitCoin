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

  chartTradeVolume = {
    title: 'Trade Volume',
    chartType: 'LineChart',
    type: ChartType.AreaChart,
    data: this.getTradeVolumeData(),
    options: {
      colors: ['#f2931b'],
    }
  }

  chartMktPrice = {
    title: 'Bitcoin Value',
    type: ChartType.AreaChart,
    data: this.getMarketPriceData(),
    columnNames: ['Date', 'Price'],
    options: {
      colors: ['#f2931b'],
    }
  }

  getMarketPriceData() {
    const data= this.bitconService.getMarketPrice()
    return data.map((data:{x: number , y: number})=>{
      return[new Date(data.x*1000).toLocaleString('en-US', {year: 'numeric' , month: 'short' , day: 'numeric' }),data.y]

    })
  }
  getTradeVolumeData() {
    const data= this.bitconService.getTradeVolume()
    return data.map((data:{x: number , y: number})=>{
      return[new Date(data.x*1000).toLocaleString('en-US', {year: 'numeric' , month: 'short' , day: 'numeric' }),data.y]
    })
  }

  ngOnInit(): void {
    console.log(this.bitconService.getMarketPrice());
    console.log(this.chartTradeVolume.data);
    console.log(this.getMarketPriceData());
    
    
  }

}
