import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
//import***REMOVED*** as firebaseui from 'firebaseui';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import firebase from 'firebase/app';
import EmailAuthProvider = firebase.auth.EmailAuthProvider;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
***REMOVED***
    ui: firebaseui.auth.AuthUI;

    constructor(private afAuth: AngularFireAuth,
                private router:Router,
                private ngZone: NgZone) {

 ***REMOVED*****REMOVED****/

    ngOnInit() {
    ***REMOVED*****REMOVED***  this.afAuth.app.then((app) => {
         const uiConfig = {
           signInOptions: [
             GoogleAuthProvider.PROVIDER_ID,
             EmailAuthProvider.PROVIDER_ID
           ],
           callbacks: {
             signInSuccessWithAuthResult: this
               .onLoginSuccessful
               .bind(this)
        ***REMOVED*****REMOVED***
      ***REMOVED*****REMOVED***;
          this.ui = new firebaseui.auth.AuthUI(app.auth());
          this.ui.start('#firebaseui-auth-container', uiConfig);
     ***REMOVED*****REMOVED***);*/
 ***REMOVED*****REMOVED***

    ngOnDestroy() {
        //this.ui.delete();
 ***REMOVED*****REMOVED***

    onLoginSuccessful(result) {
***REMOVED***
        console.log("Firebase UI result:", result);

        this.ngZone.run(() => this.router.navigateByUrl('/courses'));
*/
 ***REMOVED*****REMOVED***
}


