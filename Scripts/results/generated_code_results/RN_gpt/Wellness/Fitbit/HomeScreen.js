import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.logoText}>fitbit</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.inboxIcon} />
      </View>
      
      <View style={styles.statsContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.statIcon} />
        <Text style={styles.statNumber}>0</Text>
        <Text style={styles.statLabel}>步</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.detailIcon} />
          <Text style={styles.detailText}>0 公里</Text>
        </View>
        <View style={styles.detailBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.detailIcon} />
          <Text style={styles.detailText}>12 卡</Text>
        </View>
      </View>
      
      <View style={styles.challengesContainer}>
        <TouchableOpacity style={styles.challengeBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.challengeIcon} />
          <View>
            <Text style={styles.challengeTitle}>追踪您的正念</Text>
            <Text style={styles.challengeDesc}>本周剩 5 天</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.challengeBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.challengeIcon} />
          <View>
            <Text style={styles.challengeTitle}>追踪锻炼情况</Text>
            <Text style={styles.challengeDesc}>本周剩 5 天</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.challengeBox}>
          <Image source={require('../assets/snack-icon.png')} style={styles.challengeIcon} />
          <View>
            <Text style={styles.challengeTitle}>经期健康</Text>
            <Text style={styles.challengeDesc}>记录与趋势</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Discovery')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>发现</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>今天</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>好友</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16
  },
  icon: {
    width: 24,
    height: 24
  },
  inboxIcon: {
    width: 24,
    height: 24
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  statsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16
  },
  statIcon: {
    width: 80,
    height: 80,
    marginBottom: 8
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  statLabel: {
    fontSize: 16
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16
  },
  detailBox: {
    alignItems: 'center'
  },
  detailIcon: {
    width: 40,
    height: 40,
    marginBottom: 4
  },
  detailText: {
    fontSize: 14
  },
  challengesContainer: {
    paddingHorizontal: 16
  },
  challengeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8
  },
  challengeIcon: {
    width: 40,
    height: 40,
    marginRight: 16
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  challengeDesc: {
    fontSize: 12,
    color: '#777'
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingVertical: 8,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4
  }
});

export default HomeScreen;