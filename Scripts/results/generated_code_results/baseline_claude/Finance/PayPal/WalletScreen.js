import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const WalletScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.tabContainer}>

          <Text style={styles.activeTab}>Wallet</Text>

          <Text style={styles.inactiveTab}>Rewards</Text>

          <Text style={styles.inactiveTab}>Activity</Text>

        </View>



        <View style={styles.balanceCard}>

          <View style={styles.balanceHeader}>

            <Image source={require('../assets/snack-icon.png')} style={styles.paypalLogo} />

            <Text style={styles.balanceHeaderText}>PayPal balance</Text>

            <Text style={styles.balanceAmount}>£0.00</Text>

          </View>

          <Text style={styles.totalBalance}>£0.00</Text>

        </View>



        <View style={styles.accountsSection}>

          <View style={styles.accountsHeader}>

            <Text style={styles.accountsTitle}>Bank accounts and cards</Text>

            <TouchableOpacity>

              <Text style={styles.addNewText}>Add new</Text>

            </TouchableOpacity>

          </View>



          <TouchableOpacity style={styles.cardContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Crypto')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Crypto</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Send')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Payments</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>Wallet</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  tabContainer: {

    flexDirection: 'row',

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  activeTab: {

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 20,

    color: '#000',

    borderBottomWidth: 2,

    borderBottomColor: '#000',

    paddingBottom: 8,

  },

  inactiveTab: {

    fontSize: 18,

    marginRight: 20,

    color: '#666',

  },

  balanceCard: {

    backgroundColor: 'white',

    margin: 16,

    padding: 16,

    borderRadius: 8,

  },

  balanceHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  paypalLogo: {

    width: 24,

    height: 24,

    marginRight: 8,

  },

  balanceHeaderText: {

    flex: 1,

    fontSize: 16,

  },

  balanceAmount: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  totalBalance: {

    fontSize: 32,

    fontWeight: 'bold',

  },

  accountsSection: {

    marginHorizontal: 16,

  },

  accountsHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  accountsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  addNewText: {

    color: '#0070ba',

    fontSize: 16,

  },

  cardContainer: {

    backgroundColor: 'white',

    borderRadius: 8,

    overflow: 'hidden',

  },

  cardImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: 'white',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#666',

  },

  activeTabItem: {

    borderTopWidth: 2,

    borderTopColor: '#0070ba',

  },

  activeTabIcon: {

    tintColor: '#0070ba',

  },

  activeTabText: {

    color: '#0070ba',

  },

});



export default WalletScreen;