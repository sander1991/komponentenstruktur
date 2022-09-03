import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoConceptComponent } from './01-no-concept/no-concept.component';
import { SmartDumbConceptComponent } from './02-smart-dumb-concept/smart-dumb-concept.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'no-concept',
    pathMatch: 'full',
  },
  {
    path: 'no-concept',
    component: NoConceptComponent,
  },
  {
    path: 'smart-dumb-concept',
    component: SmartDumbConceptComponent,
  },
  {
    path: 'feature-module-concept',
    loadChildren: () =>
      import('./03-feature-module-concept/feature-module-concept.module').then(
        (m) => m.FeatureModuleConceptModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
