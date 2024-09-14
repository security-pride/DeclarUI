import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GasStationDetails = () => {
  const navigation = useNavigation();
  const [selectedFuel, setSelectedFuel] = useState('92#');

  const handleBackPress = () => {
    navigation.navigate('GasInformation');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.backIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.moreIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.imageGallery}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.stationImage} />
        <Text style={styles.imageCounter}>1/51</Text>
      </View>

      <Text style={styles.stationName}>供销石油加油站</Text>
      <Text style={styles.stationType}>加油站</Text>
      <Text style={styles.operatingHours}>营业时间 周一至周日 00:00-24:00</Text>

      <View style={styles.locationInfo}>
        <Text style={styles.distance}>距你2.5公里 驾车6分钟 芝罘区</Text>
        <Text style={styles.address}>芝罘区二马路3号2单元内四号东山名郡路南</Text>
        <View style={styles.mapPhoneButtons}>
          <TouchableOpacity style={styles.mapButton}>
            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.mapIcon} />
            <Text>地图</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton}>
            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.phoneIcon} />
            <Text>电话</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.pricingSection}>
        <View style={styles.priceRow}>
          <Text style={styles.discountPrice}>¥7.56/L</Text>
          <TouchableOpacity>
            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.stationPrice}>油站价 ¥7.87/L</Text>
        <Text style={styles.standardPrice}>国标价 ¥8.07/L</Text>
      </View>

      <View style={styles.fuelSelection}>
        <TouchableOpacity style={styles.fuelButton}>
          <Text>请选择油枪</Text>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.dropdownIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.fuelButton, selectedFuel === '92#' && styles.selectedFuelButton]}
          onPress={() => setSelectedFuel('92#')}
        >
          <Text>92#</Text>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.paymentSection}>
        <Text style={styles.paymentInstruction}>先加油后付款 输入金额计算优惠</Text>
        <View style={styles.amountOptions}>
          <TouchableOpacity style={styles.amountButton}>
            <Text>¥100</Text>
            <Text style={styles.savingsText}>立减约 ¥3.93</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountButton}>
            <Text>¥200</Text>
            <Text style={styles.savingsText}>立减约 ¥7.87</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.amountButton}>
            <Text>¥300</Text>
            <Text style={styles.savingsText}>立减约 ¥11.81</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.discountButton}>
          <Text>立减优惠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.couponButton}>
          <Text>优惠券</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsAndConditions}>
        阅读并同意《信息服务用户服务条款》《汽车服务个人信息处理规则》
      </Text>

      <View style={styles.feedbackSection}>
        <Text style={styles.feedbackTitle}>油站印象</Text>
        <Text style={styles.feedbackInstruction}>
          加完油后，可以在订单详情页内留下你的感受哦~
        </Text>
      </View>

      <View style={styles.bottomNavigation}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  moreIcon: {
    width: 24,
    height: 24,
  },
  imageGallery: {
    position: 'relative',
  },
  stationImage: {
    width: '100%',
    height: 200,
  },
  imageCounter: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: 5,
    borderRadius: 10,
  },
  stationName: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  stationType: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
  },
  operatingHours: {
    fontSize: 14,
    color: '#666',
    margin: 10,
  },
  locationInfo: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  distance: {
    fontSize: 14,
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  mapPhoneButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  mapButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  phoneIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  pricingSection: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  discountPrice: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  infoIcon: {
    width: 20,
    height: 20,
  },
  stationPrice: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  standardPrice: {
    fontSize: 14,
    color: '#666',
  },
  fuelSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  fuelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
  },
  selectedFuelButton: {
    borderColor: 'blue',
    borderWidth: 1,
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  paymentSection: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  paymentInstruction: {
    fontSize: 14,
    marginBottom: 10,
  },
  amountOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  amountButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  savingsText: {
    fontSize: 12,
    color: 'red',
  },
  discountButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  couponButton: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  termsAndConditions: {
    fontSize: 12,
    color: '#666',
    margin: 10,
    textAlign: 'center',
  },
  feedbackSection: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  feedbackInstruction: {
    fontSize: 14,
    color: '#666',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default GasStationDetails;