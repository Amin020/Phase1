import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetricesComponent } from './metrices/metrices.component';
import { TabsComponent } from './tabs/tabs.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SelectedMetricsComponent } from './selected-metrics/selected-metrics.component';
import { SelectedMetricsSelectionMenuComponent } from './selected-metrics-selection-menu/selected-metrics-selection-menu.component';
import { SelectedMetricOptionsMenuComponent } from './selected-metric-options-menu/selected-metric-options-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MetricesComponent,
    TabsComponent,
    NavBarComponent,
    SelectedMetricsComponent,
    SelectedMetricsSelectionMenuComponent,
    SelectedMetricOptionsMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
