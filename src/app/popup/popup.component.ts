import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InfoService } from '../shared/info.service';



@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {


  setInfo(){
    this.infoService.setData(true);
  }



  editCategory(){
    this.infoService.setcEdited(true);
  }

  constructor(public dialogRef: MatDialogRef<PopupComponent>, private infoService: InfoService) {}


  currentPath='';

  ngOnInit() {
    this.currentPath = window.location.pathname;
  
  }
}
