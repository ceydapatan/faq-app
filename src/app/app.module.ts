import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule} from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { MatSelectModule } from '@angular/material/select';
import { SuccessProjectComponent } from './projects/add-project/success-project/success-project.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ListComponent } from './list/list.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SuccessCategoryComponent } from './success-category/success-category.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import {MatChipsModule} from '@angular/material/chips';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';






export function playerFactory() {
  return player;
}




@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AddProjectComponent,
    SuccessProjectComponent,
    AdminLoginComponent,
    ListComponent,
    LoginComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    LogoutComponent,
    MyQuestionsComponent,
    AddCategoryComponent,
    SuccessCategoryComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    MatListModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatTableModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatDialogModule,
    MatChipsModule
  

  ],
  providers: [ {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: { panelClass: ['mycsssnackbartest'] },
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
