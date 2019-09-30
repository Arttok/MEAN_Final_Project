//app.module.ts
//Core Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule }  from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Compontents
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { EditComponent } from './edit/edit.component';

//Services
import { AuthService } from './providers/auth.service';
import { LeagueService } from './providers/leagues.service';
import { RegionService } from './providers/regions.service';
import { UserService } from './providers/user.service';
import { TeamService } from './providers/teams.service';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'leagues', component: LeaguesComponent},
  {path: 'edit', component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    LeaguesComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    LeagueService,
    RegionService,
    UserService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
