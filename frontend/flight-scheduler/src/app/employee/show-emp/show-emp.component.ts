import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatTableDataSource } from "@angular/material/table";
import { Employee } from "src/app/models/employee-model";
import { EmployeeService } from "src/app/services/employee.service";
import { MatSort } from "@angular/material/sort";
import {MatSortModule} from '@angular/material/sort'
import {MatSnackBar} from '@angular/material/snack-bar'
import { ViewChild } from "@angular/core/";
import {MatButton} from '@angular/material/button'
import {MatDialog} from '@angular/material/dialog'
import {MatDialogConfig} from '@angular/material/dialog'
import {AddEmpComponent} from 'src/app/employee/add-emp/add-emp.component'
import { EditEmpComponent } from '../edit-emp/edit-emp.component';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service: EmployeeService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.service.listen().subscribe((m: any) => {
        this.refreshEmpList();
      });

    }




    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ["Options", "EmployeeID", "EmployeeName","Department","MailID","DOJ"];
    @ViewChild(MatSort,null) sort: MatSort;


  ngOnInit(): void {
    this.refreshEmpList();
  }




  refreshEmpList() {
    // var data=[{EmployeeID:1,EmployeeName:"Ramesh",Department:"IT",MailID:"ramesh@nowhere",DOJ:"2020"}]


    this.service.getEmpList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }




  onDelete(id: number) {
    console.log(id);
    if (confirm("Are you sure to delete?")) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.refreshEmpList();
        this.snackBar.open("Success", "", {
          duration: 2000,
          verticalPosition: "top"
        });
      });
    }
  }



  applyFilter(filterVlaue: string) {
    this.listData.filter = filterVlaue.trim().toLocaleLowerCase();
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddEmpComponent, dialogConfig);
  }



  onEdit(dep: Employee) {
    this.service.formData = dep;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditEmpComponent, dialogConfig);
  }

}
