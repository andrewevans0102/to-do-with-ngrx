import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from './models/item';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toDoForm = new FormGroup({
    name: new FormControl('')
  });
  items: Item[] = [];

  constructor(private toDoService: ToDoService) {
    this.items = this.toDoService.getItems();
  }

  onSubmit() {
    this.toDoService.addItem(this.toDoForm.controls.name.value);
    this.items = this.toDoService.getItems();
    this.toDoForm.controls.name.reset();
  }

  addItem(name: string) {
    this.toDoService.addItem(name);
  }

  deleteItem(item: Item) {
    this.toDoService.deleteItem(item);
    this.items = this.toDoService.getItems();
  }
}
