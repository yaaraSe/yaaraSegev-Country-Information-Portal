import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  adminName: string = 'yaara';
  url: string =
    'https://translate.google.co.il/?hl=iw&sl=en&tl=iw&op=translate';
  disabled: boolean = false;
  className: string = 'c1';
  buttonClicked() {
    this.className = this.className === 'c1' ? 'c2' : 'c1';
    console.log('button clicked');
  }
  captureValue(event: KeyboardEvent) {
    console.log(event.key);
  }
  onMouseover(event: KeyboardEvent) {
    console.log(event.key);
  }
  onMouseout(event: KeyboardEvent) {
    console.log(event.key);
  }
}
