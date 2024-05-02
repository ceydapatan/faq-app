import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {


  constructor( private dialog: MatDialog) { }

  openPopup(){
    this.dialog.open(PopupComponent,{
      width: '70%',
      height: '40%'
    })
  }
}
