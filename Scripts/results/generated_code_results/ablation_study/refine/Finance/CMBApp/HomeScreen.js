import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('信用卡全家福');



  const QuickAccessItem = ({ icon, label }) => (

    <TouchableOpacity style={styles.quickAccessItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />

      <Text style={styles.quickAccessLabel}>{label}</Text>

    </TouchableOpacity>

  );



  const FinancialProductItem = ({ title, subtitle, rate, period }) => (

    <TouchableOpacity style={styles.financialProductItem}>

      <Text style={styles.financialProductTitle}>{title}</Text>

      <Text style={styles.financialProductSubtitle}>{subtitle}</Text>

      <View style={styles.financialProductDetails}>

        <Text style={styles.financialProductRate}>{rate}</Text>

        <Text style={styles.financialProductPeriod}>{period}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Icon name="search" size={24} color="#999" />

          <TextInput

            style={styles.searchInput}

            value={searchQuery}

            onChangeText={setSearchQuery}

            placeholder="Search..."

          />

        </View>

        <TouchableOpacity>

          <Icon name="headset-mic" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationBadge}>

          <Icon name="notifications" size={24} color="#333" />

          <View style={styles.badge}>

            <Text style={styles.badgeText}>99</Text>

          </View>

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.quickAccessContainer}>

          <QuickAccessItem icon="account-balance-wallet" label="朝朝宝" />

          <QuickAccessItem icon="attach-money" label="借钱" />

          <QuickAccessItem icon="swap-horiz" label="转账" />

          <QuickAccessItem icon="assessment" label="账户总览" />

        </View>



        <View style={styles.quickAccessContainer}>

          <QuickAccessItem icon="credit-card" label="信用卡" />

          <QuickAccessItem icon="receipt" label="收支明细" />

          <QuickAccessItem icon="compare-arrows" label="他行卡转入" />

          <QuickAccessItem icon="location-city" label="城市服务" />

          <QuickAccessItem icon="whatshot" label="热门活动" />

        </View>



        <View style={styles.bannerContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>财富精选</Text>

            <TouchableOpacity>

              <Text style={styles.sectionMore}>更多</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            horizontal

            data={[

              { title: 'T+1到账', subtitle: '日添利1号A', rate: '2.92%', period: '7日年化' },

              { title: '每季可赎', subtitle: '季季宝 鑫鼎日开三个月', rate: '3.25%', period: '成立以来年化' },

            ]}

            renderItem={({ item }) => <FinancialProductItem {...item} />}

            keyExtractor={(item) => item.title}

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#FF6347" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="assessment" size={24} color="#999" />

          <Text style={styles.tabLabel}>一周回顾</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="account-balance" size={24} color="#999" />

          <Text style={styles.tabLabel}>财富</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="store" size={24} color="#999" />

          <Text style={styles.tabLabel}>生活</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person" size={24} color="#999" />

          <Text style={styles.tabLabel}>我的</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FF6347',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    borderRadius: 20,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    marginLeft: 10,

  },

  notificationBadge: {

    position: 'relative',

  },

  badge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  badgeText: {

    color: 'white',

    fontSize: 12,

  },

  quickAccessContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    padding: 10,

    backgroundColor: '#FFF',

    marginBottom: 10,

  },

  quickAccessItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 10,

  },

  quickAccessIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  quickAccessLabel: {

    fontSize: 12,

    textAlign: 'center',

  },

  bannerContainer: {

    padding: 10,

  },

  bannerImage: {

    width: '100%',

    height: 100,

    borderRadius: 10,

  },

  sectionContainer: {

    backgroundColor: '#FFF',

    padding: 10,

    marginBottom: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  sectionMore: {

    color: '#999',

  },

  financialProductItem: {

    width: 200,

    marginRight: 10,

    padding: 10,

    backgroundColor: '#F8F8F8',

    borderRadius: 10,

  },

  financialProductTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  financialProductSubtitle: {

    fontSize: 14,

    color: '#666',

    marginBottom: 10,

  },

  financialProductDetails: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  financialProductRate: {

    fontSize: 18,

    color: '#FF6347',

    fontWeight: 'bold',

  },

  financialProductPeriod: {

    fontSize: 12,

    color: '#999',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#EEE',

    backgroundColor: '#FFF',

  },

  tabItem: {

    alignItems: 'center',

    padding: 10,

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 5,

    color: '#999',

  },

  activeTabLabel: {

    color: '#FF6347',

  },

});



export default HomeScreen;