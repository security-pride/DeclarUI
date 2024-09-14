import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          <Text style={styles.highlight}>Exclusive </Text>
          Free £50 Currys Voucher with Vodafone Pay Monthly Contracts - Use with
          Code <Text style={styles.bold}>VC10OFF for £10</Text> off Upfront Cost of Handsets
        </Text>
        <View style={styles.rewardContainer}>
          <Text style={styles.online}>Online </Text>
          <Text style={styles.reward}>Reward</Text>
        </View>
        <Text style={styles.endsText}>Ends 20 Jul</Text>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>Terms and Conditions</Text>
      </View>
      <View style={styles.vipContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.vipIcon} />
        <Text style={styles.vipText}>
          This is a VIP retailer! <Text style={styles.bold}>VIPs</Text> get a £5 gift card for every two
          shops with any VIP retailer
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In to Get Reward</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#666',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: '#333',
  },
  highlight: {
    color: '#e63946',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  rewardContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  online: {
    fontSize: 16,
    color: '#aaa',
  },
  reward: {
    fontSize: 16,
    color: '#ff8c00',
  },
  endsText: {
    textAlign: 'right',
    fontSize: 16,
    color: '#aaa',
  },
  termsContainer: {
    backgroundColor: '#fcf6bd',
    padding: 15,
  },
  termsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vipContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ededed',
    borderRadius: 10,
    margin: 20,
  },
  vipIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  vipText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  button: {
    backgroundColor: '#ffd700',
    paddingVertical: 15,
    marginHorizontal: 40,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;