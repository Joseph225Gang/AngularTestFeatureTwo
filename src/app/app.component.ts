import { Component, forwardRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppComponent),
    multi: true
}]
})
export class AppComponent {
  title = 'angular-test-feature';
  observableData1 = '';
  observableData2 = '';
  subjectData1 = '';
  subjectData2 = '';
  bioSection = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl('')
  });
  public score: { [key: string]: string; } = {}; 
  public num: {[key: number]: number; } = {};

  getObserverData(){
    this.score['key1'] = "1";
    let myObservable = new Observable<any>(observer => {
      //observer.next("Please subscribe to WebTechTalk Observer")
      observer.next(Math.floor(Math.random() * 99 + 1));
    })
    myObservable.subscribe(data => {
      this.observableData1 = data;
    })
    myObservable.subscribe(data => {
      this.observableData2 = data;
    })
    console.log(this.score);
    console.log(window.opener);
  }

  getSubjectData(){
    this.score['key2'] = "2";
    let mySubject = new Subject();
    mySubject.subscribe((data) => {
      this.subjectData1 = data + "";
    })
    mySubject.subscribe((data) => {
      this.subjectData2 = data + "";
    })
    //mySubject.next("Please subscribe to WebTechTalk Subject")
    mySubject.next(Math.floor(Math.random() * 99 + 1));
    console.log(this.score);
    console.log(window.opener);
  }

  callingFunction() {
    console.log(this.bioSection.value);
   }
}
