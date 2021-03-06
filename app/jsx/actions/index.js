export const togglePlay = () => ({
  type: "TOGGLE_PLAY",
});

export const play = () => ({
  type: "PLAY",
});

export const pause = () => ({
  type: "PAUSE",
});

export const progress = (played, playedSeconds) => ({
  type: "PROGRESS",
  played,
  playedSeconds,
});

export const setDuration = (duration) => ({
  type: "SET_DURATION",
  duration,
});

export const setSongList = (songs) => ({
  type: "SET_SONG_LIST",
  songs: songs,
});

export const changeSong = (media) => ({
  type: "CHANGE_SONG",
  media: media,
});

export const setMovieList = (movies) => ({
  type: "SET_MOVIE_LIST",
  movies: movies,
});

export const changeMovie = (media) => ({
  type: "CHANGE_MOVIE",
  media: media,
});
