import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns'

import theme from '../theme';
import Text from './Text';

const ReviewItem = ({ review }) => {
    var date = format(new Date(review.createdAt), 'dd.MM.yyyy')
    const styles = StyleSheet.create({
        container: {
          padding:20,  
          backgroundColor:'#fff'
        },
        image: {
          width: 50,
          height: 50,
          borderRadius:5
        },
        topCard: {
            display:'flex',
            flexDirection:'row'
        },
        bottomCard: {
            marginVertical:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:30
        },
        info: {
            paddingHorizontal:20,
            paddingVertical:5,
        },
        description: {
            paddingVertical:3,
        },
        language: {
            backgroundColor:theme.colors.primary,
            color:'#fff',
            alignSelf: 'flex-start',
            padding:5,
            borderRadius:5,
        },
        openGithub: {
            backgroundColor:theme.colors.primary,
            color:'#fff',
            padding:10,
            borderRadius:5,
            textAlign:'center'
        },
        stats: {
            display:'flex',
            alignItems:'center'
        }
      });
  return (
    <View style={styles.container}>
        <Text>{review.rating}</Text>
        <Text>{review.user.username}</Text>
        <Text>{date}</Text>
        <Text>{review.text}</Text>
    </View>
  )
}

export default ReviewItem