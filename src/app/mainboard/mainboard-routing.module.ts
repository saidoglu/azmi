import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainboardComponent } from './mainbaord.component';


const routes: Routes = [
  {
    path: '',
    component: MainboardComponent,
    data: { 
      title: 'Mainboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainboardRoutingModule {}
