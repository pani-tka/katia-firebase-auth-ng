import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase-config';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'katia-firebase-auth-ng';
  user = null;
  error = null;

  public async signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider)

      this.user = result.user;
    } catch (error) {
      this.error = error.message;
    }
  }
}
