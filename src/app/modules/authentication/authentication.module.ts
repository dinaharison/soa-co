import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormValidationPipePipe } from './pipe/form-validation-pipe.pipe';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { environment } from '../../../environments/environment.development';
import { LoginService } from './components/login/service/login/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FormControlComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormValidationPipePipe,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    LoginService,
    ToastrService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
})
export class AuthenticationModule {}
