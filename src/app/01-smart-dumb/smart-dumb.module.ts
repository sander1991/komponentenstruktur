import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NoConceptContentComponent } from './no-concept/no-concept-content/no-concept-content.component';
import { NoConceptToolbarComponent } from './no-concept/no-concept-toolbar/no-concept-toolbar.component';
import { NoConceptComponent } from './no-concept/no-concept.component';
import { SmartDumbComponent } from './smart-dumb.component';
import { WithConceptContentComponent } from './with-concept/with-concept-content/with-concept-content.component';
import { WithConceptToolbarComponent } from './with-concept/with-concept-toolbar/with-concept-toolbar.component';
import { WithConceptComponent } from './with-concept/with-concept.component';

const routes: Routes = [
  {
    path: '',
    component: SmartDumbComponent,
    children: [
      {
        path: 'no-concept',
        title: 'Kein Konzept',
        component: NoConceptComponent,
      },
      {
        path: 'with-concept',
        title: 'Smart Dumb Konzept',
        component: WithConceptComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    NoConceptComponent,
    NoConceptToolbarComponent,
    NoConceptContentComponent,
    WithConceptContentComponent,
    WithConceptToolbarComponent,
    WithConceptComponent,
    SmartDumbComponent,
  ],
})
export class SmartDumbModule {}
