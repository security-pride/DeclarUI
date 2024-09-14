import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogisticsScreen = () => {
  const navigation = useNavigation();

  const handleMessageRedirection = () => {
    navigation.navigate('Message');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>通知</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image 
              source={require('../assets/snack-icon.png')} 
              style={styles.backButton} 
            />
          </TouchableOpacity>
          <Text style={styles.headerSettings}>设置</Text>
        </View>
      </View>
      
      <View style={styles.categories}>
        {['物流', '售后', '提醒', '互动', '赞评', '优惠', '其他'].map((category, index) => (
          <Text key={index} style={styles.categoryText}>{category}</Text>
        ))}
      </View>

      <ScrollView style={styles.trackingInfo}>
        <View style={styles.trackingItem}>
          <Image 
            source={require('../assets/snack-icon.png')}
            style={styles.storeLogo}
          />
          <View style={styles.trackingDetails}>
            <Text style={styles.status}>即将确认收货</Text>
            <Text style={styles.logisticsCompany}>物流公司 申通快递</Text>
            <Text style={styles.deliveryTime}>签收时间 2024年07月02日 12:27</Text>
            <Button title="延长收货" style={styles.button} />
          </View>
        </View>

        <View style={styles.trackingItem}>
          <Image 
            source={require('../assets/snack-icon.png')}
            style={styles.storeLogo}
          />
          <View style={styles.trackingDetails}>
            <Text style={styles.status}>即将自动确认收货</Text>
            <Text style={styles.address}>收货地址 关山街道烽瑜路1037号华中科技大学东11舍407</Text>
            <Button title="查看详情" style={styles.button} />
          </View>
        </View>

        <View style={styles.trackingItem}>
          <Image 
            source={require('../assets/snack-icon.png')}
            style={styles.storeLogo}
          />
          <View style={styles.trackingDetails}>
            <Text style={styles.status}>包裹签收通知</Text>
            <Text style={styles.logisticsInfo}>快递公司 韵达快递</Text>
            <Text style={styles.additionalInfo}>
              快递信息 包裹已被签收，点击查看签收详情>>
            </Text>
            <Button title="查看详情" style={styles.button} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        {['首页', '逛逛', '消息', '购物车', '我的淘宝'].map((navItem, index) => (
          <TouchableOpacity key={index} onPress={navItem === '消息' ? handleMessageRedirection : null}>
            <Text style={styles.navItem}>{navItem}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#1c1c1c',
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 30,
    height: 30,
  },
  headerSettings: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#282828',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
  },
  trackingInfo: {
    flex: 1,
  },
  trackingItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  storeLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  trackingDetails: {
    flex: 1,
  },
  status: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  logisticsCompany: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  deliveryTime: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  additionalInfo: {
    fontSize: 14,
    color: '#ccc',
  },
  button: {
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#1c1c1c',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    fontSize: 16,
    color: '#fff',
  },
});

export default LogisticsScreen;