import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
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
  declarations: [OpenClosedComponent, SolidComponent],
})
export class SolidModule {}
