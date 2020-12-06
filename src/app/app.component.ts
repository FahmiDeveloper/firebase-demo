import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


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



/************** read one object from firebase************/
  // course$;
  // author$;
  
  // constructor(db: AngularFireDatabase){
  //   this.course$ = db.object('/courses/1').valueChanges();
  //   this.author$ = db.object('/authors/1').valueChanges();
  // }

  /************** using as keyword************/
  // author$;
  
  // constructor(db: AngularFireDatabase){
  //   this.author$ = db.object('/authors/1').valueChanges();
  // }






 /************** add an object to firebase************/
  courses$;
  complewobject: boolean;

  constructor(private db: AngularFireDatabase){
    this.courses$ = db.list('/courses').valueChanges();
  }

   /************** add simple key object ************/
  // add(course:HTMLInputElement){
  //   this.db.list('/courses').push(course.value);
  //   course.value = '';
  // }

   /************** add complex object ************/
  //  add(course:HTMLInputElement){
  //   this.db.list('/courses').push({
  //     name: course.value,
  //     price: 150,
  //     isLive: true,
  //     sections: [
  //       {title: 'components'},
  //       {title: 'directives'},
  //       {title: 'templates'}
  //     ]
  //   });
  //   course.value = '';
  // }


     /************** update object ************/
  // update(course){
    // this.db.object('/courses/' + course.key).set(course.value + 'UPDATED');//update using simple value

  
  // update using compolex object
  //   this.db.object('/courses/' + course.key)
  //   .set({
  //     title: course.value + 'UPDATED',
  //     price:150
  //   });
  // }

   /************** delete object ************/
  delete(course){
    this.db.object('/courses/' + course.key).remove();
  }
}
