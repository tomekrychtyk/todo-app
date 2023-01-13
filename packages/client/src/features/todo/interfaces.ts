export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

export interface ITodosState {
  items: ITodo[];
}
