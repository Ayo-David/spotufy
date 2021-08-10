import React, { useEffect, useState } from 'react';
import Login from './screens/Login';
import { getTokenFromUrl } from './config/spotufy';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './screens/Player';
import { useDataLayerValue } from './context/DataLayer';

const spotify = new SpotifyWebApi;

function App() {

  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {

    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;
    //console.log("I have a token 😃 ", token);

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      //setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          _user: user,
        });
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })

      })

      spotify.getPlaylist('addId here').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }
  }, []);
  //console.log("👨", user);

  return (
    <div className="App">
      {
        !token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }

    </div>

  );
}

export default App;
