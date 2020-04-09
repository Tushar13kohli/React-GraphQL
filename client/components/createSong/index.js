import React, {PureComponent} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {Link, hashHistory} from 'react-router';
import {getTitle} from '../songList/query';

class CreateSong extends PureComponent {
  constructor (props) {
    super (props);
    this.state = {
      title: '',
    };
    this.setTitle = this.setTitle.bind (this);
    this.onSubmit = this.onSubmit.bind (this);
  }

  setTitle (event) {
    this.setState ({
      title: event.target.value,
    });
  }

  onSubmit (event) {
    event.preventDefault;
    this.props
      .mutate ({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{query: getTitle}],
        // rerun the query to avoid issues due to caching nature of Apollo.
      })
      .then (() => hashHistory.push ('/'));
  }

  render () {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>CreateSong</h1>
        <form onSubmit={this.onSubmit}>
          <label>Song Title: </label>
          <input
            type="text"
            onChange={this.setTitle}
            value={this.state.title}
          />
          <button>Sumbit</button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
  
`;
export default graphql (mutation) (CreateSong);
