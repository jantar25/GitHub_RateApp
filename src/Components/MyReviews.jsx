import { StyleSheet,View,FlatList } from 'react-native';

import useMe from '../Hooks/useMe';
import Review from './Review';


const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const { userData,refetch }  = useMe(true)
      // Get the nodes from the edges array
    const onEndReach = () => {
        console.log('You have reached the end of the list');
      };

    const reviewsNodes = userData
    ? userData.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
    data={reviewsNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => (<Review review={item} refetch={refetch} />)}
    keyExtractor={item => item.id}
    onEndReached={onEndReach}
    onEndReachedThreshold={0.5}
  />
  )
}

export default MyReviews