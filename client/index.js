import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import AppoloClient from 'apollo-client';
import {AppoloProvider, ApolloProvider} from 'react-apollo';

import SongList from './components/songList';
import CreateSong from './components/createSong';

const client = new AppoloClient ({});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={SongList} />
      <Route exact path="/song/create" component={CreateSong} />
    </Router>
  </ApolloProvider>
);

ReactDOM.render (<Root />, document.querySelector ('#root'));
