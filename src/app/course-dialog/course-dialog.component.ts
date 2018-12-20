import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Course} from "../model/course";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import***REMOVED*** as moment from 'moment';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

    form: FormGroup;
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) {titles}:Course ) {

        this.description = titles.description;


        this.form = fb.group({
            description: [titles.description, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [titles.longDescription,Validators.required]
     ***REMOVED*****REMOVED***);

 ***REMOVED*****REMOVED***

    ngOnInit() {

 ***REMOVED*****REMOVED***


    save() {
        this.dialogRef.close(this.form.value);
 ***REMOVED*****REMOVED***

    close() {
        this.dialogRef.close();
 ***REMOVED*****REMOVED***

}
