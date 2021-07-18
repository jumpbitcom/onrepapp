import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KategorienPage } from './kategorien.page';

const routes: Routes = [
  {
    path: '',
    component: KategorienPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KategorienPageRoutingModule {}
