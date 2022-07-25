import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggerService } from './app.service';

@Component({
  selector: 'hello',
  template: `
  <h3>Hello {{name}}!</h3>
  <button (click)="notify.emit()">Notify!!</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  constructor(private logger: LoggerService) {}
  @Input() name: string;
  @Output() notify = new EventEmitter();
  ngOnInit() {
    this.logger.log('ngOnInit');
  }
}
