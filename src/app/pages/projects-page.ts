import { ChangeDetectionStrategy, Component } from '@angular/core';
import {BasePageComponent} from './BasePageComponent';

@Component({
  selector: 'projects-page',
  imports: [],
  template: `
    <p>
      projects-page works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPage extends BasePageComponent{
  constructor() {
    super();
    this.pageTitle.set("Project Management");
  }

}
