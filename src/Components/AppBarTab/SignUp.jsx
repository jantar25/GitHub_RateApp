import { Link } from "react-router-native";
import { StyleSheet,Text} from 'react-native';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-native";

const SignUp = () => {
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          paddingHorizontal:10,
          paddingVertical:20
        }
      });
  return (
    <Link to="/signUp">
        <Text style={styles.color}>Sign Up</Text>
    </Link>
  )
}

export default SignUp