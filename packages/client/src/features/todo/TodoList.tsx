import { Box } from '@mui/material';
import Todo from './Todo';
import Loader from '../../ui/Loader/Loader';
import { useGetTodosQuery } from '../../app/api/todo';
import styles from './TodoList.module.css';

const TodoList = () => {
  const { data, error, isLoading, isUninitialized } = useGetTodosQuery();

  if (isLoading || isUninitialized) {
    return <Loader />;
  }

  if (error) {
    return null;
  }

  return (
    <Box className={styles.todoListContainer}>
      {data.map((todo) => (
        <Todo key={todo.id} data={todo} />
      ))}
    </Box>
  );
};

export default TodoList;
