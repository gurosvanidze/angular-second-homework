import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  minor = 23;
  minorVersion() {
    this.minor++;
  }
  major = 1;
  majorVersion() {
    this.major++;
    this.minor = 0;
  }
}
