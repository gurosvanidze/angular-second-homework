import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    let log: string[] = [];
    for (let logName in changes) {
      let changedLog = changes[logName];
      let to = JSON.stringify(changedLog.currentValue);
      if (changedLog.isFirstChange()) {
        log.push(`Initial value of ${logName} set to ${to}`);
      } else {
        let full = JSON.stringify(changedLog.previousValue);
        log.push(`${logName} changed from ${full} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
