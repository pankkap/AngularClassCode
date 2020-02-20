import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CricketerComponent } from './cricketer/cricketer.component';
import { LikeComponent } from './like/like.component';
import { TDFComponent } from './tdf/tdf.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { StudentListComponent } from './student/student-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CricketerComponent,
    LikeComponent,
    TDFComponent,
    ListEmployeeComponent,
    StudentListComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
