import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostList from './PostList';

const App =() =>{
    return (
      <Grid className="container">
       <PostList />
      </Grid>
    );
  }


export default App;
