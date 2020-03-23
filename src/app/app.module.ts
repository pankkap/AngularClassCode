import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Service1Service} from './services/service1.service';

const appRoutes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'create', component: CreateStudentComponent },
  { path: 'like', component: LikeComponent },
  { path: 'cricket', component: CricketerComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'link-1', component: TemplateFormComponent },
  { path: 'link-2', component: ReactiveFormComponent },
  { path: 'service', component: CardserviceComponent},
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
import { CardserviceComponent } from './cardservice/cardservice.component';
import { Card1Component } from './cardservice/card1.component';
import { Card2Component } from './cardservice/card2.component';

@NgModule({
  declarations: [
    AppComponent,
    CricketerComponent,
    LikeComponent,
    TDFComponent,
    StudentListComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    CreateStudentComponent,
    CardserviceComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Service1Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
