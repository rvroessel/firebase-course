import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {CourseResolver} from "./services/course.resolver";
import {LoginComponent} from './login/login.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
 ***REMOVED*****REMOVED***
    {
        path: "create-course",
        component: CreateCourseComponent
 ***REMOVED*****REMOVED***
    {
        path: "about",
        component: AboutComponent
 ***REMOVED*****REMOVED***
    {
      path: "login",
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
        path: "**",
        redirectTo: '/'
 ***REMOVED*****REMOVED***
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
