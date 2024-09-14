import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SportsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Button title="开始定制" onPress={() => {}} />
      </View>
      <Text style={styles.title}>Hi~ 我是你的轻松跑教练</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>帮你 轻松面对 </Text>
        <Text style={styles.highlight}>3 公里</Text>
      </View>
      <Text style={styles.tags}>#高效减脂 #不窒气 #轻松跑更远</Text>
      <View style={styles.freeOffer}>
        <Text style={styles.freeText}>限时免费，剩余 3 次</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>目标跑 自由跑 </Text>
        <Text style={styles.selectedTab}>轻松跑 </Text>
        <Text style={styles.tabText}>课程跑 自定义</Text>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.routeButton} onPress={() => {}}>
          <Text style={styles.buttonText}>路线</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goButton} onPress={() => {}}>
          <Text style={styles.goText}>GO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shoesButton} onPress={() => {}}>
          <Text style={styles.buttonText}>跑鞋</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchSports')}>
          <Text style={styles.navText}>Search Sports</Text>
        </TouchableOpacity>
        <Text style={styles.navText}>运动日历 户外跑步 户外行走 跳绳</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  infoText: {
    fontSize: 18,
  },
  highlight: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6700',
  },
  tags: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777777',
  },
  freeOffer: {
    marginVertical: 12,
    alignItems: 'center',
  },
  freeText: {
    color: '#FF6700',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  tabText: {
    color: '#777777',
  },
  selectedTab: {
    color: '#000000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  routeButton: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
  },
  goButton: {
    padding: 20,
    backgroundColor: '#32CD32',
    borderRadius: 50,
  },
  goText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  shoesButton: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    color: '#000000',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navText: {
    fontSize: 12,
    color: '#777777',
  },
});

export default SportsScreen;