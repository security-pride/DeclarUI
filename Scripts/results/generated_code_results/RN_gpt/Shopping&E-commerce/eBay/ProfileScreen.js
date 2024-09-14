import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({ navigation }) => {
  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>mu_447895</Text>
          <Text style={styles.registration}>注册时间 2021</Text>
        </View>
        <View style={styles.notifications}>
          <View style={styles.iconWrapper}>
            <Icon name="mail-outline" size={24} />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </View>
          <Icon name="cart-outline" size={24} style={styles.icon} />
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigateToScreen('Watchlist')} style={styles.menuItem}>
          <Icon name="heart-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>追踪列表</Text>
            <Text style={styles.menuDescription}>密切关注追踪物品</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Saved')} style={styles.menuItem}>
          <Icon name="bookmark-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>已保存</Text>
            <Text style={styles.menuDescription}>搜索、卖家、动态消息</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Rebuy')} style={styles.menuItem}>
          <Icon name="refresh-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>再次购买</Text>
            <Text style={styles.menuDescription}>购买已购买过的物品</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('History')} style={styles.menuItem}>
          <Icon name="gift-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>购买记录</Text>
            <Text style={styles.menuDescription}>您的订购历史记录</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Bidding')} style={styles.menuItem}>
          <Icon name="hammer-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>出价和议价</Text>
            <Text style={styles.menuDescription}>进行中的拍卖和卖家议价</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('RecentViews')} style={styles.menuItem}>
          <Icon name="time-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>最近浏览</Text>
            <Text style={styles.menuDescription}>您最近浏览的物品</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('MySize')} style={styles.menuItem}>
          <Icon name="resize-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>我的尺码</Text>
            <Text style={styles.menuDescription}>查看您保存的偏好设置</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.quickAccess}>
        <Text style={styles.quickTitle}>快捷方式</Text>
        <TouchableOpacity onPress={() => navigateToScreen('SalesHistory')} style={styles.menuItem}>
          <Icon name="pricetags-outline" size={24} />
          <View style={styles.menuText}>
            <Text style={styles.menuTitle}>出售记录</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.navItem}>
          <Icon name="home-outline" size={24} />
          <Text style={styles.navText}>主页</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')} style={styles.navItem}>
          <Icon name="person-outline" size={24} />
          <Text style={styles.navText}>我的 eBay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Search')} style={styles.navItem}>
          <Icon name="search-outline" size={24} />
          <Text style={styles.navText}>搜索</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Notifications')} style={styles.navItem}>
          <Icon name="notifications-outline" size={24} />
          <Text style={styles.navText}>通知</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('SellItems')} style={styles.navItem}>
          <Icon name="pricetag-outline" size={24} />
          <Text style={styles.navText}>出售物品</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  registration: {
    fontSize: 14,
    color: '#999999',
  },
  notifications: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    marginRight: 15,
  },
  notificationBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
  menu: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuText: {
    marginLeft: 10,
  },
  menuTitle: {
    fontSize: 16,
    color: '#333333',
  },
  menuDescription: {
    fontSize: 12,
    color: '#999999',
  },
  quickAccess: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  quickTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#DDDDDD',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default ProfileScreen;