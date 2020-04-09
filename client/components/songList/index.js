import React from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import {getTitle, removeSong} from './query';

const SongList = ({data, mutate}) => {
  function onClick (id) {
    console.log ('id', id);
    mutate ({
      variables: {id},
    }).then (() => data.refetch ());
  }

  const renderSongs = songs =>
    songs.map (song => (
      <li key={song.title}>
        {song.title}
        <div style={{display: 'inline', cursor:'pointer'}} onClick={() => onClick (song.id)}>
          <i className="material-icons">delete</i>
        </div>
      </li>
    ));

  return (
    <div>
      <ul className="collection">
        {data.songs && renderSongs (data.songs)}
      </ul>
      <Link to="/song/create" className="btn-floating btn-large red light">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql (removeSong) (graphql (getTitle) (SongList));
