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
    const reviewsNodes = userData
    ? userData.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
    data={reviewsNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => (<Review review={item} refetch={refetch} />)}
    keyExtractor={item => item.id}
  />
  )
}

export default MyReviews