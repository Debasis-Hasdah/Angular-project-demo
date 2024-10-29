import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from '../tasks/tasks.component';
import { NgFor } from '@angular/common';

interface User {
  id: string,
  name: string,
  avatar: string,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
  users = DUMMY_USERS;
  selectUser?: User;

selectUserId ?: any;
  onSelectUser(id: String) {
    console.log(id);
    this.selectUserId=id;
    this.selectUser= this.users.find((user) => user.id === id);
  }
}


/* import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { HeaderComponent } from '../header/header.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from '../tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';
import { TaskComponent } from '../tasks/task/task.component';

interface User{
  id: string;
  name: string;
  avatar:string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,HeaderComponent,TasksComponent,TaskComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-userdemo';
  users=DUMMY_USERS;
  selectedUser?:User;
  selectedUserId?:string;
  onSelectUser(id:String) {
    console.log(id);
    //const selectedUser= this.users.find(user)=>user.id==id;
    this.selectedUser=this.users.find((user) => user.id===id);

    //this.selectedname=selectedUser?.name;
  }
} */

