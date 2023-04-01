import { View } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../Hooks/useRepositories';


const RepositoryList = () => {
  const [selectedFilter, setSelectedFilter] = useState("CREATED_AT");
  const { repositories } = useRepositories(selectedFilter);

  return (
    <View>
      <Picker
      selectedValue={selectedFilter}
      onValueChange={(itemValue, itemIndex) =>
          setSelectedFilter(itemValue)
      }>
        <Picker.Item label="Latest repositories" value="CREATED_AT" />
        <Picker.Item label="Highest rated repositories" value="DESC" />
        <Picker.Item label="Lowest rated repositories" value="ASC" />
      </Picker>
      <RepositoryListContainer repositories={repositories} />
    </View>
  )
};

export default RepositoryList;