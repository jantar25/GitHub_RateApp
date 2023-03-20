import { FlatList, View, StyleSheet } from 'react-native';
import Item from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
      // Get the nodes from the edges array
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <Item repository={item} />}
      keyExtractor={item => item.id}
      // other props
    />
  )
}

export default RepositoryListContainer