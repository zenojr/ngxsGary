import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../actions/tutorial.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  addTutorial(name: any, url: any ): void {
    this.store.dispatch( new AddTutorial({ name: name, url: url }) )
  }

  ngOnInit(): void {
  }

}
