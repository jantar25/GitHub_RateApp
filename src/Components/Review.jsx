import { StyleSheet,View,Pressable,Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { format } from 'date-fns'
import { useMutation } from '@apollo/client';

import theme from '../theme';
import Text from './Text';
import { DELETE_REVIEW } from '../graphql/mutation';

const Review = ({review,refetch}) => {
    let date = format(new Date(review.createdAt), 'dd.MM.yyyy');
    const [deleteReview] = useMutation(DELETE_REVIEW, {
        onError: (error) => {
            const errorCode = error.graphQLErrors[0].message
            console.log(errorCode)
        }
      });

    const handleDelete = (id) => {
        Alert.alert('Delete Review', 'Are you sure you want to delete this review?', [
            {
              text: 'CANCEL',
              onPress: () => console.log('Cancelled'),
            },
            {text: 'DELETE', onPress: async () => {
                try {
                    await deleteReview({ variables: { deleteReviewId: id }})
                    refetch()
                  } catch (e) {
                    console.log(e);
                  }
                }
            },
        ]);
    }
    
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
          btnsContainer: {
            display:'flex',
            flexDirection:'row',
            justifyContent: 'space-between',
            backgroundColor:'#fff',
            paddingHorizontal:20,
            paddingBottom:20,
          },
          deleteRepository: {
            backgroundColor:theme.colors.error,
            color:'#fff',
            paddingHorizontal:30,
            paddingVertical:20,
            borderRadius:5,
            textAlign:'center'
          },
          viewRepository : {
            backgroundColor:theme.colors.primary,
            color:'#fff',
            paddingHorizontal:30,
            paddingVertical:20,
            borderRadius:5,
            textAlign:'center'
          }
      });
  return (
    <View>
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
        <View style={styles.btnsContainer}>
                <Pressable 
                    onPress={()=>Linking.openURL(review.repository.url)}>
                    <Text 
                        style={styles.viewRepository}
                        fontWeight="bold"
                        fontSize ='subheading'>View repository</Text>
                </Pressable>
                <Pressable 
                    onPress={()=>handleDelete(review.id)}>
                    <Text 
                        style={styles.deleteRepository}
                        fontWeight="bold"
                        fontSize ='subheading'>Delete repository</Text>
                </Pressable>
        </View>
    </View>
    )
}

export default Review