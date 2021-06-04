import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './course/course.component';
import {LoginComponent} from './login/login.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {AngularFireAuthGuard, customClaims, hasCustomClaim, redirectUnauthorizedTo}
    from '@angular/fire/auth-guard';
import {CreateUserComponent} from './create-user/create-user.component';
import {CourseResolver} from "./services/course.resolver";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const adminOnly = () => hasCustomClaim("admin");

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AngularFireAuthGuard],
        data: {
            authGuardPipe: redirectUnauthorizedToLogin
     ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
    {
        path: 'create-course',
        component: CreateCourseComponent,
        canActivate: [AngularFireAuthGuard],
        data: {
            authGuardPipe: adminOnly
     ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
    {
        path: 'create-user',
        component: CreateUserComponent,
        canActivate: [AngularFireAuthGuard],
        data: {
            authGuardPipe: adminOnly
     ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
    {
        path: 'about',
        component: AboutComponent
 ***REMOVED*****REMOVED***
    {
        path: 'login',
        component: LoginComponent
 ***REMOVED*****REMOVED***
    {
        path: 'courses/:courseUrl',
        component: CourseComponent,
        resolve: {
            course: CourseResolver
     ***REMOVED*****REMOVED***
        canActivate: [AngularFireAuthGuard],
        data: {
            authGuardPipe: redirectUnauthorizedToLogin
     ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
    {
        path: '**',
        redirectTo: '/'
 ***REMOVED*****REMOVED***
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
