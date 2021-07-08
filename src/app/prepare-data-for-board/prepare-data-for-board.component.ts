import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
// let drillDown = require('highcharts/highcharts-drilldown');
import options from '../configs/barchartwithdrilldownconfig';
import splineopts from '../configs/splineconfig';
import columnstacked from '../configs/columnstackedandgrouped';
import basicbar from '../configs/basicbar';
import piewithdrilldown from '../configs/piewithdrilldown';
import mixed from '../configs/mixed'


Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
Drilldown(Highcharts);
@Component({
  selector: 'app-prepare-data-for-board',
  templateUrl: './prepare-data-for-board.component.html',
  styleUrls: ['./prepare-data-for-board.component.css']
})
export class PrepareDataForBoardComponent implements OnInit {
  data: any = {};
  barDrillDownOpts: any = options;
  spLineOpts: any = splineopts;
  columnstacked: any = columnstacked;
  basicbarOpts: any = basicbar;
  pieWithDrilldownOpts: any = piewithdrilldown;
  mixedOpts: any = mixed;
  constructor() {
    this.data['barDrillDownOpts'] = this.barDrillDownOpts;
    this.data['spLineOpts'] = this.spLineOpts;
    this.data['columnstacked'] = this.columnstacked;
    this.data['basicbarOpts'] = this.basicbarOpts;
    this.data['pieWithDrilldownOpts'] = this.pieWithDrilldownOpts;
    this.data['mixedOpts'] = this.mixedOpts;
   }

  ngOnInit(){
   }

}
