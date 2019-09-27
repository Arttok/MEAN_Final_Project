//app.module.ts
//Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';

//Compontents
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { UpdateComponent } from './update/update.component';


const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'leagues', component: LeaguesComponent},
  {path: 'update', component: UpdateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    LeaguesComponent,
    UpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
