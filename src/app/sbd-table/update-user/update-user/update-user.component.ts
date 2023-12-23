import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../entity/user";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(public dialogRef: MatDialogRef<UpdateUserComponent>,
              private http: HttpClient, @Inject(MAT_DIALOG_DATA) public userdata: User) {
      console.log(userdata);
      this.userUpdateForm.patchValue(userdata)
  }

  userUpdateForm : FormGroup = new FormGroup({
    "id": new FormControl(),
    "name": new FormControl(),
    "number": new FormControl()
  });
  updateUser() {
    let user = {
      id: this.userUpdateForm.get('id')?.value,
      name: this.userUpdateForm.get('name')?.value,
      number: this.userUpdateForm.get('number')?.value
    }
    console.log(user);
    this.http.put('http://localhost:8081/user/'+ this.userdata.id, user).subscribe(result => {
      console.log(result);
      this.closeDialog("Update");
    });
  }
  closeDialog(result:string) {

    this.dialogRef.close(result);
  }
}
