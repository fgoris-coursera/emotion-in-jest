import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  query launches($count: Int!) {
    launchesPast(limit: $count) {
      id
      mission_name
    }
  }
`;

let Launches = ({ count }) => {
  const { errors, loading, data } = useQuery(GET_LAUNCHES, {
    variables: {
      count,
    },
  });

  return errors ? (
    'Error!'
  ) : loading ? (
    'Loading...'
  ) : (
    <select>
      {data.launchesPast.map(({ id, mission_name }) => (
        <option key={id}>{mission_name}</option>
      ))}
    </select>
  );
};

export default Launches;
