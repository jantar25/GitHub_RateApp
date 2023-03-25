import { Link } from "react-router-native";
import { StyleSheet,Text } from 'react-native';

const CreateReview = () => {
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          paddingHorizontal:10,
          paddingVertical:20
        }
      });
  return (
    <Link to="/createReview">
    <Text style={styles.color}>Create a Review</Text>
  </Link>
  )
}

export default CreateReview