import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BasePageComponent} from './BasePageComponent';

@Component({
  selector: 'security-page',
  imports: [],
  template: `
    <p>
      security-page works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityPage extends BasePageComponent{
  constructor() {
    super();
    this.pageTitle.set("App Security / Settings");
  }

}
