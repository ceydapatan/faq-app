import { Component } from '@angular/core';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css'],
})
export class MyQuestionsComponent {
  projects = [

    new Project('4', 'Welche AWE-Fächer muss ich im ersten Semester belegen?', 'Beispielantwort 3', '', '', '26.03.2021', 'Kursbelegung')];
  

}
