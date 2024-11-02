import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
};
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  name = input.required<string>();
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  //private taskService = new TasksService();
  //we can create object and use this. same way we will use it in different places
  // same can be done through dependency injection
  constructor(public taskService: TasksService) {}
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
  // onAddTask(taskData: NewTaskData) {
  //   this.taskService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }
}
/* import { Component, Input,  } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true})name?:string;
  @Input({required:true})userId!:string;


  public get selectedUserTasks() {
    return this.tasks.filter((task)=>task.userId === this.userId);
  }


tasks=[
  {
    id:'t1',
    userId: 'u1',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced feature of angular',
    dueDate: '20024-9-25'
  },
  {
    id:'t2',
    userId: 'u2',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced feature of angular',
    dueDate: '20024-9-25'
  },
  {
    id:'t3',
    userId: 'u3',
    title: 'Master Angular',
    summary: 'Learn all the basic and advanced feature of angular',
    dueDate: '20024-9-25'
  },

]
} */


