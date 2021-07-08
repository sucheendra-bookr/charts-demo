import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { OutputGraphComponent } from './output-graph/output-graph.component';
import { BoardComponent } from './board/board.component';
import { PrepareDataForBoardComponent } from './prepare-data-for-board/prepare-data-for-board.component';
@NgModule({
  declarations: [
    AppComponent,
    OutputGraphComponent,
    BoardComponent,
    PrepareDataForBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [OutputGraphComponent],
  // entryComponents: [OutputGraphComponent]
})
export class AppModule { }
