import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
          <Text style={styles.title}>突发新闻</Text>
          <View style={styles.headerIcons}>
            <Icon name="magnify" size={24} />
            <Icon name="account-circle-outline" size={24} />
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>猜你喜欢</Text>
          <Text style={styles.tab}>热门</Text>
          <Text style={styles.tab}>视频</Text>
          <Text style={styles.tab}>同城</Text>
          <Text style={styles.tab}>突发重大</Text>
          <Text style={styles.tab}>最新资讯</Text>
        </View>

        {/* City Selection */}
        <View style={styles.citySelection}>
          <Icon name="map-marker" size={24} />
          <Text style={styles.cityText}>选择您的城市</Text>
          <View style={styles.rightIcons}>
            <Text style={styles.dateText}>Mon, 15 M07 2024, 08:35</Text>
            <Icon name="weather-partly-cloudy" size={24} />
          </View>
        </View>

        {/* News Item */}
        <View style={styles.newsItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />
          <View style={styles.newsOverlay}>
            <Text style={styles.newsCategory}>突发新闻</Text>
            <Text style={styles.newsTitle}>
              总统核定成立大法官提名审荐小组 擬明日开会
            </Text>
          </View>
        </View>
        <View style={styles.newsInfo}>
          <Text style={styles.newsSource}>UDN.COM - 33分钟</Text>
          <View style={styles.newsActions}>
            <Icon name="thumb-up-outline" size={24} />
            <Icon name="comment-outline" size={24} />
            <Icon name="share-outline" size={24} />
            <Icon name="information-outline" size={24} />
          </View>
        </View>

        {/* Advertisement */}
        <View style={styles.advertisement}>
          <Icon name="bullhorn" size={24} />
          <Text style={styles.adText}>RSI C6</Text>
          <Text style={styles.adBadge}>AD</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Icon name="menu" size={24} />
          <Text style={styles.footerText}>新闻</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="account-group" size={24} />
          <Text style={styles.footerText}>话题墙</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="bell-outline" size={24} />
          <Text style={styles.footerText}>提醒</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon name="dots-horizontal" size={24} />
          <Text style={styles.footerText}>更多</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 16,
    color: '#333',
  },
  activeTab: {
    fontSize: 16,
    color: '#e91e63',
    borderBottomWidth: 2,
    borderBottomColor: '#e91e63',
  },
  citySelection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  cityText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 5,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginRight: 10,
  },
  newsItem: {
    position: 'relative',
    marginVertical: 10,
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsOverlay: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    padding: 10,
  },
  newsCategory: {
    color: '#fff',
    fontSize: 14,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  newsSource: {
    color: '#666',
  },
  newsActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  advertisement: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  adText: {
    marginLeft: 5,
    fontSize: 16,
    flex: 1,
  },
  adBadge: {
    backgroundColor: '#32CD32',
    color: '#fff',
    paddingHorizontal: 4,
    borderRadius: 2,
  },
  adImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});

export default HomeScreen;