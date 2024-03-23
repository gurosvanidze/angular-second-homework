import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-second',
  templateUrl: './parent-second.component.html',
  styleUrls: ['./parent-second.component.scss']
})
export class ParentSecondComponent implements OnInit {
  agreed: number = 0;
  disagreed: number = 0;
  voters = ['Mr. IQ', 'Celeritas', 'Bombasto'];
  constructor() { }

  ngOnInit(): void {
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
