import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>8:35</Text>
      <View style={styles.statusBar}/>
      <Image style={styles.megaphoneIcon} source={require('../assets/snack-icon.png')} />
      <Text style={styles.breakingNewsLabel}>突发新闻</Text>
      <View style={styles.tabContainer}>
        <Text style={[styles.tabText, styles.activeTab]}>猜你喜欢</Text>
        <Text style={styles.tabText}>热门</Text>
        <Text style={styles.tabText}>视频</Text>
        <Text style={styles.tabText}>同城</Text>
        <Text style={styles.tabText}>突发重大</Text>
        <Text style={styles.tabText}>最新资讯</Text>
      </View>
      <View style={styles.citySelector}>
        <Text style={styles.citySelectorText}>选择您的城市</Text>
        <Text style={styles.dateTime}>Mon, 15 M07 2024, 08:35</Text>
        <Image style={styles.weatherIcon} source={require('../assets/snack-icon.png')} />
      </View>
      <ScrollView>
        <View style={styles.newsBanner}>
          <Text style={styles.newsCategoryLabel}>突发新闻</Text>
          <Text style={styles.newsTitle}>总统核定成立大法官提名审荐小组 拟明日开会</Text>
        </View>
        <Text style={styles.newsSource}>UDN.COM - 33分钟</Text>
        <View style={styles.reactionsContainer}>
          <TouchableOpacity>
            <Text style={styles.reactionText}>反应</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.reactionText}>评论</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.reactionText}>分享</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.adContainer}>
          <Image style={styles.adIcon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.rsiText}>RSI C6</Text>
          <Text style={styles.adLabel}>AD</Text>
        </View>
        <Image style={styles.carImage} source={require('../assets/snack-icon.png')} />
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('News')}>
          <Text style={styles.bottomNavText}>新闻</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TopicWall')}>
          <Text style={styles.bottomNavText}>话题墙</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('BELOUD')}>
          <Text style={styles.bottomNavText}>BELOUD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notice')}>
          <Text style={styles.bottomNavText}>提醒</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
          <Text style={styles.bottomNavText}>更多</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  time: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 18,
    color: '#000000',
  },
  statusBar: {
    position: 'absolute',
    top: 5,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000000',
  },
  megaphoneIcon: {
    position: 'absolute',
    top: 10,
    right: 50,
    width: 20,
    height: 20,
  },
  breakingNewsLabel: {
    position: 'absolute',
    top: 40,
    left: 10,
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
  },
  activeTab: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  citySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  citySelectorText: {
    fontSize: 18,
    color: '#000000',
  },
  dateTime: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 10,
  },
  weatherIcon: {
    flex: 1,
    height: 20,
    width: 20,
  },
  newsBanner: {
    backgroundColor: '#FF0000',
    padding: 10,
  },
  newsCategoryLabel: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  newsTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  newsSource: {
    fontSize: 14,
    color: '#666666',
    marginVertical: 5,
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  reactionText: {
    fontSize: 16,
    color: '#000000',
  },
  adContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  adIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rsiText: {
    fontSize: 14,
    color: '#000000',
  },
  adLabel: {
    fontSize: 14,
    color: '#00FF00',
    marginLeft: 10,
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
  },
  bottomNavText: {
    fontSize: 14,
    color: '#000000',
  },
});

export default HomeScreen;