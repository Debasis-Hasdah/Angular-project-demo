import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../app/dummy-user';

const randomIndex=Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true})name !: string;
  @Input({required :true})id !: string;
  @Input({required :true})avatar !: string;

  @Input({required:true})selected!:boolean;

  @Output()select =new EventEmitter<String>();
men: any;

  onSelectUser(){
    // throw new Error('Method not implemented')
    console.log('user clicked');
    this.select.emit(this.id);
  }

  //selectedUser = DUMMY_USER[0];

  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath(){
    //return 'user/'+ this.avatar;
    return this.avatar;
  }
  // onselectedUser(){
  //   console.log('user has clicked ')
  // }

}

/* import { Component,EventEmitter, input, Input, output, Output, } from '@angular/core';
import { DUMMY_USERS } from '../app/dummy-user';
import { AppComponent } from '../app/app.component';
import { TasksComponent } from '../tasks/tasks.component';

const randomIndex= Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AppComponent,TasksComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
 // @Input({ required: true }) name!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;

   name=input.required<string>()

   @Input ({ required: true }) selected!: boolean;
 // @Output() select = new EventEmitter<String>();
 select = output<string>()
  // men:any;

  onSelectUser() {
    // throw new Error('Method not implemented')
    console.log("User has Clicked");
    this.select.emit(this.id);
    // const randomIndex= Math.floor(Math.random)() *DUMMY_USERS.length;
    //this.selectedUser= DUMMY_USERS[randomIndex];
  }

  selectedUser= DUMMY_USERS[randomIndex];
  get imagePath() {
   // return 'user/' + this.avatar;
    return this.avatar;
  }
} */



