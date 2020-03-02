import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { EmployeeService } from "src/app/services/employee.service";
import { NgForm } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import {MatDatepicker} from '@angular/material/datepicker'

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddEmpComponent>,
    public service: EmployeeService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetForm()
    this.dropDownRefresh()
  }




  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();

    this.service.formData = { EmployeeID: 0,Department:"",MailID:"",DOJ:null, EmployeeName: "" ,};
  }



  onClose() {
    this.dialogbox.close();
    this.service.filter("Register Click");
  }


  onSubmit(form: NgForm) {
    console.log(form.value)
    this.service.addEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.snackBar.open("Success", "", {
        duration: 2000,
        verticalPosition: "top"
      });
      this.service.filter("Register Click");
      this.dialogbox.close();

    });
  }

public listIems:Array<string>=[];

  dropDownRefresh(){
this.service.getDepDropDownValues().subscribe(data=>{

  data.forEach(element => {
    this.listIems.push(element['DepartmentName']);

  });
})
  }

}
