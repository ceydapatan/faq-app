import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';


@Component({
  selector: 'app-success-category',
  templateUrl: './success-category.component.html',
  styleUrls: ['./success-category.component.css']
})
export class SuccessCategoryComponent {


  options: AnimationOptions = {
    path: '../../../../assets/success.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
