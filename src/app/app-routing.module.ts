import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoConceptComponent } from './01-no-concept/no-concept.component';

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
  // {
  //   path: 'eingabe/:id',
  //   component: EingabeComponent,
  //   data: {
  //     title: 'Eingabe',
  //     wikilink: wikibase + 'Eingabe',
  //     roles: [],
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
