import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelComponent } from './components/panel/panel.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminComponent } from './components/panel/admin/admin.component';
import { ClientComponent } from './components/panel/client/client.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: PanelComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        redirectTo: '/',
        component: ClientComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
