import { Link } from "react-router-native";
import { StyleSheet,Text} from 'react-native';

const SignIn = () => {
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          paddingHorizontal:5,
          paddingVertical:20
        }
      });
  return (
    <Link to="/signIn">
        <Text style={styles.color}>Sign In</Text>
    </Link>
  )
}

export default SignIn