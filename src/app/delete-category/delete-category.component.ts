import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {

  showMessage(){
    this._snackBar.open('Die Kategorie wurde erfolgreich gelöscht.','', {
      duration:4000,
      panelClass: ['redNoMatch']
    });
  }

  openPopup(){
    this.dialog.open(PopupComponent,{
      width: '70%',
      height: '30%'
    })
  }

  constructor( private dialog: MatDialog, private _snackBar: MatSnackBar) { }
}
