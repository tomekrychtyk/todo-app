import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Grid container>
            <Grid item md={8} xs={12}>
              <Box>
                <Typography
                  variant='h6'
                  noWrap
                  component='a'
                  className={styles.appTitle}
                >
                  TODO APP
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: '10px',
                    }}
                  >
                    Powered by Syqe
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
