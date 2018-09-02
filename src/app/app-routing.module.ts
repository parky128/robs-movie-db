import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppRouteMoviesResolver } from './app-routing-movies.resolver';
import { AppRouteShowsResolver } from './app-routing-shows.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      trendingMovies: AppRouteMoviesResolver,
      trendingShows: AppRouteShowsResolver
    },
    runGuardsAndResolvers: 'always'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [AppRouteMoviesResolver, AppRouteShowsResolver]
})

export class AppRoutingModule { }
