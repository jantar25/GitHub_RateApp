import { View, StyleSheet,Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const Item = ({repository}) => {
    const styles = StyleSheet.create({
        container: {
          padding:20,  
          marginBottom:5,
          backgroundColor:'#fff'
        },
        image: {
          width: 60,
          height: 60,
          borderRadius:5
        },
        topCard: {
            display:'flex',
            flexDirection:'row'
        },
        bottomCard: {
            paddingTop:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:30
        },
        info: {
            paddingHorizontal:20,
            paddingVertical:10
        },
        language: {
            backgroundColor:theme.colors.primary,
            color:'#fff',
            alignSelf: 'flex-start',
            padding:5,
        }
      });
    return (
      <View style={styles.container}>
        <View style={styles.topCard}>
            <Image
            style={styles.image}
            source={{uri:repository.ownerAvatarUrl}}
            />
            <View style={styles.info}>
                <Text color="primary" fontWeight="bold" fontSize="subheading">{repository.fullName}</Text>
                <Text color="textSecondary">{repository.description}</Text>
                <Text style={styles.language}>{repository.language}</Text>
            </View>
        </View>
        <View style={styles.bottomCard}>
            <View>
                <Text >{repository.stargazersCount}</Text>
                <Text >Stars</Text>
            </View>
            <View>
                <Text >{repository.forksCount}</Text>
                <Text >Forks</Text>
            </View>
            <View>
                <Text >{repository.reviewCount}</Text>
                <Text >Reviews</Text>
            </View>
            <View>
                <Text >{repository.ratingAverage}</Text>
                <Text >Rating</Text>
            </View>
        </View>
      </View>
    );
  };
  
  export default Item;