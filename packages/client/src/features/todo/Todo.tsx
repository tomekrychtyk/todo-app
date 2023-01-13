import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import styles from './Todo.module.css';
import { ITodo } from './interfaces';

const Todo = ({ data }: { data: ITodo }) => {
  useEffect(() => {});

  return <Box className={styles.todoContainer}>{data.title}</Box>;
};

export default Todo;
