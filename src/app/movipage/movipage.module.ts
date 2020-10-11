import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovipagePageRoutingModule } from './movipage-routing.module';

import { MovipagePage } from './movipage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovipagePageRoutingModule
  ],
  declarations: [MovipagePage]
})
export class MovipagePageModule {}
