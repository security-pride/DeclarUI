import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MoreScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const menuItems = [
    { icon: 'document', text: 'Statements and documents', route: 'StatementsandDocuments' },
    { icon: 'card', text: 'Cards', route: 'Cards' },
    { icon: 'sliders', text: 'Manage accounts' },
    { icon: 'refresh', text: 'Subscriptions' },
    { icon: 'wallet', text: 'Spending' },
    { icon: 'gift', text: 'Rewards' },
    { icon: 'mobile', text: 'Mobile PINsentry' },
    { icon: 'gear', text: 'Settings' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>More</Text>
        <TouchableOpacity onPress={() => console.log('Logout pressed')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => item.route && handleNavigation(item.route)}
          >
            <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.text}</Text>
            <Text style={styles.arrowIcon}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.lastLogin}>Last log in 21:28, 10th Jul 2024</Text>
        <TouchableOpacity>
          <Text style={styles.surveyLink}>Independent service quality survey results</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigation('Home')}>
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
        <TouchableOpacity style={styles.navItem}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutText: {
    color: '#007AFF',
    fontSize: 16,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  arrowIcon: {
    fontSize: 20,
    color: '#ccc',
  },
  footer: {
    padding: 20,
  },
  lastLogin: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  surveyLink: {
    color: '#007AFF',
    fontSize: 14,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
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

export default MoreScreen;