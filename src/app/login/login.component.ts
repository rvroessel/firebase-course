import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import***REMOVED*** as firebaseui from 'firebaseui';
import***REMOVED*** as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    ui: firebaseui.auth.AuthUI;

    constructor(private afAuth: AngularFireAuth,
                private router:Router,
                private ngZone: NgZone) {

 ***REMOVED*****REMOVED***

    ngOnInit() {

        const uiConfig = {
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {

                signInSuccessWithAuthResult: this
                    .onLoginSuccessful
                    .bind(this)
         ***REMOVED*****REMOVED***

     ***REMOVED*****REMOVED***;

        this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);

        this.ui.start('#firebaseui-auth-container', uiConfig);


 ***REMOVED*****REMOVED***

    ngOnDestroy() {
        this.ui.delete();
 ***REMOVED*****REMOVED***

    onLoginSuccessful(result) {

        console.log("Firebase UI result:", result);

        this.ngZone.run(() => this.router.navigateByUrl('/courses'));

 ***REMOVED*****REMOVED***
}


