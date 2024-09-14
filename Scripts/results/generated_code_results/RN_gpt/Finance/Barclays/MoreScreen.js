import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoreScreen = ({ navigation }) => {
  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>More</Text>
      <TouchableOpacity onPress={() => handleNavigation('Logout')}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('StatementsandDocuments')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Statements and documents</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Cards')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Cards</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('ManageAccounts')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Manage accounts</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Subscriptions')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Subscriptions</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Spending')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Spending</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Rewards')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Rewards</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('MobilePINsentry')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Mobile PINsentry</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Settings')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.menuText}>Settings</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.lastLogin}>Last log in 21:28, 10th Jul 2024</Text>
      <TouchableOpacity>
        <Text style={styles.surveyLink}>Independent service quality survey results</Text>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => handleNavigation('Accounts')}>
          <Text style={styles.bottomNavItem}>Accounts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Products')}>
          <Text style={styles.bottomNavItem}>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('PayTransfer')}>
          <Text style={styles.bottomNavItem}>Pay & Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Help')}>
          <Text style={styles.bottomNavItem}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Home')}>
          <Text style={styles.bottomNavItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomNavItemActive}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#002550',
    textAlign: 'center',
    margin: 16,
  },
  logout: {
    color: '#0078d4',
    textAlign: 'right',
    marginRight: 16,
  },
  menu: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
    color: '#0078d4',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
  lastLogin: {
    textAlign: 'center',
    color: '#757575',
    marginVertical: 16,
  },
  surveyLink: {
    color: '#0078d4',
    textAlign: 'center',
    marginBottom: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0078d4',
    paddingVertical: 8,
  },
  bottomNavItem: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNavItemActive: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MoreScreen;