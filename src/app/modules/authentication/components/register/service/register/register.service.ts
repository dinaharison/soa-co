import { Injectable } from '@angular/core';
import { updateProfile } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private authFirebase: AngularFireAuth) {}

  register(user: User): Observable<any> {
    let promise = this.authFirebase
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((response) => {
        if (response.user) {
          return updateProfile(response.user, { displayName: user.username });
        }
        return null;
      });

    return from(promise);
  }
}

type User = {
  email: string;
  username: string;
  password: string;
};
