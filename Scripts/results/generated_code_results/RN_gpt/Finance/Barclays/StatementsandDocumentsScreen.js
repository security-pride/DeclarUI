import React from 'react';
import { View, Text, Button, SectionList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StatementsandDocumentsScreen = ({ navigation }) => {
  const statements = [
    { date: '11 Jul', description: 'Statement 11-JUL-24 AC 90427500 13043626' },
    { date: '11 Jun', description: 'Statement 11-JUN-24 AC 90427500 13043605' },
    { date: '10 May', description: 'Statement 10-MAY-24 AC 90427500 13053150' },
    { date: '11 Apr', description: 'Statement 11-APR-24 AC 90427500 15105508' },
    { date: '11 Mar', description: 'Statement 11-MAR-24 AC 90427500 13050608' },
    { date: '09 Feb', description: 'Statement 09-FEB-24 AC 90427500 11043935' },
    { date: '11 Jan', description: 'Statement 11-JAN-24 AC 90427500 13043928' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/snack-icon.png')} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.title}>Statements and documents</Text>
        <Text style={styles.accountNumber}>20-25-24 90427500</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.helpIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabBar}>
        <Text style={styles.activeTab}>Statements</Text>
        <Text style={styles.inactiveTab}>Documents</Text>
      </View>
      <SectionList
        sections={[{ title: '2024', data: statements }]}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.bullet} />
            <View style={styles.itemText}>
              <Text>{item.description}</Text>
              <Text>{item.date}</Text>
            </View>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrow} />
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.navItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
            <Text>Accounts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <View style={styles.navItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
            <Text>Products</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pay & Transfer')}>
          <View style={styles.navItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
            <Text>Pay & Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Help')}>
          <View style={styles.navItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
            <Text>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <View style={styles.navItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
            <Text>More</Text>
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
  },
  accountNumber: {
    fontSize: 14,
    color: '#666',
  },
  helpIcon: {
    width: 24,
    height: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  activeTab: {
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  inactiveTab: {
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  sectionHeader: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: '#007AFF',
    borderRadius: 4,
    marginRight: 16,
  },
  itemText: {
    flex: 1,
  },
  arrow: {
    width: 24,
    height: 24,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default StatementsandDocumentsScreen;