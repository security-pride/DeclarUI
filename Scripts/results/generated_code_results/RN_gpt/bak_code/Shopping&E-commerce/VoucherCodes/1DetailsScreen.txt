import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/snack-icon.png')}
        style={styles.headerBackground}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Search')} style={styles.backButton}>
          <FontAwesome name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.logo}
        />
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.offerTitle}>
          <Text style={styles.offerExclusive}>Exclusive </Text>
          Free £50 Currys Voucher with Vodafone Pay Monthly Contracts - Use with Code VC10OFF for £10 off Upfront Cost of Handsets
        </Text>
        <View style={styles.row}>
          <Text style={styles.onlineReward}>Online Reward</Text>
          <Text style={styles.expiryDate}>Ends 20 Jul</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.vipBadgeContainer}>
          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.vipIcon}
          />
          <Text style={styles.vipText}>
            This is a VIP retailer! VIPs get a £5 gift card for every two shops with any VIP retailer
          </Text>
        </View>
        <Button title="Sign In to Get Reward" color="#FFD700" onPress={() => {}} />
      </View>
      <View style={styles.bottomNav}>
        <FontAwesome name="compass" size={24} color="black" />
        <FontAwesome name="search" size={24} color="black" />
        <FontAwesome name="star" size={24} color="yellow" />
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <FontAwesome name="user" size={24} color="black" />
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
  headerBackground: {
    height: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: -25,
  },
  content: {
    padding: 20,
  },
  offerTitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  offerExclusive: {
    color: 'red',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlineReward: {
    color: 'orange',
  },
  expiryDate: {
    color: 'grey',
  },
  termsAndConditions: {
    color: 'yellow',
    marginVertical: 10,
    backgroundColor: 'lightyellow',
    padding: 10,
  },
  vipBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  vipIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  vipText: {
    flex: 1,
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#FFFFFF',
  },
});

export default DetailsScreen;