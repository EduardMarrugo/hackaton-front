import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SideBarService {
  public visible: boolean = false;
  constructor() {}

  get getVisible() {
    return this.visible;
  }

  set setVisible(val: boolean) {
    this.visible = val;
  }
}
