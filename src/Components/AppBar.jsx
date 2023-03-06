import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Repositories from './AppBarTab/Repositories';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
            <Repositories />
        </View>;
};

export default AppBar;