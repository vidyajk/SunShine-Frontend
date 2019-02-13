
import * as forms   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { loginComponent } from './Registration/LoginPage/login.component';
import { RegistrationServices } from './Registration/registration.service';
import { RegistrationComponent } from './Registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './HomePage/homePage.component';
import { FormsModule } from '@angular/forms';
import { loginServices } from './Registration/LoginPage/login.service';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    RegistrationComponent,
    HomePageComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
  
  
    RouterModule.forRoot([
      {path: 'login', component:loginComponent}
      ,{path: 'registration', component:RegistrationComponent}
    ])
  ],
  providers: [RegistrationServices, HttpClientModule,loginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
