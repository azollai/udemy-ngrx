import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCyIVg41tJrf5ZRFl6-c6xTQVKi_2CBw3E',
      authDomain: 'udemy-ngrx.firebaseio.com/'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
