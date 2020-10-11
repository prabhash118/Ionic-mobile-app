import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovipagePage } from './movipage.page';

const routes: Routes = [
  {
    path: '',
    component: MovipagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovipagePageRoutingModule {}
