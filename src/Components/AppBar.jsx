import { View, StyleSheet, ScrollView,Pressable,Text } from 'react-native';
import { useQuery } from '@apollo/client';
import Constants from 'expo-constants';

import theme from '../theme';
import Repositories from './AppBarTab/Repositories';
import SignIn from './AppBarTab/SignIn';
import Signout from './AppBarTab/Signout';
import { ME } from '../graphql/queries';

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
  const { data } = useQuery(ME);

  return <View style={styles.container}>
          <ScrollView horizontal style={styles.scrollView}>
            <Repositories />
            {data?.me===null? <SignIn /> : <Signout />}
          </ScrollView>
        </View>;
};

export default AppBar;