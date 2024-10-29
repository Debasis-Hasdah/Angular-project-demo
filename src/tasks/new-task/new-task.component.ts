import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';



interface NewTaskData {
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  @Output() cancel= new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  onCancel(){
    this.cancel.emit();
  }
  onSubmit() {
    const taskData: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };
    this.add.emit(taskData);
  }
}
