import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';



// interface NewTaskData {
//   title: string;
//   summary: string;
//   dueDate: string;
// }
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTaskData>(); // not required if we are using services
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private taskService = inject(TasksService);
  onSubmit() {
    //this.add.emit({ title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDate });
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.cancel.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
