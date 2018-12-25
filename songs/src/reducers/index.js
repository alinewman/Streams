import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {
            title: "Appreciate", duration: '4:05'
        },
        {
            title: "Jukin", duration: '3:09'     
        },
        {
            title: "No Play", duration: '4:55'     
        },
        {
            title: "Runaway Queen", duration: '3:55'     
        }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});