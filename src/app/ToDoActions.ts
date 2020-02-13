import { createAction, props } from '@ngrx/store';
import { Item } from './models/item';

export const getItems = createAction('[to-do] get items');

export const loadItems = createAction(
  '[to-do] load items',
  props<{ items: Item[] }>()
);

export const addItem = createAction(
  '[to-do] add item',
  props<{ name: string }>()
);

export const deleteItem = createAction(
  '[to-do] delete item',
  props<{ item: Item }>()
);

export const errorItem = createAction(
  '[to-do] error item',
  props<{ message: string }>()
);
