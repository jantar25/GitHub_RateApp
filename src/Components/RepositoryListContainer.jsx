import React from 'react';
import { FlatList, View, StyleSheet,Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';

import Item from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;
    return (
      <View>
      <Searchbar
        placeholder="Search"
        onChangeText={props.onChangeSearch}
        value={props.searchQuery}
        style={{
          borderRadius: 4,
          margin:16
        }}
      />
      <Picker
        selectedValue={props.selectedFilter}
        onValueChange={(itemValue, itemIndex) =>
          props.handleCallBack(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="CREATED_AT" />
        <Picker.Item label="Highest rated repositories" value="DESC" />
        <Picker.Item label="Lowest rated repositories" value="ASC" />
      </Picker>
    </View>
    );
  };


  render() {;
    return (
      <FlatList
        data={this.props.repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => (<Item repository={item} />)}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default RepositoryListContainer