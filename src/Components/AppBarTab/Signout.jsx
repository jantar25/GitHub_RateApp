import { StyleSheet,Text,Pressable} from 'react-native';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from "react-router-native";

import useAuthStorage  from '../../Hooks/useAuthStorage';

const Signout = () => {
    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient();
    const navigate = useNavigate();
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          paddingHorizontal:10,
          paddingVertical:20
        }
      });

    const signOut = async () => {
        await authStorage.removeAccessToken()
        apolloClient.resetStore();
        navigate('/');
      }

  return (
    <Pressable onPress={signOut}>
        <Text style={styles.color}>Sign out</Text>
    </Pressable>
  )
}

export default Signout