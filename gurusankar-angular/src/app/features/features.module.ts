import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [
    AgentsListComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
