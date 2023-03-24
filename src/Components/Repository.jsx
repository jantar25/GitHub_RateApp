import { FlatList, View, StyleSheet } from 'react-native';
import { useParams  } from 'react-router-native';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';
import Item from './RepositoryItem';
import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const Repository = () => {
  let { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  if(data) {
    const repository = data.repository
    const reviews = repository.reviews.edges.map(edge => edge.node)
      return (
        <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <Item repository={repository} gitButton={true} />}
      />
      )
  }
  } 

export default Repository