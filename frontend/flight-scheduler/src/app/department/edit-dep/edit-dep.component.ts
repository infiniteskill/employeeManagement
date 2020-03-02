import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DepartmentService } from "src/app/services/department.service";
import { NgForm } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-edit-dep",
  templateUrl: "./edit-dep.component.html",
  styleUrls: ["./edit-dep.component.css"]
})
export class EditDepComponent implements OnInit {
  constructor(
    public dialogbox: MatDialogRef<EditDepComponent>,
    public service: DepartmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogbox.close();
    this.service.filter("Register Click");
  }
  onSubmit(form: NgForm) {
    this.service.updateDepartment(form.value).subscribe(res => {
      this.snackBar.open("Updated", "", {
        duration: 2000,
        verticalPosition: "top"
      });
      this.service.filter("Register Click");
      this.dialogbox.close();
    });
  }
}
