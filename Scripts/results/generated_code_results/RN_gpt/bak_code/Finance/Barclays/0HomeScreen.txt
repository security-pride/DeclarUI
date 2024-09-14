import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
        <Text style={styles.userName}>Miss Muyi Li</Text>
        <Pressable onPress={() => navigation.navigate('Notifications')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
        </Pressable>
      </View>

      <View style={styles.accountOverview}>
        <Text style={styles.accountType}>STUDENT ADDITIONS</Text>
        <Text style={styles.balance}>£3,760.06</Text>
        <Text style={styles.availableBalance}>Available balance | 20-25-24  90427500</Text>
      </View>

      <Pressable style={styles.promotionCard} onPress={() => navigation.navigate('PromotionDetails')}>
        <Text style={styles.promotionTitle}>Dreaming of your first home?</Text>
        <Text style={styles.promotionDescription}>
          You could buy with a 5% deposit. Tap to get started. T&Cs apply.
        </Text>
      </Pressable>

      <View style={styles.quickActions}>
        <View style={styles.quickAction}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text style={styles.quickActionText}>Your cards</Text>
        </View>
        <View style={styles.quickAction}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text style={styles.quickActionText}>Your rewards</Text>
        </View>
        <View style={styles.quickAction}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text style={styles.quickActionText}>Spending</Text>
        </View>
        <View style={styles.quickAction}>
          <Image source={require('../assets/snack-icon.png')} style={styles.quickActionIcon} />
          <Text style={styles.quickActionText}>Mobile PINsentry</Text>
        </View>
      </View>

      <View style={styles.sustainabilitySection}>
        <Text style={styles.sustainabilityTitle}>Living more sustainably</Text>
        <ImageBackground
          source={require('../assets/snack-icon.png')}
          style={styles.sustainabilityImage}
        />
      </View>

      <View style={styles.bottomNav}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Accounts</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Products')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Products</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Pay & Transfer')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Pay & Transfer</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Help')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>Help</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('More')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavText}>More</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  profileIcon: {
    width: 24,
    height: 24,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  accountOverview: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  accountType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0195C2',
    marginBottom: 4,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  availableBalance: {
    fontSize: 14,
    color: '#666666',
  },
  promotionCard: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  promotionDescription: {
    fontSize: 14,
    color: '#666666',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  quickAction: {
    alignItems: 'center',
  },
  quickActionIcon: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  quickActionText: {
    fontSize: 12,
    color: '#333333',
  },
  sustainabilitySection: {
    alignItems: 'center',
    margin: 16,
  },
  sustainabilityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  sustainabilityImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#0075BE',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  bottomNavText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginTop: 4,
  },
});

export default HomeScreen;