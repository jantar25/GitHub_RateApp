import useRepositories from '../Hooks/useRepositories';


import { View } from 'react-native';

import RepositoryListContainer from './RepositoryListContainer';
import PickerItem from './Picker';

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return (
    <View>
      <PickerItem />
      <RepositoryListContainer repositories={repositories} />
    </View>
  )
};

export default RepositoryList;