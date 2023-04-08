import { Link } from "react-router-native";
import { StyleSheet,Text } from 'react-native';

const MyReviews = () => {
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          paddingHorizontal:10,
          paddingVertical:20
        }
      });
  return (
    <Link to="/myRewiews">
        <Text style={styles.color}>My Rewiews</Text>
    </Link>
  )
}

export default MyReviews