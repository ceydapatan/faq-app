import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { SuccessProjectComponent } from './projects/add-project/success-project/success-project.component'
import { AdminLoginComponent } from './admin-login/admin-login.component'
import { ListComponent } from './list/list.component'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SuccessCategoryComponent } from './success-category/success-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';



const routes: Routes = [
  { path: '', component: ProjectsComponent },

 
  { path: 'add', component: AddProjectComponent },

  { path: 'category-list', component: AdminLoginComponent },

  { path: 'success', component: SuccessProjectComponent },

  { path: 'success-category', component: SuccessCategoryComponent },


  { path: 'edit-category', component: EditCategoryComponent },


  { path: 'delete-category', component: DeleteCategoryComponent },

  { path: 'logout', component: LogoutComponent },

  { path: 'my-questions', component: MyQuestionsComponent },

  { path: 'add-category', component: AddCategoryComponent },

  { path: 'admin', component: AdminLoginComponent },

  { path: 'list', component: ListComponent },

  { path: 'login', component: LoginComponent },

  { path: ':id', component: ProjectsComponent }




];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
