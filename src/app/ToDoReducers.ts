import { loadItems, errorItem } from './ToDoActions';
import { on, createReducer } from '@ngrx/store';
import { Item } from './models/item';

export interface State {
  toDo: { items: Item[]; error: string };
}

export const initialState: State = {
  toDo: { items: [], error: '' }
};

export const ToDoReducer = createReducer(
  initialState,
  on(loadItems, (state, action) => ({
    ...state,
    items: action.items
  })),
  on(errorItem, (state, action) => ({
    ...state,
    error: action.message
  }))
);

export const selectItems = (state: State) => state.toDo.items;

export const selectError = (state: State) => state.toDo.error;
