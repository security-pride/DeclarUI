import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.time}>11:28</Text>
        <View style={styles.statusIcons}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      <Text style={styles.logo}>Quark</Text>
      <View style={styles.searchBar}>
        <Text> </Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
      </View>
      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={() => console.log('Go To News')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>夸克日报</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Go To Select')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>精选</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Go To Scanner')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>夸克学习</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Go To OnlineStorage')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>夸克扫描王</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Go To OnlineStorage')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>夸克网盘</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={() => console.log('More')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>夸克文档</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('More')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>更多</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Go To Market')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>省钱集市</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Go To AI Tools')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.iconLarge} />
          <Text style={styles.iconLabel}>AI 工具</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  statusIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  logo: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 15,
  },
  iconLarge: {
    width: 50,
    height: 50,
  },
  iconLabel: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default HomeScreen;