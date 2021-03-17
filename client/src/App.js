import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/postsAction';
import useStyles from './appStyles';
import Form from './Components/Form/Form.js';
import Posts from './Components/Posts/Posts';
import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} varient='h2' align='center'>
          Memories{' '}
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </AppBar>{' '}
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            align-items='stretch'
            spacing={7}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />{' '}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />{' '}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
