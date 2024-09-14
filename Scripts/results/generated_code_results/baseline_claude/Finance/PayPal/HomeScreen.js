import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

          </TouchableOpacity>

          <View style={styles.headerIcons}>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

            </TouchableOpacity>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

            </TouchableOpacity>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.balanceCard}>

          <Image source={require('../assets/snack-icon.png')} style={styles.paypalIcon} />

          <Text style={styles.balanceAmount}>£0.00</Text>

          <Text style={styles.balanceLabel}>PayPal balance</Text>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Send again</Text>

          <View style={styles.sendAgainContainer}>

            <TouchableOpacity style={styles.sendAgainItem}>

              <View style={styles.avatarCircle}>

                <Text style={styles.avatarText}>ZF</Text>

              </View>

              <Text style={styles.sendAgainName}>Zhou Fang</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.sendAgainItem}>

              <View style={[styles.avatarCircle, styles.searchCircle]}>

                <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

              </View>

              <Text style={styles.sendAgainName}>Search</Text>

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.referCard}>

          <View style={styles.referContent}>

            <Text style={styles.referTitle}>Let's go! Refer a friend to earn a £10 reward.</Text>

            <Text style={styles.referDetails}>Max 10 friends. Min spend £5 within 30 days. Ends 31/12/24. Terms apply.</Text>

            <TouchableOpacity style={styles.inviteButton}>

              <Text style={styles.inviteButtonText}>Invite friends</Text>

            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.closeButton}>

            <Text style={styles.closeButtonText}>×</Text>

          </TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.referIcon} />

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Send money internationally</Text>

        </View>



        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Send')}>

            <Text style={styles.actionButtonText}>Send</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Text style={styles.actionButtonText}>Request</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Crypto')} style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Crypto</Text>

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

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 16,

  },

  menuIcon: {

    width: 24,

    height: 24,

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 16,

  },

  balanceCard: {

    backgroundColor: 'white',

    margin: 16,

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

  },

  paypalIcon: {

    width: 40,

    height: 40,

    marginBottom: 8,

  },

  balanceAmount: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  balanceLabel: {

    color: '#666',

  },

  section: {

    marginTop: 16,

    marginHorizontal: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  sendAgainContainer: {

    flexDirection: 'row',

  },

  sendAgainItem: {

    alignItems: 'center',

    marginRight: 16,

  },

  avatarCircle: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#8a2be2',

    justifyContent: 'center',

    alignItems: 'center',

  },

  avatarText: {

    color: 'white',

    fontWeight: 'bold',

  },

  searchCircle: {

    backgroundColor: '#8a2be2',

  },

  searchIcon: {

    width: 24,

    height: 24,

    tintColor: 'white',

  },

  sendAgainName: {

    marginTop: 4,

    fontSize: 12,

  },

  referCard: {

    backgroundColor: 'white',

    margin: 16,

    padding: 16,

    borderRadius: 8,

    flexDirection: 'row',

  },

  referContent: {

    flex: 1,

  },

  referTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  referDetails: {

    fontSize: 12,

    color: '#666',

    marginBottom: 8,

  },

  inviteButton: {

    backgroundColor: '#0070ba',

    padding: 8,

    borderRadius: 4,

    alignSelf: 'flex-start',

  },

  inviteButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  closeButton: {

    position: 'absolute',

    top: 8,

    right: 8,

  },

  closeButtonText: {

    fontSize: 20,

    color: '#666',

  },

  referIcon: {

    width: 40,

    height: 40,

    marginLeft: 16,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginHorizontal: 16,

    marginTop: 16,

  },

  actionButton: {

    flex: 1,

    backgroundColor: '#0070ba',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

    marginHorizontal: 4,

  },

  actionButtonText: {

    color: 'white',

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

    backgroundColor: 'white',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabText: {

    fontSize: 10,

    marginTop: 4,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#0070ba',

  },

  activeTabText: {

    color: '#0070ba',

  },

});



export default HomeScreen;