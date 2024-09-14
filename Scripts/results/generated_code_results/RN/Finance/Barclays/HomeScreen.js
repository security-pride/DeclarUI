import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />
          <Text style={styles.userName}>Miss Muyi Li</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
        </View>

        <View style={styles.accountInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.bankLogo} />
          <Text style={styles.accountType}>STUDENT ADDITIONS</Text>
          <Text style={styles.balance}>£3,760.06</Text>
          <Text style={styles.accountDetails}>Available balance | 20-25-24 90427500</Text>
        </View>

        <View style={styles.promotionCard}>
          <Text style={styles.promotionTitle}>Dreaming of your first home?</Text>
          <Text style={styles.promotionDescription}>You could buy with a 5% deposit. Tap to get started. T&Cs apply.</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionItem} onPress={() => handleNavigation('Cards')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Your cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Your rewards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Spending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
            <Text style={styles.actionText}>Mobile PINsentry</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sustainabilitySection}>
          <Text style={styles.sectionTitle}>Living more sustainably</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.sustainabilityImage} />
          <TouchableOpacity style={styles.arrowButton}>
            <Text style={styles.arrowButtonText}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Pay & Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Help')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('More')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  accountInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bankLogo: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  accountType: {
    fontSize: 16,
    marginBottom: 5,
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  accountDetails: {
    fontSize: 14,
    color: '#666',
  },
  promotionCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promotionDescription: {
    fontSize: 14,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  actionText: {
    fontSize: 12,
    textAlign: 'center',
  },
  sustainabilitySection: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sustainabilityImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  arrowButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
  },
});

export default HomeScreen;