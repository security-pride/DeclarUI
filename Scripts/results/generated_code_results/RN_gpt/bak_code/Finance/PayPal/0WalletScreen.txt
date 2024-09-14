import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.tabsContainer}>
        <Text style={styles.tabLabelActive}>Wallet</Text>
        <Text style={styles.tabLabel}>Rewards</Text>
        <Text style={styles.tabLabel}>Activity</Text>
      </View>
      
      <View style={styles.paypalBalanceContainer}>
        <Image style={styles.paypalIcon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.balanceLabel}>PayPal balance</Text>
        <Text style={styles.balanceAmount}>£0.00</Text>
      </View>
      
      <View style={styles.bankAccountsContainer}>
        <Text style={styles.bankAccountsText}>Bank accounts and cards</Text>
        <TouchableOpacity>
          <Text style={styles.addNewText}>Add new</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.cardContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.barclaysVisaLogo} />
        <Text style={styles.cardTextChinese}>信用卡 ••5871</Text>
        <Text style={styles.cardNumber}>••5871</Text>
      </View>
      
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.navIcon}>
            <Text style={styles.navLabel}>Home</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabelActive}>Wallet</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tabLabel: {
    color: '#757575',
  },
  tabLabelActive: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  paypalBalanceContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    marginHorizontal: 15,
  },
  paypalIcon: {
    width: 24,
    height: 24,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#757575',
    marginTop: 10,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  bankAccountsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  bankAccountsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  addNewText: {
    fontSize: 16,
    color: '#1E88E5',
  },
  cardContainer: {
    backgroundColor: '#1E3A8A',
    borderRadius: 8,
    marginHorizontal: 15,
    padding: 20,
    marginTop: 10,
  },
  barclaysVisaLogo: {
    height: 64,
    resizeMode: 'contain',
  },
  cardTextChinese: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 10,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navLabel: {
    fontSize: 12,
    color: '#757575',
  },
  navLabelActive: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default WalletScreen;