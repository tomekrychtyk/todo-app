export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

export interface TodosState {
  items: Todo[];
}
