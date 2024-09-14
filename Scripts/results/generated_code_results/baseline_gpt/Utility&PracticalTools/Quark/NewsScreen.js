import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>考克日报</Text>
        <View style={styles.iconContainer}>
          <Icon name="search" size={24} color="#fff" />
          <Icon name="share" size={24} color="#fff" style={styles.iconSpacing} />
          <Icon name="close" size={24} color="#fff" />
        </View>
      </View>

      {/* Date and Weather Section */}
      <View style={styles.infoContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>07</Text>
          <Text style={styles.dateText}>16</Text>
          <Icon name="cloud" size={24} color="#fff" />
          <Text style={styles.cityText}>武汉市 30°C</Text>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Text style={styles.newsText}>早报</Text>
        <Text style={styles.newsSubText}>余承东回应常接任正非批:有误解</Text>
        <Text style={styles.newsSubText}>如何扭转地方财政收缩态势?专家建议</Text>
        <Text style={styles.newsSubText}>美特勤局局长:调整特朗普贴身警卫</Text>
      </View>

      {/* Trending Section */}
      <View style={styles.trendingContainer}>
        <Text style={styles.trendingTitle}>热搜榜</Text>
        <View style={styles.trendingTabContainer}>
          <Text style={styles.trendingTab}>热搜</Text>
          <Text style={styles.trendingTab}>微博</Text>
          <Text style={styles.trendingTab}>知乎</Text>
        </View>
        <Text style={styles.trendingNews}>1. 400多件裙子退货店家损失近80...</Text>
        <Text style={styles.trendingNews}>2. 几千块手机为何离不开几块钱的...</Text>
        <Text style={styles.trendingNews}>3. 全面深化改革的实践续篇</Text>
        <Text style={styles.trendingNews}>4. 抓娃娃票房</Text>
        <Text style={styles.trendingNews}>5. 小天愿意跟相柳走不是因为誓言</Text>
      </View>

      {/* Quick Access Section */}
      <View style={styles.quickAccessContainer}>
        <View style={styles.quickAccessItem}>
          <Icon name="spa" size={24} color="#fff" />
          <Text style={styles.quickAccessText}>芭芭农场</Text>
          <Text style={styles.quickAccessSubText}>新鲜水果包邮到家</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>去施肥 ></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quickAccessItem}>
          <Icon name="card-giftcard" size={24} color="#fff" />
          <Text style={styles.quickAccessText}>福利中心</Text>
          <Text style={styles.quickAccessSubText}>现金红包天天领取</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>去领钱 ></Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured News Section */}
      <View style={styles.featuredNewsContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Text style={styles.featuredBadge}>专题</Text>
        <Text style={styles.featuredText}>特朗普遇刺右耳受伤</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 60,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginHorizontal: 8,
  },
  infoContainer: {
    backgroundColor: '#1E90FF',
    borderRadius: 10,
    margin: 16,
    padding: 16,
  },
  dateContainer: {
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  cityText: {
    color: '#fff',
    marginTop: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 16,
  },
  newsText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsSubText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  trendingContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    margin: 16,
    padding: 16,
  },
  trendingTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trendingTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  trendingTab: {
    color: '#fff',
    fontSize: 14,
  },
  trendingNews: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 16,
  },
  quickAccessItem: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 16,
    width: '48%',
    alignItems: 'center',
  },
  quickAccessText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  quickAccessSubText: {
    color: '#fff',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  featuredNewsContainer: {
    margin: 16,
  },
  featuredBadge: {
    backgroundColor: '#0000FF',
    color: '#fff',
    padding: 4,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  featuredText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
});

export default NewsScreen;