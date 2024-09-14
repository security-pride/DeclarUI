import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GasStationDetailsScreen = () => {
  const navigation = useNavigation();

  const goToGasInformation = () => {
    navigation.navigate('GasInformation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>

      <Image style={styles.galleryImage} source={require('../assets/snack-icon.png')} />

      <Text style={styles.stationName}>供销石油加油站</Text>
      <Text style={styles.greyText}>刚刚浏览</Text>
      
      <Text style={styles.operatingHours}>营业时间 周一至周日 00:00-24:00</Text>

      <Text style={styles.distance}>距离 2.5 公里 驾车 6 分钟 芝罘区</Text>

      <View style={styles.contact}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.greyText}>地图</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.greyText}>电话</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pricing}>
        <Text style={styles.discountPrice}>¥7.56/L</Text>
        <Text style={styles.greyText}>油站价 ¥7.87/L</Text>
        <Text style={styles.greyText}>国际价 ¥8.07/L</Text>
      </View>

      <View style={styles.fuelSection}>
        <TouchableOpacity style={styles.button}>
          <Text>请选择油枪</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToGasInformation}>
          <Text>92#</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.instruction}>¥ 先加油后付款 输入金额计算优惠</Text>

      <View style={styles.amountOptions}>
        <TouchableOpacity style={styles.amountButton}>
          <Text>¥100 立减约 ¥3.93</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.amountButton}>
          <Text>¥200 立减约 ¥7.87</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.amountButton}>
          <Text>¥300 立减约 ¥11.81</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>立减优惠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>优惠券</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.terms}>阅读并同意《信息服务用户服务条款》《汽车服务个人信息处理规则》</Text>

      <View style={styles.feedbackSection}>
        <Text style={styles.feedbackTitle}>油站印象</Text>
        <Text style={styles.feedbackText}>加完油后，可以在订单详情页内留下你的感受哦~</Text>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text>周边</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>收藏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>分享</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>导航</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>路线</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  galleryImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  stationName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  greyText: {
    color: '#888',
    marginBottom: 4,
  },
  operatingHours: {
    marginBottom: 8,
  },
  distance: {
    marginBottom: 16,
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  pricing: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  discountPrice: {
    color: '#f00',
    fontSize: 18,
  },
  fuelSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  instruction: {
    textAlign: 'center',
    marginBottom: 16,
  },
  amountOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  amountButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  actionButton: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  terms: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginBottom: 16,
  },
  feedbackSection: {
    padding: 16,
  },
  feedbackTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  feedbackText: {
    fontSize: 12,
    color: '#777',
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default GasStationDetailsScreen;