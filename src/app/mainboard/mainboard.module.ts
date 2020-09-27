// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainboardComponent } from './mainbaord.component';

// Theme Routing
import { MainboardRoutingModule } from './mainboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainboardRoutingModule
  ],
  declarations: [ 
    MainboardComponent
  ]
})
export class MainboardModule { }
