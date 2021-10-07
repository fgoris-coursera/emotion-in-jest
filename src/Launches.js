import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

let Launches = () => {
  const { errors, loading, data } = useQuery(GET_LAUNCHES);

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
