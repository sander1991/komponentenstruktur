import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FeatureDetailsStandaloneComponent } from './feature-details-standalone/feature-details-standalone.component';
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
    title: 'Feature Module',
    component: FeatureFactsComponent,
  },
  {
    path: 'facts/:id',
    title: 'Feature Module - Detail',
    component: FeatureDetailsComponent,
  },
  // {
  //   path: 'facts/:id',
  //   title: 'Feature Module - Detail STANDALONE',
  //   loadComponent: () =>
  //     import(
  //       './feature-details-standalone/feature-details-standalone.component'
  //     ).then((m) => m.FeatureDetailsStandaloneComponent),
  // },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FeatureDetailsStandaloneComponent,
  ],
  declarations: [
    FeatureModuleConceptComponent,
    FeatureDetailsComponent,
    FeatureFactsContentComponent,
    FeatureFactsComponent,
    FeatureFactsToolbarComponent,
  ],
})
export class FeatureModuleConceptModule {}
