import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Repositories from './AppBarTab/Repositories';
import SignIn from './AppBarTab/SignIn';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
    flexDirection:'row'
  },
});

const AppBar = () => {
  return <View style={styles.container}>
            <Repositories />
            <SignIn />
        </View>;
};

export default AppBar;