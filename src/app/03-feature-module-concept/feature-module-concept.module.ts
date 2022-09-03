import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FeatureDetailsComponent } from './feature-details/feature-details.component';
import { FeatureFactsContentComponent } from './feature-facts/feature-facts-content/feature-facts-content.component';
import { FeatureFactsToolbarComponent } from './feature-facts/feature-facts-toolbar/feature-facts-toolbar.component';
import { FeatureFactsComponent } from './feature-facts/feature-facts.component';
import { FeatureModuleConceptComponent } from './feature-module-concept.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'facts',
    pathMatch: 'full',
  },
  {
    path: 'facts',
    component: FeatureFactsComponent,
  },
  {
    path: 'facts/:id',
    component: FeatureDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    FeatureModuleConceptComponent,
    FeatureDetailsComponent,
    FeatureFactsContentComponent,
    FeatureFactsComponent,
    FeatureFactsToolbarComponent,
  ],
})
export class FeatureModuleConceptModule {}
