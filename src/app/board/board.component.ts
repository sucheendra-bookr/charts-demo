import { Component, ComponentFactoryResolver, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
import { OutputGraphComponent } from '../output-graph/output-graph.component';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

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

  @Input() data;

  constructor(
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {

      Object.keys(this.data).forEach((ele) => {
      var elem =  this.renderer.createElement('div');
      this.renderer.setProperty(elem, 'id', ele);
      this.renderer.appendChild(document.body, elem);
      Highcharts.chart(ele, this.data[ele]);
    })
   }
}
