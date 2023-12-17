import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './course/course.component';
import {LoginComponent} from './login/login.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';
import {CreateUserComponent} from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
***REMOVED***
  {
    path: 'create-course',
    component: CreateCourseComponent

***REMOVED***
  {
    path: 'create-user',
    component: CreateUserComponent

***REMOVED***
  {
    path: 'about',
    component: AboutComponent
***REMOVED***
  {
    path: 'login',
    component: LoginComponent
***REMOVED***
  {
    path: 'courses/:courseUrl',
    component: CourseComponent
***REMOVED***
  {
    path: '**',
    redirectTo: '/'
***REMOVED***
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
