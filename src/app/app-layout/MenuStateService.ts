import {Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MenuStateService {
  showMenu = signal(true);
  constructor() {
  }
}
