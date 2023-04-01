import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const PickerItem = () => {
  const [selectedFilter, setSelectedFilter] = useState();
  console.log(selectedFilter)
  return (
    <Picker
    selectedValue={selectedFilter}
    onValueChange={(itemValue, itemIndex) =>
        setSelectedFilter(itemValue)
    }>
        <Picker.Item label="Latest repositories" value="latest-repositories" />
        <Picker.Item label="Highest rated repositories" value="highest-rated-repositories" />
        <Picker.Item label="Lowest rated repositories" value="lowest-rated-repositories" />
    </Picker>
  )
}

export default PickerItem