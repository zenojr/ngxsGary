import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TutorialState } from '../state/tutorial.state';
import { Tutorial } from '../models/tutorial.model';
import { RemoveTutorial } from '../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  // tutorials$
  // @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]> | any;

  constructor( private store: Store ) { 
    //this.tutorials$ = this.store.select( state => state.tutorials.tutorials );


  }

  delTutorial(name: string){
    this.store.dispatch( new RemoveTutorial(name))
    console.log(this.tutorials$);
  }

  ngOnInit(): void {
  }

}
