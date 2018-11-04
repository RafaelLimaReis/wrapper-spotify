/* to run: babel-node albums.js */
import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');


const spotify = new SpotifyWrapper({
  token: 'BQAusl80HVldc1-l-JZ0K9V-3NAymvzIQWWlFdoSa3odXxPXgjZWG9QWRZaNBVoeYiGTR-EEv-JxCzQ5ZrYhHgF_vIFH1_bdaMMvqOkD20tVukhgiFZypQvk3bXGya7NZfOYV_pBXtcTvMJ_BbLGxWmPVRK3cFIUyAhm53MwgoqDn7GcS737cbZ6ywN4IBhncQNv06WEkykzNW1pBUxWl3xudJiWnylpOxyAI0C2qfCnSrdF7SvT19PK3owdt02dX6a2E6fgKBs5beFZuQECgetJ',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
