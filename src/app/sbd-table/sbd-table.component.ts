import {Component, OnInit, Inject} from '@angular/core';
import {User} from "../entity/user";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {UpdateUserComponent} from "./update-user/update-user/update-user.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-sbd-table',
  templateUrl: './sbd-table.component.html',
  styleUrls: ['./sbd-table.component.css']
})


export class SbdTableComponent implements OnInit{

  contact: User | undefined;
  users: User[] = [];
  displayedColumns: any[] = ['name', 'number','update', 'delete'];
  userCreateForm : FormGroup = new FormGroup({
    "name": new FormControl(),
    "number": new FormControl()
  });


  ngOnInit() {
    this.initAllUsers();
  }
  constructor(private http: HttpClient, public dialog: MatDialog) {
  }
  initAllUsers() {
    this.http.get<User[]>('http://localhost:8081/user').subscribe(result => {
    console.log(result);
    this.users = result;
   })
  }

  createUser() {
    let user = {
      name: this.userCreateForm.get('name')?.value,
      number: this.userCreateForm.get('number')?.value
    }
    console.log(user);
    this.http.post('http://localhost:8081/user', user).subscribe(result => {
      console.log(result);
      this.initAllUsers();
      this.userCreateForm.reset();
    });
  }


  delUser(id: number | undefined) {
    if(id)
    {
      console.log("del user"+ id);
      this.http.delete('http://localhost:8081/user/'+ id).subscribe(result => {
        console.log(result);
        this.initAllUsers();
      });
    }
  }


  openUpdateDialog(user:any) {
    let dialogRef = this.dialog.open(UpdateUserComponent, {
      height: '400px',
      width: '300px',
      data: {id:user.id, name:user.name, number:user.number}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed: '+ result);
      if(result === 'Update')
      {
        this.initAllUsers()
      }
    });
  }

}
