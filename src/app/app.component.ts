import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item } from './models/item';
import { Store, select } from '@ngrx/store';
import { getItems, addItem, deleteItem } from './ToDoActions';
import { Observable } from 'rxjs';
import { selectItems, selectError } from './ToDoReducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toDoForm = new FormGroup({
    name: new FormControl('')
  });
  items$: Observable<any>;
  error$: Observable<any>;

  constructor(private store: Store<{ toDo: { items: Item[] } }>) {
    this.store.dispatch(getItems());
    this.items$ = this.store.pipe(select(selectItems));
    this.error$ = this.store.pipe(select(selectError));
  }

  onSubmit() {
    this.store.dispatch(addItem({ name: this.toDoForm.controls.name.value }));
    this.toDoForm.controls.name.reset();
  }

  deleteItem(deleted: Item) {
    this.store.dispatch(deleteItem({ item: deleted }));
  }
}
