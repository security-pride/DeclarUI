import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tailor your offers and access exciting rewards</Text>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.menuItems}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PersonalDetails')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Personal details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FavouriteBrands')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Favourite brands</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CommunicationPreferences')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Communication preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('VIPRewardsTracker')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>VIP rewards tracker</Text>
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>New</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TransactionStatus')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Track transaction status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('GiftCardWallet')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Gift card wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SubmitCode')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Submit a code</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <Text style={styles.navText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VIP')}>
          <Text style={styles.navText}>VIP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  signInButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuItems: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
  },
  newBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginLeft: 'auto',
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AccountScreen;