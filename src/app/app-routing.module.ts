import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SubscribePageComponent } from './subscribe-page/subscribe-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'subscribe', component: SubscribePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
