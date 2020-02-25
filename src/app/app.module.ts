import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'create', component: CreateStudentComponent },
  { path: 'like', component: LikeComponent },
  { path: 'cricket', component: CricketerComponent },
  { path: '', component: StudentListComponent },
  { path: 'link-1', component: TemplateFormComponent}
];

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketerComponent } from './cricketer/cricketer.component';
import { LikeComponent } from './like/like.component';
import { TDFComponent } from './tdf/tdf.component';

import { StudentListComponent } from './student/student-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CreateStudentComponent } from './student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    CricketerComponent,
    LikeComponent,
    TDFComponent,
    StudentListComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
