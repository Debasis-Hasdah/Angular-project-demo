import { Component, EventEmitter, Input, Output } from '@angular/core';

interface task {
  id: string;
  userId:string;
  title: string;
  summary:string;
  dueDate:string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  selectedUserTasks?: task;
  @Input({required:true})task!: task;

  // @Input({required:true})title?:string;
  // @Input({required:true})summary?:string;
  // @Input({required:true})dueDate?:string;
  @Output() complete = new EventEmitter<string>();
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}


/*import { Task } from '../task.model';
import { Component, Input, input } from '@angular/core';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task !: Task;
}
*/
