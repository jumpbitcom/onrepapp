import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategorienPageRoutingModule } from './kategorien-routing.module';

import { KategorienPage } from './kategorien.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KategorienPageRoutingModule
  ],
  declarations: [KategorienPage]
})
export class KategorienPageModule {}
