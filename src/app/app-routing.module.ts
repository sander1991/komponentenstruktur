import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'smart-dumb/no-concept',
    pathMatch: 'full',
  },
  {
    path: 'smart-dumb',
    loadChildren: () =>
      import('./01-smart-dumb/smart-dumb.module').then(
        (m) => m.SmartDumbModule
      ),
  },
  {
    path: 'feature-module-concept',
    loadChildren: () =>
      import('./02-feature-module-concept/feature-module-concept.module').then(
        (m) => m.FeatureModuleConceptModule
      ),
  },
  {
    path: 'solid',
    loadChildren: () =>
      import('./03-solid/solid.module').then((m) => m.SolidModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
