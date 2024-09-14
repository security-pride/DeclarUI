import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Image source={require('../assets/snack-icon.png')} style={styles.mapImage} />
        
        <View style={styles.rightToolbar}>
          <TouchableOpacity style={styles.rightToolbarButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>通知</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightToolbarButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>图层</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightToolbarButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>反馈</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <TextInput placeholder="查找地点、公交、地铁" style={styles.searchInput} />
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.voiceIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity onPress={() => navigation.navigate('Drive')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>驾车</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PublicTransport')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>公交</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GasInformation')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>优惠加油</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Taxi')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>打车</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HotelBooking')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>订酒店</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TicketService')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>火车票机票</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DesignatedDriver')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>代驾</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Walking')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>步行</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RealTimeBus')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>实时公交</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MoreTools')} style={styles.quickActionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text>更多工具</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quickLinks}>
        <TouchableOpacity style={styles.quickLinkButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />
          <Text>回家</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLinkButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />
          <Text>去单位</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLinkButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />
          <Text>去设置</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text>附近</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text>打车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text>我的</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  map: {
    flex: 6,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  rightToolbar: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightToolbarButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 25,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  voiceIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  quickActionButton: {
    alignItems: 'center',
    margin: 5,
  },
  quickActionIcon: {
    width: 36,
    height: 36,
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  quickLinkButton: {
    alignItems: 'center',
  },
  quickLinkIcon: {
    width: 24,
    height: 24,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  bottomNavButton: {
    alignItems: 'center',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;