import { MaterialModule } from './common/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MetricesComponent } from './metrices/metrices.component';
import { TabsComponent } from './tabs/tabs.component';
import { SelectedMetricsComponent } from './selected-metrics/selected-metrics.component';
import { SelectedMetricsSelectionMenuComponent } from './selected-metrics-selection-menu/selected-metrics-selection-menu.component';
import { SelectedMetricOptionsMenuComponent } from './selected-metric-options-menu/selected-metric-options-menu.component';
import { SelectedMetricsStore } from './common/selected-metrics.store';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricesComponent,
    TabsComponent,
    SelectedMetricsComponent,
    SelectedMetricsSelectionMenuComponent,
    SelectedMetricOptionsMenuComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      
    ])
  ],
  providers: [
    SelectedMetricsStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
