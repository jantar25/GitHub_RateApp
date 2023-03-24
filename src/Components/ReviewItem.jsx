import { View, StyleSheet } from 'react-native';
import Text from './Text';

const ReviewItem = ({ review }) => {
  return (
    <View>
        <Text>{review.id}</Text>
    </View>
  )
}

export default ReviewItem