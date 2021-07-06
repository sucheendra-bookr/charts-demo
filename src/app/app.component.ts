import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 9 HighCharts';
  highcharts = Highcharts;
  constructor() { }

  ngOnInit() {
    this.barChartPopulation()
    this.pieChartBrowser()
  }


  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'bar',
  //     zoomType: 'xy',

  //     panKey: 'shift'
  // },
  //   title: {
  //     text: "Infosys stock value"
  //   },
  //   xAxis: {
  //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  //       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //   },
  //   yAxis: {
  //     title: {
  //       text: "Infosys Stock value in dollar"
  //     },
  //   },
  //   series: [{
  //     data: [12, 8, 43, 35, 20, 90, 100, 110],
  //     type: 'line',

  //   }],
  //   colors: ['red', 'blue', '#8bbc21', '#910000', '#1aadce',
  //   '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
  // }

  barChartPopulation() {
    Highcharts.chart('barChart', {
      chart: {
        type: 'bar',
        zoomType: 'xy'
      },
      title: {
        text: 'Historic World Population by Region'
      },
      xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Population (millions)',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: ' millions'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Year 1800',
        data: [107, 31, 635, 203, 2]
      }, {
        type: undefined,
        name: 'Year 1900',
        data: [133, 156, 947, 408, 6]
      }, {
        type: undefined,
        name: 'Year 2000',
        data: [814, 841, 3714, 727, 31]
      }, {
        type: undefined,
        name: 'Year 2016',
        data: [1216, 1001, 4436, 738, 40]
      }]
    });
  }

  pieChartBrowser() {
    Highcharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in October, 2019'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    });
  }
}
