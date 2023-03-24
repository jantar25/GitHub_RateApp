import { useParams  } from 'react-router-native';
import { useQuery } from '@apollo/client';

import Item from './RepositoryItem';
import { GET_REPOSITORY } from '../graphql/queries';


const Repository = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });
  if (data) {
    return <Item repository={data.repository} gitButton={true} />
  } 
}

export default Repository