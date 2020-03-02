import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatTableDataSource } from "@angular/material/table";
import { Department } from "src/app/models/department-model";
import { DepartmentService } from "src/app/services/department.service";
import { MatSort } from "@angular/material/sort";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ViewChild } from "@angular/core/";
import { MatButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogConfig } from "@angular/material/dialog";
import { AddDepComponent } from "src/app/department/add-dep/add-dep.component";
import { EditDepComponent } from "../edit-dep/edit-dep.component";

@Component({
  selector: "app-show-dep",
  templateUrl: "./show-dep.component.html",
  styleUrls: ["./show-dep.component.css"]
})
export class ShowDepComponent implements OnInit {
  constructor(
    private service: DepartmentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.service.listen().subscribe((m: any) => {
      this.refreshDepList();
    });
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ["Options", "DepartmentID", "DepartmentName"];
  @ViewChild(MatSort,null) sort: MatSort;

  refreshDepList() {
    // var dummyData=[{DepartmentID:1,DepartmentName:"IT"},
    // {DepartmentID:2,DepartmentName:"Mech"},
    // {DepartmentID:3,DepartmentName:"Civil"},
    // {DepartmentID:4,DepartmentName:"ENTC"}]

    this.service.getDepList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
    });
  }

  applyFilter(filterVlaue: string) {
    this.listData.filter = filterVlaue.trim().toLocaleLowerCase();
  }
  onEdit(dep: Department) {
    this.service.formData = dep;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditDepComponent, dialogConfig);
  }
  onDelete(id: number) {
    console.log(id);
    if (confirm("Are you sure to delete?")) {
      this.service.deleteDepartment(id).subscribe(res => {
        this.refreshDepList();
        this.snackBar.open("Success", "", {
          duration: 2000,
          verticalPosition: "top"
        });
      });
    }
  }

  onAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddDepComponent, dialogConfig);
  }

  ngOnInit(): void {
    this.refreshDepList();
  }
}
