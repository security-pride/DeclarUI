import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const GasStationDetailsScreen = () => {

  const navigation = useNavigation();

  const [selectedOilType, setSelectedOilType] = useState('92#');

  const [selectedAmount, setSelectedAmount] = useState(null);



  const renderHeader = () => (

    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.goBack()}>

        <Text style={styles.backButton}>{'<'}</Text>

      </TouchableOpacity>

      <TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

      </TouchableOpacity>

      <TouchableOpacity>

        <Text style={styles.menuButton}>...</Text>

      </TouchableOpacity>

    </View>

  );



  const renderImage = () => (

    <View style={styles.imageContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.stationImage} />

      <Text style={styles.imageCounter}>1/51 {'>'}</Text>

    </View>

  );



  const renderStationInfo = () => (

    <View style={styles.stationInfo}>

      <Text style={styles.stationName}>供销石油加油站</Text>

      <Text style={styles.stationType}>加油站 刚刚浏览</Text>

      <Text style={styles.stationHours}>营业时间 周一至周日 00:00-24:00 {'>'}</Text>

      <View style={styles.locationInfo}>

        <Text style={styles.distance}>距你2.5公里 驾车6分钟 芝罘区</Text>

        <Text style={styles.address}>芝罘区二马路3号2单元内四号东山名都路南</Text>

        <View style={styles.locationActions}>

          <TouchableOpacity style={styles.mapButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

            <Text style={styles.actionText}>地图</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.phoneButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

            <Text style={styles.actionText}>电话</Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>

  );



  const renderPriceInfo = () => (

    <View style={styles.priceInfo}>

      <View style={styles.priceHeader}>

        <Text style={styles.priceTitle}>优惠加油</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />

      </View>

      <View style={styles.priceDetails}>

        <Text style={styles.discountPrice}>¥7.56/L</Text>

        <Text style={styles.originalPrice}>油站价¥7.87/L</Text>

        <Text style={styles.standardPrice}>国标价¥8.07/L</Text>

        <Text style={styles.priceMore}>{'>'}</Text>

      </View>

    </View>

  );



  const renderOilSelection = () => (

    <View style={styles.oilSelection}>

      <TouchableOpacity style={styles.oilTypeButton}>

        <Text style={styles.oilTypeText}>请选择油枪 ▼</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.oilGradeButton}>

        <Text style={styles.oilGradeText}>92# ▼</Text>

      </TouchableOpacity>

    </View>

  );



  const renderPaymentInput = () => (

    <View style={styles.paymentInput}>

      <Text style={styles.paymentInputText}>¥ 先加油后付款 输入金额计算优惠</Text>

    </View>

  );



  const renderAmountButtons = () => (

    <View style={styles.amountButtons}>

      {[100, 200, 300].map((amount) => (

        <TouchableOpacity

          key={amount}

          style={[styles.amountButton, selectedAmount === amount && styles.selectedAmountButton]}

          onPress={() => setSelectedAmount(amount)}

        >

          <Text style={styles.amountButtonText}>¥{amount}</Text>

          <Text style={styles.discountText}>立减约 ¥ {(amount * 0.0393).toFixed(2)}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderDiscountOptions = () => (

    <View style={styles.discountOptions}>

      <TouchableOpacity style={styles.discountOption}>

        <Text style={styles.discountOptionText}>立减优惠</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.discountOption}>

        <Text style={styles.discountOptionText}>优惠券</Text>

      </TouchableOpacity>

    </View>

  );



  const renderFooter = () => (

    <View style={styles.footer}>

      <Text style={styles.footerText}>阅读并同意《信息服务用户服务条款》《汽车服务个人信息处理规则》</Text>

      <Text style={styles.impressionText}>油站印象 加完油后，可以在订单详情页内留下你的感受哦...</Text>

      <View style={styles.footerButtons}>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>周边</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerButtonText}>分享</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton}>

          <Text style={styles.navigationButtonText}>导航</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.routeButton}>

          <Text style={styles.routeButtonText}>路线</Text>

        </TouchableOpacity>

      </View>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      {renderHeader()}

      {renderImage()}

      {renderStationInfo()}

      {renderPriceInfo()}

      {renderOilSelection()}

      {renderPaymentInput()}

      {renderAmountButtons()}

      {renderDiscountOptions()}

      {renderFooter()}

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  backButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  menuButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  imageContainer: {

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

    backgroundColor: 'rgba(0,0,0,0.5)',

    color: '#fff',

    padding: 5,

    borderRadius: 15,

  },

  stationInfo: {

    backgroundColor: '#fff',

    padding: 15,

  },

  stationName: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  stationType: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  stationHours: {

    fontSize: 14,

    marginTop: 10,

  },

  locationInfo: {

    marginTop: 10,

  },

  distance: {

    fontSize: 14,

    color: '#666',

  },

  address: {

    fontSize: 14,

    marginTop: 5,

  },

  locationActions: {

    flexDirection: 'row',

    marginTop: 10,

  },

  mapButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 20,

  },

  phoneButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  actionIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  actionText: {

    fontSize: 14,

  },

  priceInfo: {

    backgroundColor: '#fff',

    padding: 15,

    marginTop: 10,

  },

  priceHeader: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  priceTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  infoIcon: {

    width: 16,

    height: 16,

    marginLeft: 5,

  },

  priceDetails: {

    flexDirection: 'row',

    alignItems: 'baseline',

    marginTop: 10,

  },

  discountPrice: {

    fontSize: 24,

    color: '#ff4500',

    fontWeight: 'bold',

  },

  originalPrice: {

    fontSize: 14,

    color: '#666',

    marginLeft: 10,

    textDecorationLine: 'line-through',

  },

  standardPrice: {

    fontSize: 14,

    color: '#666',

    marginLeft: 10,

  },

  priceMore: {

    fontSize: 18,

    marginLeft: 'auto',

  },

  oilSelection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

    backgroundColor: '#fff',

    marginTop: 10,

  },

  oilTypeButton: {

    flex: 1,

    backgroundColor: '#f0f0f0',

    padding: 10,

    borderRadius: 5,

    marginRight: 10,

  },

  oilGradeButton: {

    flex: 1,

    backgroundColor: '#f0f0f0',

    padding: 10,

    borderRadius: 5,

  },

  oilTypeText: {

    textAlign: 'center',

  },

  oilGradeText: {

    textAlign: 'center',

  },

  paymentInput: {

    backgroundColor: '#e6f3ff',

    padding: 15,

    marginTop: 10,

  },

  paymentInputText: {

    color: '#3399ff',

    textAlign: 'center',

  },

  amountButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

    backgroundColor: '#fff',

  },

  amountButton: {

    flex: 1,

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 5,

    padding: 10,

    marginHorizontal: 5,

  },

  selectedAmountButton: {

    borderColor: '#3399ff',

  },

  amountButtonText: {

    textAlign: 'center',

    fontSize: 16,

    fontWeight: 'bold',

  },

  discountText: {

    textAlign: 'center',

    fontSize: 12,

    color: '#666',

    marginTop: 5,

  },

  discountOptions: {

    flexDirection: 'row',

    padding: 15,

    backgroundColor: '#fff',

  },

  discountOption: {

    flex: 1,

    padding: 10,

    borderWidth: 1,

    borderColor: '#ddd',

    borderRadius: 5,

    marginHorizontal: 5,

  },

  discountOptionText: {

    textAlign: 'center',

  },

  footer: {

    backgroundColor: '#fff',

    padding: 15,

    marginTop: 10,

  },

  footerText: {

    fontSize: 12,

    color: '#666',

  },

  impressionText: {

    fontSize: 12,

    color: '#666',

    marginTop: 10,

  },

  footerButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 15,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

  },

  footerButtonText: {

    fontSize: 12,

    marginTop: 5,

  },

  navigationButton: {

    backgroundColor: '#fff',

    borderWidth: 1,

    borderColor: '#3399ff',

    paddingVertical: 5,

    paddingHorizontal: 15,

    borderRadius: 20,

  },

  navigationButtonText: {

    color: '#3399ff',

  },

  routeButton: {

    backgroundColor: '#3399ff',

    paddingVertical: 5,

    paddingHorizontal: 15,

    borderRadius: 20,

  },

  routeButtonText: {

    color: '#fff',

  },

});



export default GasStationDetailsScreen;