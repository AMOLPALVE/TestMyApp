import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
