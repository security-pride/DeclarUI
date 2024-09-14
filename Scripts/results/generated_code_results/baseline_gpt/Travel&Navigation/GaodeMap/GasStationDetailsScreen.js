import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GasStationDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.stationImage} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="search" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="edit" size={20} color="#000" style={styles.iconSpacing} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="ellipsis-h" size={20} color="#000" style={styles.iconSpacing} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.stationName}>供销石油加油站</Text>
        <Text style={styles.stationStatus}>加油站</Text>
        <Text style={styles.latestView}>刚刚浏览</Text>
        <Text style={styles.operatingHours}>营业时间 周一至周日 00:00-24:00</Text>
        <Text style={styles.distanceInfo}>距你 2.5公里 驾车 6分钟 芝罘区</Text>
        <Text style={styles.address}>芝罘区二马路3号2单元内四号东山名郡路南</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.discountText}>优惠加油</Text>
        <Text style={styles.discountPrice}>¥ 7.56/L</Text>
        <Text style={styles.stationPrice}>油站价 ¥ 7.87/L</Text>
        <Text style={styles.nationalPrice}>国标价 ¥ 8.07/L</Text>
      </View>

      <View style={styles.selectionContainer}>
        <TouchableOpacity style={styles.selectButton}>
          <Text>请选择油枪</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fuelNumberButton}>
          <Text>92#</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.promotionContainer}>
        <Text style={styles.promotionText}>¥ 先加油后付款 输入金额计算优惠</Text>
      </View>

      <View style={styles.couponContainer}>
        <View style={styles.coupon}>
          <Text>¥ 100</Text>
          <Text>立减约 ¥ 3.93</Text>
        </View>
        <View style={styles.coupon}>
          <Text>¥ 200</Text>
          <Text>立减约 ¥ 7.87</Text>
        </View>
        <View style={styles.coupon}>
          <Text>¥ 300</Text>
          <Text>立减约 ¥ 11.81</Text>
        </View>
      </View>

      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>立减优惠 输入金额后查看优惠金额</Text>
        <Text style={styles.noticeText}>优惠券 输入金额后查看可用优惠券</Text>
      </View>

      <View style={styles.agreementContainer}>
        <Text style={styles.agreementText}>阅读并同意 《信息服务用户服务条款》 《汽车服务个人信息处理规则》</Text>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>油站印象 加完油后，可以在订单详情页内留下你的感受哦~</Text>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={20} color="#000" />
          <Text style={styles.navButtonText}>周边</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="star" size={20} color="#000" />
          <Text style={styles.navButtonText}>收藏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="share" size={20} color="#000" />
          <Text style={styles.navButtonText}>分享</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>导航</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeButton}>
          <Text style={styles.routeButtonText}>路线</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  stationImage: {
    width: '100%',
    height: 200,
  },
  headerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconSpacing: {
    marginLeft: 15,
  },
  infoContainer: {
    padding: 15,
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stationStatus: {
    color: '#888',
  },
  latestView: {
    color: '#ff0000',
  },
  operatingHours: {
    marginTop: 5,
  },
  distanceInfo: {
    marginTop: 5,
  },
  address: {
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  discountText: {
    fontWeight: 'bold',
  },
  discountPrice: {
    color: '#ff0000',
  },
  stationPrice: {
    color: '#888',
  },
  nationalPrice: {
    color: '#888',
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  selectButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  fuelNumberButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  promotionContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    alignItems: 'center',
  },
  promotionText: {
    color: '#00f',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  coupon: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  noticeContainer: {
    padding: 15,
  },
  noticeText: {
    color: '#888',
    marginBottom: 5,
  },
  agreementContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  agreementText: {
    color: '#007bff',
    textAlign: 'center',
  },
  footerContainer: {
    padding: 15,
  },
  footerText: {
    color: '#888',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    color: '#000',
    marginTop: 5,
  },
  routeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  routeButtonText: {
    color: '#fff',
  },
});

export default GasStationDetailsScreen;