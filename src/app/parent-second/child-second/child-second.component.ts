import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.scss']
})
export class ChildSecondComponent implements OnInit {
  @Input()  name!: string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  constructor() { }

  ngOnInit(): void {
  }
  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }
  }
