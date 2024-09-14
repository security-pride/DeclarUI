import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.username}>mu_447895</Text>
          <Text style={styles.registrationDate}>注册时间 2021</Text>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.iconBadge}>
            <Icon name="mail-outline" size={24} color="black" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </View>
          <Icon name="cart-outline" size={24} color="black" />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>购物</Text>
        {renderItem("heart-outline", "追踪列表", "密切关注追踪物品")}
        {renderItem("bookmark-outline", "已保存", "搜索、卖家、动态消息")}
        {renderItem("refresh-outline", "再次购买", "购买已购买过的物品")}
        {renderItem("gift-outline", "购买记录", "您的订单历史记录")}
        {renderItem("hammer-outline", "出价和议价", "进行中的拍卖和卖家议价")}
        {renderItem("time-outline", "最近浏览", "您最近浏览的物品")}
        {renderItem("footsteps-outline", "我的尺码", "查看您保存的偏好设定")}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>快捷方式</Text>
        {renderItem("pricetag-outline", "出售记录", "")}
      </View>
    </ScrollView>
  );
};

const renderItem = (iconName, title, subtitle) => (
  <TouchableOpacity style={styles.itemContainer} key={title}>
    <Icon name={iconName} size={24} color="black" style={styles.itemIcon} />
    <View>
      <Text style={styles.itemTitle}>{title}</Text>
      {!!subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  profileInfo: {
    marginLeft: 8,
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  registrationDate: {
    fontSize: 14,
    color: 'grey',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconBadge: {
    position: 'relative',
    marginRight: 16,
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  itemIcon: {
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubtitle: {
    fontSize: 14,
    color: 'grey',
  },
});

export default ProfileScreen;