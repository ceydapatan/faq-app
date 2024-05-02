import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';

@Component({
  selector: 'app-success-project',
  templateUrl: './success-project.component.html',
  styleUrls: ['./success-project.component.css']
})
export class SuccessProjectComponent {

  options: AnimationOptions = {
    path: '../../../../assets/success.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
