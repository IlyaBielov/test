import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'channels',
    loadChildren: () => import('./pages/channels-page/channels-page.module').then(m => m.ChannelsPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics-page/statistics-page.module').then(m => m.StatisticsPageModule)
  },
  {
    path: '',
    redirectTo: 'channels',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
