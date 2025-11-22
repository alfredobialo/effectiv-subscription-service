import { Component } from '@angular/core';

@Component({
  selector: 'counter-label',
  imports: [],
  template: `
    <p>
      counter-label works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class CounterLabel {

}
