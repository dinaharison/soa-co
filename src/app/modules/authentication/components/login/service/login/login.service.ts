import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authFirebase: AngularFireAuth) {}
  login(user: User): Observable<any> {
    let promise = this.authFirebase.signInWithEmailAndPassword(
      user.email,
      user.password
    );
    return from(promise);
  }
}

type User = {
  email: string;
  password: string;
};
