import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormValidationPipePipe } from './pipe/form-validation-pipe.pipe';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, FormControlComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormValidationPipePipe,
  ],
})
export class AuthenticationModule {}
