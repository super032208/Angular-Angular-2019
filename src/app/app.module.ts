import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [AppComponent, UserComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
