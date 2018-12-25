import React from 'react';
import Navbar from './Navbar';
import SongList from './SongList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SongDetail from './SongDetail';
import ListItem from '@material-ui/core/ListItem';
const App = () => {
    return (
        <div>
    <Paper>    
        <Navbar />
    <Grid item xs={6}>
        <SongList />        
    </Grid>
    <Grid justify="space-between">
        <ListItem>
            <SongDetail />
        </ListItem>
        
    </Grid>

    </Paper > 

    
        </div>
     )
};

export default App;