import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor() {}

  getItems() {
    let items = JSON.parse(window.localStorage.getItem('items'));
    if (items === null) {
      items = [];
    }
    return items;
  }

  addItem(addItem: string) {
    const itemsStored = window.localStorage.getItem('items');
    let items = [];
    if (itemsStored !== null) {
      items = JSON.parse(itemsStored);
    }
    const item: Item = {
      id: items.length + 1,
      name: addItem
    };
    items.push(item);
    window.localStorage.setItem('items', JSON.stringify(items));
  }

  deleteItem(deleteItem) {
    const items = JSON.parse(window.localStorage.getItem('items'));
    console.log(items);
    console.log(deleteItem);
    const saved = items.filter(item => {
      return item.id !== deleteItem.id;
    });
    window.localStorage.setItem('items', JSON.stringify(saved));
  }
}
