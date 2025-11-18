import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class ProjectsPage {

}
