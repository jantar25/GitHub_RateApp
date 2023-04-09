import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import Repositories from './AppBarTab/Repositories';
import SignIn from './AppBarTab/SignIn';
import Signout from './AppBarTab/Signout';
import SignUp from './AppBarTab/SignUp';
import CreateReview from './AppBarTab/CreateReview';
import MyReviews from './AppBarTab/MyReviews';
import useMe from '../Hooks/useMe';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  flexRow: {
    display:'flex',
    flexDirection:'row'
  }
});

const AppBar = () => {
  const { userData } = useMe();

  return <View style={styles.container}>
          <ScrollView horizontal style={styles.scrollView}>
            <Repositories />
            {!userData? (
              <View style={styles.flexRow}>
                <SignIn />
                <SignUp />
              </View>
            ) : (
              <View style={styles.flexRow}>
                <CreateReview />
                <MyReviews />
                <Signout />
              </View>
            )}
          </ScrollView>
        </View>;
};

export default AppBar;