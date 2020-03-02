import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'
import { EmployeeService } from 'src/app/services/employee.service';
import { NgForm } from '@angular/forms';
import {MatButton} from '@angular/material/button'
import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  constructor( public dialogbox: MatDialogRef<EditEmpComponent>,
    public service: EmployeeService,
    private snackBar: MatSnackBar) { }
    ngOnInit(): void {

this.dropDownRefresh()

    }

    onClose() {
      this.dialogbox.close();
      this.service.filter("Register Click");
    }
    onSubmit(form: NgForm) {
      this.service.updateEmployee(form.value).subscribe(res => {
        this.snackBar.open("Updated", "", {
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
