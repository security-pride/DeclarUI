import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.accountInfo}>
        <Text style={styles.infoText}>iPhone</Text>
        <Text style={styles.infoText}>MetaQuotes Software Corp.</Text>
        <Text style={styles.infoText}>152932025 - MetaQuotes-Demo</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.demoBanner} />
      
      {renderMenuItem('New Account', 'user-plus', () => navigation.navigate('NewAccount'))}
      {renderMenuItem('Mailbox', 'envelope', () => navigation.navigate('Mailbox'),
        'Built-in Virtual Hosting — trading robots and signals')}
      {renderMenuItem('News', 'book', () => navigation.navigate('News'),
        'UAE is poised to hit its oil capacity a year earlier')}
      {renderMenuItem('Tradays', 'calendar', () => navigation.navigate('Tradays'),
        'Economic calendar')}
      {renderMenuItem('Chat and Messages', 'comments', () => navigation.navigate('ChatAndMessages'),
        'Sign in to MQL5.community!')}
      {renderMenuItem('Traders Community', 'users', () => navigation.navigate('TradersCommunity'))}
      {renderMenuItem('MQL5 Algo Trading', 'chart-line', () => navigation.navigate('MQL5AlgoTrading'))}
      {renderMenuItem('OTP', 'key', () => navigation.navigate('OTP'),
        'One-time password generator')}
      {renderMenuItem('Interface', 'language', () => navigation.navigate('Interface'),
        'English')}
      {renderMenuItem('Charts', 'chart-bar', () => navigation.navigate('Charts'))}
      {renderMenuItem('Journal', 'book', () => navigation.navigate('Journal'))}

      <View style={styles.bottomNavBar}>
        {renderNavItem('Quotes', 'quotes', () => navigation.navigate('QuoteSimple'))}
        {renderNavItem('Chart', 'chart', () => navigation.navigate('Charts'))}
        {renderNavItem('Trade', 'trade', () => navigation.navigate('Trade'))}
        {renderNavItem('History', 'history', () => navigation.navigate('History'))}
        {renderNavItem('Settings', 'settings', () => navigation.navigate('Settings'))}
      </View>
    </View>
  );
};

const renderMenuItem = (text, icon, onPress, description = '') => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
    <View style={styles.menuTextContainer}>
      <Text style={styles.menuText}>{text}</Text>
      {description ? <Text style={styles.menuDescription}>{description}</Text> : null}
    </View>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const renderNavItem = (text, icon, onPress) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    <Text style={styles.navText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  accountInfo: {
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  demoBanner: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 50,
    height: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2c2c2e',
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  menuDescription: {
    color: '#888',
    fontSize: 14,
  },
  arrowIcon: {
    width: 15,
    height: 15,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default SettingsScreen;