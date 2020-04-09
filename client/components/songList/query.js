import gql from 'graphql-tag';

export const getTitle = gql`
  {
    songs {
      id,
      title
    }
  }
`;

export const removeSong = gql`
mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
  `;
