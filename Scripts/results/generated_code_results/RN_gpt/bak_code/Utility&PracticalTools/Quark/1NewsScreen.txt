import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>考克日报</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.imageIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.imageIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.imageIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.imageIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.newsSection}>
        <View style={styles.dateAndNews}>
          <Text style={styles.dateText}>07</Text>
          <Text style={styles.dateText}>16</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.degreeIcon} />
          <Text style={styles.weatherText}>30°C</Text>
        </View>
        <Text style={styles.newsHeadline}>早报</Text>
        <Text style={styles.newsContent}>余承东回应常揽任正非扯:有误解</Text>
        <Text style={styles.newsContent}>如何扭转地方财政收缩态势?专家建议</Text>
        <Text style={styles.newsContent}>美特勤局局长:调整特朗普普贴身警卫</Text>
      </View>
      <View style={styles.hotListSection}>
        <Text style={styles.hotList}>热搜榜</Text>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>热搜</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>微博</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>知乎</Text>
        </TouchableOpacity>
        <Text style={styles.hotItem}>1. 400多件裙子退货店家损失近80… 170w</Text>
        <Text style={styles.hotItem}>2. 几千块手机为何离不开几块钱的… 109w</Text>
        <Text style={styles.hotItem}>3. 全面深化改革的实践续篇 89w</Text>
        <Text style={styles.hotItem}>4. 抓娃娃票房 87w</Text>
        <Text style={styles.hotItem}>5. 小天愿意跟相柳走不是因为誓言 45w</Text>
      </View>
      <View style={styles.bottomNav}>
        <Button title="芭芭农场" onPress={() => {}} />
        <Button title="去施肥" onPress={() => {}} />
        <Button title="福利中心" onPress={() => {}} />
        <Button title="去领钱" onPress={() => {}} />
      </View>
      <View style={styles.specialSection}>
        <Text style={styles.specialTopic}>专题</Text>
        <Text style={styles.trumpNews}>特朗普遇刺右耳受伤</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.trumpBanner} />
      </View>
      <View style={styles.bottomNav}>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  imageIcon: {
    width: 20,
    height: 20,
  },
  newsSection: {
    backgroundColor: '#003366',
    borderRadius: 10,
    padding: 10,
  },
  dateAndNews: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 30,
    color: '#fff',
    marginRight: 5,
  },
  degreeIcon: {
    width: 20,
    height: 20,
  },
  weatherText: {
    color: '#fff',
    marginLeft: 5,
  },
  newsHeadline: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
  },
  newsContent: {
    fontSize: 14,
    color: '#fff',
  },
  hotListSection: {
    backgroundColor: '#202020',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  hotList: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  tabButton: {
    marginVertical: 2,
  },
  tabText: {
    color: '#fff',
  },
  hotItem: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 2,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  specialSection: {
    marginTop: 10,
  },
  specialTopic: {
    color: '#fff',
    fontSize: 16,
  },
  trumpNews: {
    color: '#fff',
    marginTop: 5,
  },
  trumpBanner: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default NewsScreen;