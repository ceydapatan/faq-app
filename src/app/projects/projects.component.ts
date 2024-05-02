import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Project } from '../shared/models/project.model';
import { InfoService } from '../shared/info.service';
import { Category } from '../shared/models/category.model';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { BackendService } from '../shared/backend.service';
import { Data } from '../shared/data';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projs: Data[] = [];

  options: AnimationOptions = {
    path: '../../assets/no-results.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

 commented = false;
replyButtonActivated = false;
  searchActivated = false;
  panelOpenState = false;
  public role: string = "";
editedCategory = false;
  loggedIn = false;
  hide = true;
  id = 0;
  selectedId = 0 ;
  filterCategory = ''
  projects = [
    //new Project('1', 'Praktikumsantrag auf Englisch?', 'Den Antrag findest du hier ..', 'Transparenz der RD - Projekte schaffen', 'Dokumentation und Analyse der RD - Projekte', '01.09.2023', 'Praktikum'),
    new Project('2', 'Wo finde ich den Praktikumsantrag?', 'Den Antrag findest du hier ..', 'Transparenz der RD - Projekte schaffen', 'Dokumentation und Analyse der RD - Projekte', '01.09.2023', 'Praktikum'),
  new Project('3', 'Welche Dokumente muss ich einreichen, um meine Bachelorarbeit zu beantragen?', 'Beispielantwort 2', 'Vereinheitlichung der Antriebs Freigabe', 'Forschung, Analyse und Implementierung der Freigabeinhalte', '01.11.2022', 'Bachelorarbeit'),
    new Project('4', 'Welche AWE-Fächer muss ich im ersten Semester belegen?', 'Beispielantwort 3', 'Organisation des Gremiums CFSUB', 'Für kritische Märkte Steuergeräte wird ein Gremium veranstaltet, um die damit einhergehenden Türstehervorgänge auf E1 genehmigen zu lassen.', '26.03.2021', 'Kursbelegung')];
  filteredProjects =  [new Project('2', 'Wo finde ich den Praktikumsantrag?', 'Den Antrag findest du hier ..', 'Transparenz der RD - Projekte schaffen', 'Dokumentation und Analyse der RD - Projekte', '01.09.2023', 'Praktikum'),
  new Project('3', 'Welche Dokumente muss ich einreichen, um meine Bachelorarbeit zu beantragen?', 'Beispielantwort 2', 'Vereinheitlichung der Antriebs Freigabe', 'Forschung, Analyse und Implementierung der Freigabeinhalte', '01.11.2022', 'Bachelorarbeit'),
    new Project('4', 'Welche AWE-Fächer muss ich im ersten Semester belegen?', 'Beispielantwort 3', 'Organisation des Gremiums CFSUB', 'Für kritische Märkte Steuergeräte wird ein Gremium veranstaltet, um die damit einhergehenden Türstehervorgänge auf E1 genehmigen zu lassen.', '26.03.2021', 'Kursbelegung')];

  categories = [new Category('Praktikum'), new Category('Bachelorarbeit'), new Category('Kursbelegung'),  new Category('Sonstiges')];
  constructor(private _snackBar: MatSnackBar, private cs: BackendService, private route: ActivatedRoute, private dialog: MatDialog, private infoService : InfoService) { }

  selectOne(n: string) {
   this.selectedId = Number(n);
  }


  logIn(){
    window.localStorage.setItem("loggedIn", "true");
    window.localStorage.setItem("role", this.role);
    window.location.reload();

  }

  openSb(){
    this._snackBar.open('Die Frage wurde erfolgreich einer anderen Kategorie zugeordnet.','', {
      duration:4000,
      panelClass: ['redNoMatch']
    });
  }

  activateCommentSection(b: boolean) {
    if(this.loggedIn){
    this.replyButtonActivated = b;

    if(!b){
this.commented = true;
    }
   
  }
  else{
    this.openPopup()
  }
   }
 
  filter(c: Category) {
    console.log(c.name);
    this.filterCategory = c.name;
    this.filteredProjects = []
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].category == c.name) {
        this.filteredProjects.push(this.projects[i])
      }
    }
    this.searchActivated = true;
  }

  openPopup(){
    this.dialog.open(PopupComponent,{
      width: '70%',
      height: '37%'
    })
  }

  removeFilter(){


    this.filteredProjects = this.projects;
    this.searchActivated = false;
   
  }

  onKey(event: any) {
    this.filteredProjects = []
    this.searchActivated = true;// without type info
    
    console.log(event.target.value)
    let v = event.target.value
    if (v != '') { 
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].name.toLowerCase().includes(v.toLowerCase()) ||
        this.projects[i].responsible.toLowerCase().includes(v.toLowerCase()) ||
        this.projects[i].goal.toLowerCase().includes(v.toLowerCase()) ||
        this.projects[i].content.toLowerCase().includes(v.toLowerCase()) ) {
        this.filteredProjects.push(this.projects[i])
      }
      }
    }
    if (v == '') {
      this.filteredProjects = this.projects;
    }
  }
  ngOnInit() {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('yay ' + this.id)
    this.readAll();

    if(window.localStorage.getItem("loggedIn") == "true"){
      this.loggedIn = true;
    }

    if(window.localStorage.getItem("role") == "dozentin"){
      this.role = 'dozentin';
    }


    this.infoService.cEdited$.subscribe(cEdited => {
      // Handle the data here
      console.log('lelel' + cEdited);
      if (cEdited){
        this.editedCategory = cEdited;
        this.openSb();
      }
    });


  }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Data[]) => {
        console.log(response);
        return this.projs = response;
      },
      error => console.log(error)
    );
  }


}



