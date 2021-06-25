import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
    selector: 'create-user',
    templateUrl: 'create-user.component.html',
    styleUrls: ['create-user.component.css']
})
export class CreateUserComponent {

    form = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        admin: [false]
 ***REMOVED*****REMOVED***);

    constructor(
        private fb: FormBuilder,
        private http: HttpClient) {

 ***REMOVED*****REMOVED***

    onCreateUser() {

        const user = this.form.value;

        console.log(user);

 ***REMOVED*****REMOVED***

}
