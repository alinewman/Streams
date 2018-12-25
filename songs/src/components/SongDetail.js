import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({song}) => {
    if (!song) {
        return <div>Please Select a Song...</div>
    }
    return <div>Song Title: {song.title} </div>
};

const mapStateToProps = (state) => {
return { song: state.selectedSong }
    };
    

export default connect(mapStateToProps,{

})(SongDetail);