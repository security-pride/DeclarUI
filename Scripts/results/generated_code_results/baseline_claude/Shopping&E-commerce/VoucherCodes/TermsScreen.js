import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TermsScreen = () => {

  const navigation = useNavigation();



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>‹</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Terms and Conditions</Text>

      </View>

      <ScrollView style={styles.content}>

        <Text style={styles.termsText}>

          Valid on Vodafone pay monthly contracts only.{'\n\n'}

          New customers only.{'\n\n'}

          Excludes SIM Only plans.{'\n\n'}

          VC10OFF Code: Some handsets may be excluded.{'\n\n'}

          Monthly price (including out of bundle charges for Vodafone) will increase every April by the Consumer Price Index rate of inflation + 3.9%.{'\n\n'}

          EXCLUDES KLARNA, CLEARPAY AND ANY OTHER "ORDER NOW PAY LATER" PAYMENT METHODS. Paypal Credit and Paypal Pay In 3 are also excluded types of payment.{'\n\n'}

          If you don't receive your gift card within the expected timeframe, please wait until after your trip has been completed before contacting the VoucherCodes support team.{'\n\n'}

          Excludes retailers app orders. You must make your purchase through the brands website.{'\n\n'}

          You must claim your gift card by clicking the Claim Your Reward button in your account within 6 months of the reward offer confirmation email or the gift card will be forfeited.{'\n\n'}

          To be eligible for the offer you must make your Mobiles.co.uk purchase online via VoucherCodes

        </Text>

      </ScrollView>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('VIP')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>VIP</Text>

          <View style={styles.newBadge}>

            <Text style={styles.newBadgeText}>NEW</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Account')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Account</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFD700',

    paddingTop: 40,

    paddingBottom: 15,

    paddingHorizontal: 15,

  },

  backButton: {

    marginRight: 10,

  },

  backButtonText: {

    fontSize: 30,

    color: '#000000',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#000000',

  },

  content: {

    flex: 1,

    padding: 15,

  },

  termsText: {

    fontSize: 16,

    lineHeight: 24,

    color: '#333333',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 5,

  },

  newBadge: {

    position: 'absolute',

    top: -5,

    right: -15,

    backgroundColor: '#FFD700',

    borderRadius: 10,

    paddingHorizontal: 5,

    paddingVertical: 2,

  },

  newBadgeText: {

    fontSize: 10,

    fontWeight: 'bold',

  },

});



export default TermsScreen;