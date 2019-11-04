import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../../model/dog.model';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: [ './dog.component.scss' ],
})
export class DogComponent implements OnInit {
  @Input() dog: Dog;

  constructor() {
  }

  ngOnInit() {
  }

}
