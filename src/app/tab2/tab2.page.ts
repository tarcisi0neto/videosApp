import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isRotate: boolean;
  isClicked: boolean;
  constructor() {}

  rotateFunc() {
    this.isRotate = true;
    this.isClicked = true;
  }

}
