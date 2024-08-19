import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'authentication',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
