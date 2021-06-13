import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import { HeaderComponent } from './header/header.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {StartComponent} from './start/start.component';
import {MainComponent} from './main/main.component';
const routes: Routes = [
  { path:'header',component: HeaderComponent},
  { path:'start',component: StartComponent},
  { path: 'first', component: FirstComponent},
  { path: '', redirectTo: '/FirstComponent', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent},
  { path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
