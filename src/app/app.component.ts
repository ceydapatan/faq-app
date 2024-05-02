import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Category } from './shared/models/category.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project-app';
  admin = false;
  panelOpenState = false;
  loggedIn = false;
  role= '';
  currentPath = '';

  categories = [new Category('IT'), new Category('PMO'), new Category('HR')];


  ngOnInit() {
   this.currentPath = window.location.pathname;
    console.log('das ist der path ' + window.location.pathname);
    if(window.localStorage.getItem("loggedIn") == "true"){
      this.loggedIn = true;
    }

    if(window.localStorage.getItem("role") == "dozentin"){
      this.role = 'dozentin';
    }


  }


  changePath(){
    this.currentPath = window.location.pathname;
  }

  goBack(){
    console.log('reucghwfgdfhdfghsd')
    window.history.go(-1);
  }
  public logout() {
    localStorage.setItem("loggedIn", "false");
    localStorage.removeItem('role');
    window.location.href="/logout"





  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
  ) {
    
}
 

}
