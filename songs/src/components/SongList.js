import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { selectSong } from '../actions';

class SongList extends Component {
renderlist(){
    return this.props.songs.map((song) => {
        return (
            <Paper key={song.title}>
            <List>
            <Grid >
                <div>
                <Grid item xs={3}>
                    <ListItemSecondaryAction> 
                        <Button
                        onClick ={() => this.props.selectSong(song)}
                         className="">Select</Button>
                    </ListItemSecondaryAction>
            </Grid>    
                </div> 
                <div className="content">
                <ListItemText primary= {song.title} />
                </div>        
            </Grid>
            </List>
            </Paper>
        );
    });
}

    render (){
       return <div>{this.renderlist()}</div>
    }
}

const mapStateToProps = (state) => {
console.log(state);
    return {songs: state.songs};
}

export default connect(mapStateToProps, {
    selectSong
})(SongList);