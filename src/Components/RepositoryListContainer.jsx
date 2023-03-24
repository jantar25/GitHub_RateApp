import { FlatList, View, StyleSheet,Pressable } from 'react-native';
import { useNavigate } from "react-router-native";

import Item from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
      // Get the nodes from the edges array
  const repositoryNodes = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => (
        <Pressable 
          onPress={()=>navigate(`/${item.id}`)}>
            <Item repository={item} />
        </Pressable>)}
      keyExtractor={item => item.id}
    />
  )
}

export default RepositoryListContainer