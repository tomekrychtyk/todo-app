import { createTheme, ThemeProvider, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import TodoList from './features/todo/TodoList';
import Nav from './ui/Nav/Nav';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Grid
        container
        sx={{
          padding: '16px',
        }}
      >
        <Grid item md={2} xs={12} />
        <Grid item md={8} xs={12}>
          <TodoList />
        </Grid>
        <Grid item md={2} xs={12} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
