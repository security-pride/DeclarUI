import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const DetailsScreen = () => {

  const navigation = useNavigation();



  return (

    <View style={styles.container}>

      <ScrollView>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>

          <Text style={styles.backButtonText}>‹</Text>

        </TouchableOpacity>

        

        <View style={styles.header}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.logo} />

          <Text style={styles.headerText}>MOBILES.CO.UK</Text>

        </View>

        

        <View style={styles.content}>

          <Text style={styles.title}>

            <Text style={styles.exclusiveText}>Exclusive </Text>

            Free £50 Currys Voucher

            <Text style={styles.regularText}> with Vodafone Pay Monthly Contracts - Use with Code VC100FF for £10 off Upfront Cost of Handsets</Text>

          </Text>

          

          <View style={styles.rewardInfo}>

            <Text style={styles.rewardType}>Online Reward</Text>

            <Text style={styles.endDate}>Ends 20 Jul</Text>

          </View>

          

          <TouchableOpacity style={styles.termsButton} onPress={() => navigation.navigate('Terms')}>

            <Text style={styles.termsButtonText}>Terms and Conditions</Text>

          </TouchableOpacity>

          

          <View style={styles.vipInfo}>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.vipIcon} />

            <View style={styles.vipTextContainer}>

              <Text style={styles.vipText}>

                This is a VIP retailer! 

                <Text style={styles.vipBoldText}> VIPs get a £5 gift card for every two shops with any VIP retailer</Text>

              </Text>

            </View>

          </View>

          

          <TouchableOpacity style={styles.signInButton}>

            <Text style={styles.signInButtonText}>Sign In to Get Reward</Text>

          </TouchableOpacity>

        </View>

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

  backButton: {

    position: 'absolute',

    top: 40,

    left: 10,

    zIndex: 1,

  },

  backButtonText: {

    fontSize: 30,

    color: '#000000',

  },

  header: {

    backgroundColor: '#F0F0F0',

    paddingTop: 60,

    paddingBottom: 20,

    alignItems: 'center',

  },

  logo: {

    width: 80,

    height: 80,

    backgroundColor: '#FFC0CB',

    borderRadius: 10,

  },

  headerText: {

    marginTop: 10,

    fontSize: 16,

    fontWeight: 'bold',

  },

  content: {

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  exclusiveText: {

    color: '#FF0000',

  },

  regularText: {

    fontWeight: 'normal',

    fontSize: 18,

  },

  rewardInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  rewardType: {

    color: '#FFA500',

  },

  endDate: {

    color: '#808080',

  },

  termsButton: {

    backgroundColor: '#FFFFE0',

    padding: 15,

    borderRadius: 5,

    alignItems: 'center',

    marginBottom: 20,

  },

  termsButtonText: {

    fontWeight: 'bold',

  },

  vipInfo: {

    flexDirection: 'row',

    backgroundColor: '#F5F5F5',

    padding: 15,

    borderRadius: 10,

    marginBottom: 20,

  },

  vipIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  vipTextContainer: {

    flex: 1,

  },

  vipText: {

    fontSize: 14,

  },

  vipBoldText: {

    fontWeight: 'bold',

  },

  signInButton: {

    backgroundColor: '#FFD700',

    padding: 15,

    borderRadius: 25,

    alignItems: 'center',

  },

  signInButtonText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

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



export default DetailsScreen;