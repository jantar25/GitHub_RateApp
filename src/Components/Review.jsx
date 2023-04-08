import { StyleSheet,View } from 'react-native';
import { format } from 'date-fns'

import theme from '../theme';
import Text from './Text';

const Review = ({review}) => {
    let date = format(new Date(review.createdAt), 'dd.MM.yyyy')
    const styles = StyleSheet.create({
        container: {  
            backgroundColor:'#fff',
            padding:20,
            display:'flex',
            flexDirection:'row',
          },
          rating: {
            flex:1,
          },
          ratingContainer: {
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              width: 50,
              height: 50,
              borderWidth:2,
              borderColor:theme.colors.primary,
              borderRadius:25,
          },
          info: {
              flex:6,
              paddingLeft:20,
              paddingVertical:5,
          },
          text: {
              alignSelf: 'center',
          },
      });
  return (
        <View style={styles.container}>
            <View style={styles.rating}>
                <View style={styles.ratingContainer}>
                    <Text 
                    color='primary'
                    fontSize='subheading'
                    fontWeight='bold'
                    >{review.rating}</Text>
                </View>
            </View>
            <View style={styles.info}>
                <Text
                fontWeight='bold'
                fontSize='subheading'
                >{review.repository.fullName}</Text>
                <Text color='textSecondary'>{date}</Text>
                <Text style={styles.text}>{review.text}</Text>
            </View>
        </View>
    )
}

export default Review