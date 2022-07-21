import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from './app.service';

@Component({
  selector: 'hello',
  template: `
  <h3>Hello {{name}}!</h3>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  constructor(private logger: LoggerService) {}
  @Input() name: string;
  ngOnInit() {
    this.logger.log('ngOnInit');
  }
}
