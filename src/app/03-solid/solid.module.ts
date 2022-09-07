import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CardConfigurationBodyComponent } from './open-closed/card-configuration/card-configuration-body/card-configuration-body.component';
import { CardConfigurationFooterComponent } from './open-closed/card-configuration/card-configuration-footer/card-configuration-footer.component';
import { CardConfigurationComponent } from './open-closed/card-configuration/card-configuration.component';
import { CardContentProjection1Component } from './open-closed/card-content-projection-1/card-content-projection-1.component';
import { CardCPBodyComponent } from './open-closed/card-content-projection-2/card-c-p-body/card-c-p-body.component';
import { CardCPFooterComponent } from './open-closed/card-content-projection-2/card-c-p-footer/card-c-p-footer.component';
import { CardCPTitleComponent } from './open-closed/card-content-projection-2/card-c-p-title/card-c-p-title.component';
import { CardContentProjection2Component } from './open-closed/card-content-projection-2/card-content-projection-2.component';
import { OpenClosedComponent } from './open-closed/open-closed.component';
import { CardConfigurationSrComponent } from './single-responsibility/card-configuration-sr/card-configuration-sr.component';
import { SingleResponsibilityComponent } from './single-responsibility/single-responsibility.component';
import { SolidComponent } from './solid.component';

const routes: Routes = [
  {
    path: '',
    component: SolidComponent,
    children: [
      {
        path: 'single-responsibility',
        title: 'Single Responsiblity',
        component: SingleResponsibilityComponent,
      },
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
    CardConfigurationBodyComponent,
    CardConfigurationFooterComponent,
    OpenClosedComponent,
    SolidComponent,
    CardConfigurationComponent,
    CardContentProjection1Component,
    CardContentProjection2Component,
    CardCPTitleComponent,
    CardCPBodyComponent,
    CardCPFooterComponent,
    SingleResponsibilityComponent,
    CardConfigurationSrComponent,
  ],
})
export class SolidModule {}
