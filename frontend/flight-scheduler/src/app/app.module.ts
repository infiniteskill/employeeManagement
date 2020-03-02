import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';

import {DepartmentService} from './services/department.service'
import {EmployeeService} from './services/employee.service'

import { MatTableModule } from "@angular/material/table";

import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'

import {MatSortModule} from '@angular/material/sort'
import {MatDialogModule} from '@angular/material/dialog'

import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatNativeDateModule } from '@angular/material/core';

// import { MatTableDataSource } from "@angular/material/table";
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    EditEmpComponent,
    AddEmpComponent,
    DepartmentComponent,
    AddDepComponent,
    ShowDepComponent,
    EditDepComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
    // MatTableDataSource

  ],
  providers: [DepartmentService,EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[AddDepComponent,EditDepComponent,AddEmpComponent,EditEmpComponent]
})
export class AppModule { }
