import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const GasInformationScreen = () => {

  const navigation = useNavigation();



  const renderHeader = () => (

    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.goBack()}>

        <Text style={styles.backButton}>{'<'}</Text>

      </TouchableOpacity>

      <Text style={styles.headerTitle}>高德车服 · 加油</Text>

      <TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

      </TouchableOpacity>

    </View>

  );



  const renderQuickActions = () => (

    <View style={styles.quickActions}>

      {['新人专享', '调价补贴', '领券中心', '分享油礼', '油惠卡'].map((item, index) => (

        <View key={index} style={styles.quickActionItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />

          <Text style={styles.quickActionText}>{item}</Text>

          {index === 1 && <Text style={styles.hotTag}>热</Text>}

          {index === 4 && <Text style={styles.saveTag}>省</Text>}

        </View>

      ))}

    </View>

  );



  const renderPromotion = () => (

    <View style={styles.promotion}>

      <Text style={styles.promotionTitle}>天享 "油" 惠</Text>

      <Text style={styles.promotionSubtitle}>单回本，单单省！</Text>

      <TouchableOpacity style={styles.promotionButton}>

        <Text style={styles.promotionButtonText}>立即查看</Text>

      </TouchableOpacity>

    </View>

  );



  const renderCoupon = () => (

    <View style={styles.coupon}>

      <Text style={styles.couponTitle}>高德车服·加油 站超多 巨划算</Text>

      <TouchableOpacity style={styles.couponButton}>

        <Text style={styles.couponButtonText}>查看 {'>'}</Text>

      </TouchableOpacity>

      <View style={styles.couponTag}>

        <Text style={styles.couponTagText}>高德红包 满200减8</Text>

      </View>

    </View>

  );



  const renderGasStationList = () => (

    <View style={styles.gasStationList}>

      <View style={styles.gasStationListHeader}>

        <TouchableOpacity style={styles.sortButton}>

          <Text style={styles.sortButtonText}>推荐排序</Text>

          <Text style={styles.sortButtonIcon}>▼</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.gasTypeButton}>

          <Text style={styles.gasTypeButtonText}>92#</Text>

          <Text style={styles.gasTypeButtonIcon}>▼</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.brandButton}>

          <Text style={styles.brandButtonText}>全部品牌</Text>

          <Text style={styles.brandButtonIcon}>▼</Text>

        </TouchableOpacity>

      </View>

      <ScrollView horizontal style={styles.filterTags}>

        {['新人立减', '附近特惠油站', '有卫生间', '周边常去油站'].map((tag, index) => (

          <TouchableOpacity key={index} style={styles.filterTag}>

            <Text style={styles.filterTagText}>{tag}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

      {renderGasStationItem()}

      {renderGasStationItem()}

    </View>

  );



  const renderGasStationItem = () => (

    <View style={styles.gasStationItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.gasStationImage} />

      <View style={styles.gasStationInfo}>

        <Text style={styles.gasStationName}>供销石油加油站</Text>

        <Text style={styles.gasStationDistance}>1.2公里 芝罘区二马路3号2单元内四号东山名...</Text>

        <View style={styles.gasStationPriceContainer}>

          <Text style={styles.gasStationPrice}>¥7.56/L</Text>

          <Text style={styles.gasStationOriginalPrice}>加200省8 油站价¥7.87/L</Text>

        </View>

      </View>

      <TouchableOpacity style={styles.refuelButton}>

        <Text style={styles.refuelButtonText}>立即加油</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      {renderHeader()}

      {renderQuickActions()}

      {renderPromotion()}

      {renderCoupon()}

      {renderGasStationList()}

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

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    backgroundColor: '#fff',

  },

  quickActionItem: {

    alignItems: 'center',

  },

  quickActionIcon: {

    width: 40,

    height: 40,

  },

  quickActionText: {

    fontSize: 12,

    marginTop: 5,

  },

  hotTag: {

    position: 'absolute',

    top: -5,

    right: -10,

    backgroundColor: 'orange',

    color: '#fff',

    fontSize: 10,

    padding: 2,

    borderRadius: 10,

  },

  saveTag: {

    position: 'absolute',

    top: -5,

    right: -10,

    backgroundColor: 'red',

    color: '#fff',

    fontSize: 10,

    padding: 2,

    borderRadius: 10,

  },

  promotion: {

    backgroundColor: '#fff',

    margin: 10,

    padding: 15,

    borderRadius: 8,

  },

  promotionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  promotionSubtitle: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  promotionButton: {

    alignSelf: 'flex-start',

    backgroundColor: '#f0f0f0',

    padding: 5,

    borderRadius: 15,

    marginTop: 10,

  },

  promotionButtonText: {

    color: '#333',

  },

  coupon: {

    backgroundColor: '#fff',

    margin: 10,

    padding: 15,

    borderRadius: 8,

  },

  couponTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  couponButton: {

    position: 'absolute',

    right: 15,

    top: 15,

  },

  couponButtonText: {

    color: '#666',

  },

  couponTag: {

    backgroundColor: '#ffe4e1',

    alignSelf: 'flex-start',

    padding: 5,

    borderRadius: 3,

    marginTop: 10,

  },

  couponTagText: {

    color: '#ff4500',

    fontSize: 12,

  },

  gasStationList: {

    backgroundColor: '#fff',

    padding: 10,

  },

  gasStationListHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  sortButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  sortButtonText: {

    marginRight: 5,

  },

  gasTypeButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  gasTypeButtonText: {

    marginRight: 5,

  },

  brandButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  brandButtonText: {

    marginRight: 5,

  },

  filterTags: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  filterTag: {

    backgroundColor: '#f0f0f0',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

    marginRight: 10,

  },

  filterTagText: {

    fontSize: 12,

  },

  gasStationItem: {

    flexDirection: 'row',

    marginBottom: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

    paddingBottom: 15,

  },

  gasStationImage: {

    width: 80,

    height: 80,

    borderRadius: 8,

    marginRight: 10,

  },

  gasStationInfo: {

    flex: 1,

  },

  gasStationName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  gasStationDistance: {

    fontSize: 12,

    color: '#666',

    marginTop: 5,

  },

  gasStationPriceContainer: {

    flexDirection: 'row',

    alignItems: 'baseline',

    marginTop: 5,

  },

  gasStationPrice: {

    fontSize: 18,

    color: '#ff4500',

    fontWeight: 'bold',

  },

  gasStationOriginalPrice: {

    fontSize: 12,

    color: '#666',

    marginLeft: 5,

  },

  refuelButton: {

    backgroundColor: '#ff4500',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    alignSelf: 'flex-end',

  },

  refuelButtonText: {

    color: '#fff',

    fontSize: 14,

  },

});



export default GasInformationScreen;