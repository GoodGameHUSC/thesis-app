import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, View } from 'react-native';
import AddNewFeedShortcut from './Section/AddNewFeedShortcut';
import ListNewFeed from './Section/ListNewFeed';
import NewFeedsCategory from './Section/NewFeedsCategory';
import styles from './style';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function NewFeedHomeScreenUI() {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <NewFeedsCategory />
      <ScrollView style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <AddNewFeedShortcut />
        <View>

          <ListNewFeed />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}