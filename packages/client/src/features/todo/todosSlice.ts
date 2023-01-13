import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo, TodosState } from './interfaces';

const initialState: TodosState = {
  items: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    receivedTodos(state, action: PayloadAction<Todo[]>) {
      state.items = action.payload;
    },
  },
});

export const { receivedTodos } = todosSlice.actions;
export default todosSlice.reducer;
