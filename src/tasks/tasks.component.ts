import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";

interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  isAddingTask=false
  @Input({required:true})name?:string;
  @Input({required:true})userId!:string;

  onCompleteTask(id:string){
    this.tasks =this.tasks.filter(task=> task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask=true;
  }
  onCancelAddTask() {
  this.isAddingTask=false;
  }

  onAddTask(taskData : NewTaskData){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    })
    this.isAddingTask=false;
  }

  public get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId === this.userId)
  }
  tasks =[
    {
      id: 't1',
      userId:'u1',
      title: 'CSE Student',
      summary:'learning Web1',
      dueDate:'2022-05-24'
    },
    {
      id: 't2',
      userId:'u1',
      title: 'CSE Student',
      summary:'learning Web2',
      dueDate:'2023-05-24'
    },
    {
      id: 't3',
      userId:'u1',
      title: 'CSE Student',
      summary:'learning Web3',
      dueDate:'2024-05-24'
    },
    {
      id: 't4',
      userId:'u2',
      title: 'CSE Student',
      summary:'learning Web2',
      dueDate:'2023-05-24'
    },
    {
      id: 't5',
      userId:'u2',
      title: 'CSE Student',
      summary:'learning Web3',
      dueDate:'2024-05-24'
    },
    {
      id: 't6',
      userId:'u3',
      title: 'CSE Student',
      summary:'learning Web3',
      dueDate:'2024-08-04'
    },
    {
      id: 't6',
      userId:'u4',
      title: 'CSE Student',
      summary:'learning linux',
      dueDate:'2024-08-04'
    },
    {
      id: 't7',
      userId:'u5',
      title: 'CSE Student',
      summary:'learning machine-learning',
      dueDate:'2024-08-04'
    },
    {
      id: 't8',
      userId:'u6',
      title: 'CSE Student',
      summary:'learning machine-learning',
      dueDate:'2024-08-04'
    }
  ]
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


