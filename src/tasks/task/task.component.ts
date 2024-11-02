import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from "../../card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  //@Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
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
