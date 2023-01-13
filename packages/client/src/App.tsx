import { useGetTodosQuery } from './app/api/todo';

import Todo from './features/todo/Todo';

function App() {
  const apiUrl = import.meta.env;
  console.log('api', apiUrl);
  const { data, error, isLoading } = useGetTodosQuery(null);
  console.log(data);

  return (
    <div>
      <h1>TODO App</h1>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
}

export default App;
