import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>推荐</Text>
          <Text style={styles.location}>武汉</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.signInIcon} />
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchText}>穿戴甲</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />
        </View>

        <View style={styles.iconRow}>
          <View style={styles.iconBox}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>人才市场</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>手机</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>省钱神券</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>充值中心</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text>奢品</Text>
          </View>
        </View>

        <View style={styles.promotionRow}>
          <View style={styles.promotionCard}>
            <Text style={styles.promotionText}>闲鱼特卖超低价</Text>
            <Text style={styles.priceText}>¥4.8</Text>
          </View>
          <View style={styles.promotionCard}>
            <Text style={styles.promotionText}>极速回收</Text>
            <Text style={styles.subText}>免费上门</Text>
          </View>
          <View style={styles.promotionCard}>
            <Text style={styles.promotionText}>闲鱼直播</Text>
            <Text style={styles.subText}>爆款好物直播中</Text>
          </View>
        </View>

        <View style={styles.labelsRow}>
          <Text style={styles.label}>猜你喜欢</Text>
          <Text style={styles.label}>最新发布</Text>
          <Text style={styles.label}>鱼币抵钱</Text>
          <Text style={styles.label}>省钱小组</Text>
          <Text style={styles.label}>+</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('闲鱼')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon}/>
          <Text>闲鱼</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('游戏')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon}/>
          <Text>游戏</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <View style={styles.plusButton}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('消息')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon}/>
          <Text>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('我的')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomIcon}/>
          <Text>我的</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.sellButton} onPress={() => navigation.navigate('Sell')}>
        <Text style={styles.sellText}>Sell</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  headerText: {
    fontSize: 24,
  },
  location: {
    fontSize: 16,
  },
  signInIcon: {
    width: 24,
    height: 24,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  searchText: {
    flex: 1,
  },
  cameraIcon: {
    width: 24,
    height: 24,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  iconBox: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  promotionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  promotionCard: {
    width: '30%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  promotionText: {
    fontSize: 16,
  },
  priceText: {
    fontSize: 14,
    color: '#FF0000',
  },
  subText: {
    fontSize: 12,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomIcon: {
    width: 24,
    height: 24,
  },
  plusButton: {
    borderRadius: 24,
    width: 48,
    height: 48,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  sellButton: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: '#FF4500',
    borderRadius: 30,
    padding: 10,
  },
  sellText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default HomeScreen;