import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CardConfigurationComponent } from './open-closed/card-configuration/card-configuration.component';
import { CardContentProjection1Component } from './open-closed/card-content-projection-1/card-content-projection-1.component';
import { CardContentProjection2Component } from './open-closed/card-content-projection-2/card-content-projection-2.component';
import { OpenClosedComponent } from './open-closed/open-closed.component';
import { SolidComponent } from './solid.component';

const routes: Routes = [
  {
    path: '',
    component: SolidComponent,
    children: [
      {
        path: 'open-closed',
        title: 'Open Closed',
        component: OpenClosedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    OpenClosedComponent,
    SolidComponent,
    CardConfigurationComponent,
    CardContentProjection1Component,
    CardContentProjection2Component,
  ],
})
export class SolidModule {}
