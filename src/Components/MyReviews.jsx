import { StyleSheet,Text,View,FlatList } from 'react-native';
import useMe from '../Hooks/useMe';


const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });
  
const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const userData  = useMe(true)
      // Get the nodes from the edges array
    const reviewsNodes = userData
    ? userData.reviews.edges.map(edge => edge.node)
    : [];

    const styles = StyleSheet.create({
        color: {
          fontSize:20,
          paddingHorizontal:10,
          paddingVertical:20
        }
      });
  return (
    <FlatList
    data={reviewsNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({item}) => (<Text>{item.id}</Text>)}
    keyExtractor={item => item.id}
  />
  )
}

export default MyReviews