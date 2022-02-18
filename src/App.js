import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './Components/NewsCard';
import news_banner_data from './news_banner_data.json';

const App = () => {
  const newsRender = ({item}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.banner_image}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          data={news_data}
          renderItem={newsRender}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 1.1,
  },
  header_text:{
    fontSize:50,
    textAlign:"center",
    color:"crimson",
  }
});

export default App;
