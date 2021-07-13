import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full',
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./pages/films/films.module').then((m) => m.FilmsPageModule),
  },
  {
    path: 'film/:id',
    loadChildren: () =>
      import('./pages/film-info/film-info.module').then(
        (m) => m.FilmInfoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
