import React from 'react';
import { View, Text, Button, Image, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="心火已燃" />
        <View style={styles.headerRight}>
          <Image style={styles.kLogo} source={require('../assets/snack-icon.png')} />
          <View style={styles.notificationIconWrapper}>
            <Image style={styles.envelopeIcon} source={require('../assets/snack-icon.png')} />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationBadgeText}>13</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tab}>关注</Text>
        <Text style={[styles.tab, styles.activeTab]}>发现</Text>
        <Text style={styles.tab}>活动</Text>
      </View>
      <View style={styles.filters}>
        <Button title="跟练" onPress={() => navigation.navigate('Follow')} />
        <Button title="同城" onPress={() => navigation.navigate('CityMode')} />
        <Button title="心火已燃" onPress={() => navigation.navigate('HeartFire')} />
        <Button title="城市 K 车" onPress={() => navigation.navigate('CityRide')} />
      </View>
      <View style={styles.content}>
        <ImageBackground style={styles.videoPlayer} source={require('../assets/snack-icon.png')}>
          <Text style={styles.videoPlayerText}>WARM UP</Text>
        </ImageBackground>
        <Image style={styles.fitnessAd} source={require('../assets/snack-icon.png')} />
        <View style={styles.userInfo}>
          <Image style={styles.userAvatar} source={require('../assets/snack-icon.png')} />
          <View style={styles.userInfoText}>
            <Text style={styles.userVideoLabel}>急性子狠瘦全身</Text>
            <Text style={styles.username}>朱七七教授</Text>
            <Text style={styles.commentCount}>1373</Text>
          </View>
        </View>
        <View style={styles.runInfo}>
          <Text style={styles.distance}>5.00公里</Text>
          <Text style={styles.achievement}>成绩 00:22:30</Text>
        </View>
        <Image style={styles.runningMap} source={require('../assets/snack-icon.png')} />
        <ImageBackground style={styles.editVideo} source={require('../assets/snack-icon.png')}>
          <TouchableOpacity>
            <Image style={styles.editIcon} source={require('../assets/snack-icon.png')} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.bottomNav}>
        <Button title="首页" onPress={() => navigation.navigate('Home')} />
        <Button title="课程" onPress={() => navigation.navigate('Courses')} />
        <Button title="运动" onPress={() => navigation.navigate('Sports')} />
        <Button title="商城" onPress={() => navigation.navigate('Store')} />
        <Button title="我的" onPress={() => navigation.navigate('Profile')} />
        <Button title="搜索运动" onPress={() => navigation.navigate('SearchSports')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  kLogo: {
    width: 30,
    height: 30,
  },
  notificationIconWrapper: {
    position: 'relative',
    marginLeft: 10,
  },
  envelopeIcon: {
    width: 30,
    height: 30,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 4,
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 18,
    color: '#000',
  },
  activeTab: {
    color: 'green',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  videoPlayer: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: '#000',
  },
  videoPlayerText: {
    color: '#fff',
    fontSize: 16,
  },
  fitnessAd: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfoText: {
    marginLeft: 10,
  },
  userVideoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    color: '#888',
  },
  commentCount: {
    color: '#888',
  },
  runInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  distance: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  achievement: {
    color: '#888',
    fontSize: 14,
  },
  runningMap: {
    width: '100%',
    height: 200,
  },
  editVideo: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  editIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default HomeScreen;