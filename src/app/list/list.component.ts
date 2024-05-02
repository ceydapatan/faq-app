import { Component } from '@angular/core';
import { Project } from '../shared/models/project.model';
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  projects = [new Project('1', 'PMO@RD', 'Marvin Haug(RD / EDA)', 'Transparenz der RD - Projekte schaffen', 'Dokumentation und Analyse der RD - Projekte', '01.09.2023', 'IT'),
  new Project('2', 'Freigabevereinheitlichung', 'Oliver Rayhle (RD/EDA), Marvin Haug (RD/EDA)', 'Vereinheitlichung der Antriebs Freigabe', 'Forschung, Analyse und Implementierung der Freigabeinhalte', '01.11.2022', 'PMO'),
  new Project('3', 'CFSUB', 'Oliver Rayhle (RD/EDA), Marvin Haug (RD/EDA)', 'Organisation des Gremiums CFSUB', 'Für kritische Märkte Steuergeräte wird ein Gremium veranstaltet, um die damit einhergehenden Türstehervorgänge auf E1 genehmigen zu lassen.', '26.03.2021', 'HR')];

  dataSource = new MatTableDataSource<Project>(this.projects);
  displayedColumns: string[] = ['name', 'responsible', 'goal', 'content', 'start','category'];

}
