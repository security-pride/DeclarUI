import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.username}>Boots--2333</Text>
          <View style={styles.followInfo}>
            <Text style={styles.followText}>关注 1</Text>
            <Text style={styles.followText}>粉丝 0</Text>
            <Text style={styles.followText}>加油 1</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="md-share-alt" size={24} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>我的数据</Text>
        <Text style={styles.statsText}>0 分钟</Text>
        <Text style={styles.subText}>本周运动</Text>
        <Text style={styles.statsText}>体重数据</Text>
        <Text style={styles.statsText}>70.0 公斤</Text>
      </View>
      
      <View style={styles.promoContainer}>
        <Text style={styles.promoTitle}>keep · 会员</Text>
        <Text style={styles.promoSubtitle}>告别肚腩计划</Text>
        <Text style={styles.promoDescription}>腰间的肥油咔咔掉</Text>
      </View>

      <View style={styles.menu}>
        <MenuItem iconName="pencil" title="我的动态" />
        <MenuItem iconName="star" title="收藏与加油" />
        <MenuItem iconName="calendar" title="我的课程" />
        <MenuItem iconName="trophy" title="我的活动" />
        <MenuItem iconName="restaurant" title="我的饮食" />
        <MenuItem iconName="list" title="订单与账单" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ iconName, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={iconName} size={24} style={styles.menuIcon} />
    <Text style={styles.menuTitle}>{title}</Text>
    <Icon name="chevron-forward" size={24} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  headerTextContainer: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  followInfo: {
    flexDirection: 'row',
  },
  followText: {
    marginRight: 8,
  },
  statsContainer: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  statsText: {
    fontSize: 16,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
  promoContainer: {
    padding: 16,
    backgroundColor: '#a882dc',
  },
  promoTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  promoSubtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 2,
  },
  promoDescription: {
    fontSize: 12,
    color: '#fff',
  },
  menu: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuTitle: {
    fontSize: 16,
    flex: 1,
  },
});

export default ProfileScreen;