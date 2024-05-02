import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Lcategory } from '../shared/models/lcategory.model';
import { InfoService } from '../shared/info.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  categories = [new Lcategory('Praktikum',16), new Lcategory('Bachelorarbeit',23), new Lcategory('Kursbelegung',11),  new Lcategory('Sonstiges',20)];

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

  constructor( private dialog: MatDialog, private _snackBar: MatSnackBar, private infoService: InfoService) { }


    // ...


  ngOnInit() {

    this.infoService.data$.subscribe(data => {
      // Handle the data here
      console.log('lelel' + data);
      if (data){
        this.categories = [ new Lcategory('Bachelorarbeit',23), new Lcategory('Kursbelegung',11),  new Lcategory('Sonstiges',20)];
      }
    });
  }


}
