import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CourseComponent} from "./course/course.component";
import {CourseResolver} from "./services/course.resolver";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

 ***REMOVED*****REMOVED***
    {
        path: "about",
        component: AboutComponent
 ***REMOVED*****REMOVED***
    {
        path: 'courses/:id',
        component: CourseComponent,
        resolve: {
            course: CourseResolver
     ***REMOVED*****REMOVED***
 ***REMOVED*****REMOVED***
    {
        path: "**",
        redirectTo: '/'
 ***REMOVED*****REMOVED***
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
