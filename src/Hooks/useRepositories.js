import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedFilter,value) => {

  if (selectedFilter === 'CREATED_AT') {
    const { data,fetchMore, error,loading,...result } = useQuery(GET_REPOSITORIES, {
      variables: { orderBy: selectedFilter,searchKeyword:value},
      fetchPolicy: 'cache-and-network',
    }); 

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }
      
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          orderBy: selectedFilter,searchKeyword:value
        },
      });
    };

    return { 
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    }; 

  } else {
    const { data,fetchMore, error,loading,...result } = useQuery(GET_REPOSITORIES, {
      variables: { orderBy: "RATING_AVERAGE",orderDirection:selectedFilter,searchKeyword:value },
      fetchPolicy: 'cache-and-network',
    });

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }
      
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          orderBy: "RATING_AVERAGE",orderDirection:selectedFilter,searchKeyword:value
        },
      });
    };

    return { 
      repositories: data?.repositories,
      fetchMore: handleFetchMore,
      loading,
      ...result,
    };
    
  }

};

export default useRepositories;