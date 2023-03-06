import { StyleSheet, Pressable,Text,Alert } from 'react-native';

const Repositories = () => {
    const styles = StyleSheet.create({
        color: {
          color:'#fff',
          fontSize:20,
          padding: 20
        }
      });
  return (
    <Pressable onPress={()=>Alert.alert('You pressed the text!')}>
        <Text style={styles.color}>Repositories</Text>
    </Pressable>
  )
}

export default Repositories