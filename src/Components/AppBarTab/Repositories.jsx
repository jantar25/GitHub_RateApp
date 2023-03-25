import { Link } from "react-router-native";
import { StyleSheet, Pressable,Text } from 'react-native';

const Repositories = () => {
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          paddingHorizontal:10,
          paddingVertical:20
        }
      });
  return (
    <Pressable onPress={()=>console.log('You pressed the repositories!')}>
      <Link to="/">
        <Text style={styles.color}>Repositories</Text>
      </Link>
    </Pressable>
  )
}

export default Repositories