import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Repositories from './AppBarTab/Repositories';
import SignIn from './AppBarTab/SignIn';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
  },
  scrollView: {
    marginHorizontal: 10,
  }
});

const AppBar = () => {
  return <View style={styles.container}>
          <ScrollView horizontal style={styles.scrollView}>
            <Repositories />
            <SignIn />
          </ScrollView>
        </View>;
};

export default AppBar;