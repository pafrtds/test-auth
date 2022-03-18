import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnfritiaoPrimeComponent } from './anfritiao-prime/anfritiao-prime.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
  {
    path: 'a',
    component: HomeComponent,
  },
  {
    path:'anfitriao',
    component: AnfritiaoPrimeComponent,
    canActivate: [AuthGuard],
    data: {roles:['AnfitriaoPrime']}
  },
  {
    path:'owner',
    component: OwnerComponent,
    canActivate: [AuthGuard],
    data: {roles:['HomeOwner']}
  },
  {
    path:'tow',
    component: OwnerComponent,
    canActivate: [AuthGuard],
    data: {roles:['AnfitriaoPrime','HomeOwner']}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
