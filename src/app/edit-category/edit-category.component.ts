import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  showMessage(){
    this._snackBar.open('Der Name der Kategorie wurde erfolgreich geändert.','', {
      duration:4000,
      panelClass: ['redNoMatch']
    });
  }

  constructor( private _snackBar: MatSnackBar) { }

}
