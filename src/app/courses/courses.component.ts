import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$;// in convention to indicate that is an observable
  isOut: boolean=true;
  subscribe:Subscription;
  isUnsubscribe:boolean;
  
  constructor(db: AngularFireDatabase, private router:Router){
    this.courses$ = db.list('/courses').valueChanges();
    this.subscribe= db.list('/courses').valueChanges().subscribe();
  }

  ngOnInit(){
    this.isOut=true;
  }

  checkIfUnsubscribe(){
    this.subscribe.unsubscribe();
    return true
  }

  Out(){
    this.isUnsubscribe=this.checkIfUnsubscribe()?true:false
    if(this.isUnsubscribe){console.log('unsubscribe succesfully')}
    else{console.log('unsubscribe failed')}
    this.isOut=false;
    this.router.navigate(['/home']);
  }

}
