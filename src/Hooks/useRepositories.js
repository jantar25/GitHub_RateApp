import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedFilter,value) => {
  if (selectedFilter === 'CREATED_AT') {
    const { data, error,loading } = useQuery(GET_REPOSITORIES, {
      variables: { orderBy: selectedFilter,searchKeyword:value },
      fetchPolicy: 'cache-and-network',
    }); 
    const repositories = data?.repositories
    return { repositories, loading }; 

  } else {
    const { data, error,loading } = useQuery(GET_REPOSITORIES, {
      variables: { orderBy: "RATING_AVERAGE",orderDirection:selectedFilter,searchKeyword:value },
      fetchPolicy: 'cache-and-network',
    });
    const repositories = data?.repositories
    return { repositories, loading };
    
  }

};

export default useRepositories;