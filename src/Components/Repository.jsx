import { FlatList, View, StyleSheet } from 'react-native';
import { useParams  } from 'react-router-native';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';
import Item from './RepositoryItem';
import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  let { id } = useParams();

  const { data,fetchMore,loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;
  
    if (!canFetchMore) {
      return;
    }
    
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  if(data?.repository) {
    const repository = data.repository
    const reviews = repository.reviews.edges.map(edge => edge.node)
      return (
        <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <Item repository={repository} gitButton={true} />}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.5}
      />
      )
  }
  } 

export default Repository