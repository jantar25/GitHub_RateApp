import { View, StyleSheet,Image } from 'react-native';
import theme from '../theme';
import Text from './Text';
import { formatK } from '../Utils/formatInThousand';

const Item = ({repository}) => {
    const styles = StyleSheet.create({
        container: {
          padding:20,  
          marginBottom:5,
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
            paddingTop:10,
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
        stats: {
            display:'flex',
            alignItems:'center'
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
                <Text fontWeight="bold" fontSize="subheading">
                        {repository.fullName}
                </Text>
                <Text color="textSecondary" style={styles.description}>
                    {repository.description}
                </Text>
                <Text style={styles.language}>{repository.language}</Text>
            </View>
        </View>
        <View style={styles.bottomCard}>
            <View style={styles.stats}>
                <Text fontWeight="bold" fontSize="subheading">
                    {formatK(repository.stargazersCount)}
                </Text>
                <Text color="textSecondary">Stars</Text>
            </View>
            <View style={styles.stats}>
                <Text fontWeight="bold" fontSize="subheading">
                    {formatK(repository.forksCount)}
                </Text>
                <Text color="textSecondary">Forks</Text>
            </View>
            <View style={styles.stats}>
                <Text fontWeight="bold" fontSize="subheading">
                    {repository.reviewCount}
                </Text>
                <Text color="textSecondary">Reviews</Text>
            </View>
            <View style={styles.stats}>
                <Text fontWeight="bold" fontSize="subheading">
                    {repository.ratingAverage}
                </Text>
                <Text color="textSecondary">Rating</Text>
            </View>
        </View>
      </View>
    );
  };
  
  export default Item;