import { RefreshControl, SafeAreaView, FlatList, ScrollView, LogBox } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { RenderItem } from '../components/RenderItem';
import { styles } from '../styles';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function Countries() {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => {
      setPosts([]);
      axios.get('https://express-test-apis.herokuapp.com/countries').then((res) => {
        setPosts(res.data.data.data.countries);
      });
      setRefreshing(false)
    });
  }, []);

  useEffect(() => {
    axios.get('https://express-test-apis.herokuapp.com/countries').then((res) => {
      setPosts(res.data.data.data.countries);
    })
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  }, []);

  setInterval(function () {
    posts.shift();
    setPosts([...posts])
  }, 10000);

    return (
    <SafeAreaView style={ styles.container }>
      <ScrollView
        contentContainerStyle={ styles.scrollView }
        refreshControl={ <RefreshControl refreshing={ refreshing } onRefresh={ onRefresh } /> }>
        <FlatList data={ posts } renderItem={ RenderItem } keyExtractor={ item => item.country_id } />
      </ScrollView>
    </SafeAreaView>
  );
}

