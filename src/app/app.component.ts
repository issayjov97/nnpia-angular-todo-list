import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tasks: String[] = [];
  @ViewChild('task') input!: ElementRef;

  taskControlForm: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);

  ngOnInit(): void {
  }

  addTask(task: String): void {
    console.log(task);
    this.tasks.push(task);
    this.input.nativeElement.value = '';
    console.log(this.tasks);
  }

  removeTask(task: number): void {
    this.tasks.splice(task,1);
    console.log(this.tasks);
  }

}
