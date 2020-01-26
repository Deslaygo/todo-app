import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { MenuReducer } from './menu-reducer';
import { todoReducer } from './todo-reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  menuState: MenuReducer,
  todos: todoReducer

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
