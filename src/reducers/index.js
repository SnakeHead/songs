import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'In the Air Tonight', duration: '4:20' },
    { title: 'Hotel California', duration: '3:15'},
    { title: 'Bad to the bone', duration: '2:40'},
    { title: 'Paradise Theater', duration: '4:20' }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});