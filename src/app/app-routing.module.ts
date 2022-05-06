import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path: 'about/:value/:value2', component:AboutComponent},
  { path: 'about/:value', component:AboutComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'user', canActivateChild:[AuthGuard], component:UserComponent, children: [
    { path: ':id', component:UserEditComponent, canDeactivate:[AuthGuard]}
  ]},
  { path: 'not-found', component:PageNotFoundComponent},
  { path: '**', redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
