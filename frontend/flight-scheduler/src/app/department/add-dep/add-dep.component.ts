import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { DepartmentService } from "src/app/services/department.service";
import { NgForm } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-add-dep",
  templateUrl: "./add-dep.component.html",
  styleUrls: ["./add-dep.component.css"]
})
export class AddDepComponent implements OnInit {
  constructor(
    public dialogbox: MatDialogRef<AddDepComponent>,
    public service: DepartmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();

    this.service.formData = { DepartmentID: 0, DepartmentName: "" };
  }

  onClose() {
    this.dialogbox.close();
    this.service.filter("Register Click");
  }

  onSubmit(form: NgForm) {
    this.service.addDepartment(form.value).subscribe(res => {
      this.resetForm(form);
      this.snackBar.open("Success", "", {
        duration: 2000,
        verticalPosition: "top"
      });
      this.service.filter("Register Click");
      this.dialogbox.close();

    });
  }
}
