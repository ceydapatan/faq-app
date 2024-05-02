import { Component } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent {

  categories: Category[] = [
    {value: 'praktikum-0', viewValue: 'Praktikum'},
    {value: 'bachelorarbeit-1', viewValue: 'Bachelorarbeit'},
    {value: 'kursbelegung-2', viewValue: 'Kursbelegung'},
  ];

}
