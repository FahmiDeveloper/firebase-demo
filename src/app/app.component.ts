import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // courses: any[];

  
  // constructor(db: AngularFireDatabase){
  //   db.list('/courses').valueChanges().subscribe(courses=>{
  //     this.courses=courses;
  //   });
  // }



 /************** Unsubscribe from subscribe using ngOnDestroy************/
  // courses: any[];

  // subscription: Subscription;
  
  // constructor(db: AngularFireDatabase){
  //   this.subscription = db.list('/courses').valueChanges().subscribe(courses=>{
  //     this.courses=courses;
  //   });
  // }

  // ngOnDestroy(){
  //    this.subscription.unsubscribe();
  // }


}
