import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reward Offers</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <View style={styles.cardContent}>
          <Text style={styles.exclusiveText}><Text style={styles.bold}>Exclusive</Text> Great Savings with Prime Day Deals Plus a £3...</Text>
          <Text style={styles.onlineReward}>Online <Text style={styles.reward}>Reward</Text></Text>
          <Text style={styles.expiryDate}>Ends 22 Jul</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <View style={styles.cardContent}>
          <Text style={styles.exclusiveText}><Text style={styles.bold}>Exclusive</Text> Free £10 Currys Voucher with Orders Over £...</Text>
          <Text style={styles.onlineReward}>Online <Text style={styles.reward}>Reward</Text></Text>
          <Text style={styles.expiryDate}>Ends 1 Aug</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <View style={styles.cardContent}>
          <Text style={styles.exclusiveText}><Text style={styles.bold}>Exclusive</Text> Free £3 Amazon Voucher with Orders Over £...</Text>
          <Text style={styles.onlineReward}>Online <Text style={styles.reward}>Reward</Text></Text>
          <Text style={styles.expiryDate}>Ends today</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <View style={styles.cardContent}>
          <Text style={styles.exclusiveText}><Text style={styles.bold}>Exclusive</Text> 15% off Selected Hotel Bookings: Free £5 A...</Text>
          <Text style={styles.onlineReward}>Online <Text style={styles.reward}>Reward</Text></Text>
          <Text style={styles.expiryDate}>Ends 1 Aug</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navItem}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>VIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    padding: 10,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF9F6',
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  exclusiveText: {
    fontSize: 16,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
    color: '#DA291C',
  },
  onlineReward: {
    fontSize: 14,
    color: '#000',
  },
  reward: {
    color: '#FFA500',
  },
  expiryDate: {
    fontSize: 12,
    color: '#DA291C',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 14,
    color: '#000',
  },
});

export default MoreScreen;