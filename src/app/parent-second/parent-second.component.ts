import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-second',
  templateUrl: './parent-second.component.html',
  styleUrls: ['./parent-second.component.scss']
})
export class ParentSecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
