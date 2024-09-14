import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('信用卡全家福');



  const QuickActionItem = ({ icon, title }) => (

    <TouchableOpacity style={styles.quickActionItem}>

      <View style={styles.iconContainer}>

        <Icon name={icon} size={24} color="#fff" />

      </View>

      <Text style={styles.quickActionText}>{title}</Text>

    </TouchableOpacity>

  );



  const ServiceItem = ({ icon, title, onPress }) => (

    <TouchableOpacity style={styles.serviceItem} onPress={onPress}>

      <Icon name={icon} size={24} color="#333" />

      <Text style={styles.serviceText}>{title}</Text>

    </TouchableOpacity>

  );



  const FinancialProduct = ({ name, type, annualizedReturn, period }) => (

    <View style={styles.financialProduct}>

      <Text style={styles.productName}>{name}</Text>

      <Text style={styles.productType}>{type}</Text>

      <Text style={styles.productReturn}>{annualizedReturn}</Text>

      <Text style={styles.productPeriod}>{period}</Text>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => {/* Implement scan action */}}>

          <Icon name="qr-code-scanner" size={24} color="#333" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#999" />

          <TextInput

            style={styles.searchInput}

            value={searchText}

            onChangeText={setSearchText}

            placeholder="搜索"

          />

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('CustomService')}>

          <Icon name="headset-mic" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity>

          <View style={styles.messageBadge}>

            <Text style={styles.badgeText}>99</Text>

          </View>

          <Icon name="notifications" size={24} color="#333" />

        </TouchableOpacity>

      </View>



      <View style={styles.quickActions}>

        <QuickActionItem icon="account-balance-wallet" title="朝朝宝" />

        <QuickActionItem icon="attach-money" title="借钱" />

        <QuickActionItem icon="swap-horiz" title="转账" />

        <QuickActionItem icon="assessment" title="账户总览" />

      </View>



      <View style={styles.services}>

        <ServiceItem icon="credit-card" title="信用卡" onPress={() => navigation.navigate('CreditCard')} />

        <ServiceItem icon="receipt" title="收支明细" />

        <ServiceItem icon="compare-arrows" title="他行卡转入" />

        <ServiceItem icon="location-city" title="城市服务" />

        <ServiceItem icon="local-fire-department" title="热门活动" />

        <ServiceItem icon="elderly" title="养老金融" />

        <ServiceItem icon="card-membership" title="M+会员" />

        <ServiceItem icon="currency-exchange" title="外汇购汇" />

        <ServiceItem icon="credit-card" title="银行卡" />

        <ServiceItem icon="more-horiz" title="全部" />

      </View>



      <View style={styles.notification}>

        <Icon name="mail-outline" size={20} color="#333" />

        <Text style={styles.notificationText}>小招有财: 您有一份2元现金红包待领取</Text>

      </View>



      <View style={styles.adBanner}>

        <Text style={styles.adTitle}>活钱理财</Text>

        <Text style={styles.adSubtitle}>错过少3天收益</Text>

        <Text style={styles.adDescription}>闲钱好去处 周末收益不打烊</Text>

        <TouchableOpacity style={styles.adButton}>

          <Text style={styles.adButtonText}>点击购买</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.financialProducts}>

        <Text style={styles.sectionTitle}>财富精选</Text>

        <View style={styles.productsContainer}>

          <FinancialProduct

            name="T+1到账"

            type="日添利1号A"

            annualizedReturn="2.92%"

            period="7日年化"

          />

          <FinancialProduct

            name="每季可赎"

            type="季季宝"

            annualizedReturn="3.25%"

            period="成立以来年化"

          />

        </View>

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

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    marginHorizontal: 10,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    marginLeft: 5,

  },

  messageBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

    zIndex: 1,

  },

  badgeText: {

    color: '#fff',

    fontSize: 12,

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#fff',

    paddingVertical: 15,

  },

  quickActionItem: {

    alignItems: 'center',

  },

  iconContainer: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#ff6b6b',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 5,

  },

  quickActionText: {

    fontSize: 12,

  },

  services: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    backgroundColor: '#fff',

    paddingVertical: 15,

  },

  serviceItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 15,

  },

  serviceText: {

    fontSize: 12,

    marginTop: 5,

  },

  notification: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    padding: 10,

    marginTop: 10,

  },

  notificationText: {

    marginLeft: 10,

    fontSize: 14,

  },

  adBanner: {

    backgroundColor: '#e6f7ff',

    padding: 15,

    marginTop: 10,

  },

  adTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  adSubtitle: {

    fontSize: 16,

    color: '#ff6b6b',

    marginTop: 5,

  },

  adDescription: {

    fontSize: 14,

    marginTop: 5,

  },

  adButton: {

    backgroundColor: '#ff6b6b',

    paddingVertical: 8,

    paddingHorizontal: 15,

    borderRadius: 20,

    alignSelf: 'flex-start',

    marginTop: 10,

  },

  adButtonText: {

    color: '#fff',

    fontSize: 14,

  },

  financialProducts: {

    backgroundColor: '#fff',

    padding: 15,

    marginTop: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  productsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  financialProduct: {

    width: '48%',

    backgroundColor: '#f9f9f9',

    padding: 10,

    borderRadius: 5,

  },

  productName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  productType: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  productReturn: {

    fontSize: 18,

    color: '#ff6b6b',

    marginTop: 5,

  },

  productPeriod: {

    fontSize: 12,

    color: '#999',

    marginTop: 5,

  },

});



export default HomeScreen;