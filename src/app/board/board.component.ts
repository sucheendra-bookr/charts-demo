import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
// let drillDown = require('highcharts/highcharts-drilldown');
import options from './configs/barchartwithdrilldownconfig';
import splineopts from './configs/splineconfig';
import columnstacked from './configs/columnstackedandgrouped';
import basicbar from './basicbar';
import piewithdrilldown from './configs/piewithdrilldown';
import mixed from './configs/mixed'


Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
Drilldown(Highcharts);

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  barDrillDownOpts: any = options;
  spLineOpts: any = splineopts;
  columnstacked: any = columnstacked;
  basicbarOpts: any = basicbar;
  pieWithDrilldownOpts: any = piewithdrilldown;
  mixedOpts: any = mixed;
  constructor() { }

  ngOnInit(){
    console.log("Options ",options);

     Highcharts.chart('container-bar-drilldown',this.barDrillDownOpts);
     Highcharts.chart('container-spline',this.spLineOpts);
     Highcharts.chart('container-column-stacked',this.columnstacked);
     Highcharts.chart('container-basic-bar',this.basicbarOpts);
     Highcharts.chart('container-pie-with-drilldown',this.pieWithDrilldownOpts);
     Highcharts.chart('container-mixed',this.mixedOpts);
   }

}
