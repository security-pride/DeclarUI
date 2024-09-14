import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const cryptoData = [

  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: '£ 49,339.33/BTC', icon: require('../assets/snack-icon.png') },

  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: '£ 2,611.73/ETH', icon: require('../assets/snack-icon.png') },

  { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', price: '£ 55.24/LTC', icon: require('../assets/snack-icon.png') },

  { id: 'bitcoincash', name: 'Bitcoin Cash', symbol: 'BCH', price: '£ 287.75/BCH', icon: require('../assets/snack-icon.png') },

];



const CryptoItem = ({ item }) => (

  <TouchableOpacity style={styles.cryptoItem}>

    <Image source={item.icon} style={styles.cryptoIcon} />

    <View style={styles.cryptoInfo}>

      <Text style={styles.cryptoName}>{item.name}</Text>

      <Text style={styles.cryptoPrice}>{item.price}</Text>

    </View>

  </TouchableOpacity>

);



const CryptoScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Crypto</Text>

      

      <View style={styles.noticeContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />

        <Text style={styles.noticeText}>

          PayPal's crypto purchasing service is temporarily paused while we update our system to comply with new UK regulations. You can continue to hold your crypto, or you may sell if you choose.

        </Text>

      </View>



      <Text style={styles.sectionTitle}>买卖并持有加密货币</Text>



      <FlatList

        data={cryptoData}

        renderItem={({ item }) => <CryptoItem item={item} />}

        keyExtractor={item => item.id}

        style={styles.cryptoList}

      />



      <TouchableOpacity style={styles.viewAllButton}>

        <Text style={styles.viewAllText}>查看所有 ></Text>

      </TouchableOpacity>



      <Text style={styles.disclaimer}>

        这些条款仅提供一般信息，不构成财务、投资或税务方面的建议。

      </Text>



      <View style={styles.tabBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Crypto</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Send')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Payments</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Wallet</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  title: {

    fontSize: 28,

    fontWeight: 'bold',

    marginTop: 20,

    marginLeft: 20,

    marginBottom: 20,

  },

  noticeContainer: {

    backgroundColor: '#f0f0f0',

    flexDirection: 'row',

    padding: 15,

    marginHorizontal: 20,

    borderRadius: 10,

    marginBottom: 20,

  },

  infoIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  noticeText: {

    flex: 1,

    fontSize: 14,

    color: '#333',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 20,

    marginBottom: 10,

  },

  cryptoList: {

    marginHorizontal: 20,

  },

  cryptoItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  cryptoIcon: {

    width: 40,

    height: 40,

    marginRight: 15,

  },

  cryptoInfo: {

    flex: 1,

  },

  cryptoName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  cryptoPrice: {

    fontSize: 14,

    color: '#666',

  },

  viewAllButton: {

    alignSelf: 'flex-end',

    marginRight: 20,

    marginTop: 10,

  },

  viewAllText: {

    color: '#0070ba',

    fontSize: 16,

  },

  disclaimer: {

    fontSize: 12,

    color: '#666',

    marginHorizontal: 20,

    marginTop: 20,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: 'white',

  },

  tabItem: {

    alignItems: 'center',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#0070ba',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

    color: '#666',

  },

  activeTabText: {

    color: '#0070ba',

  },

});



export default CryptoScreen;