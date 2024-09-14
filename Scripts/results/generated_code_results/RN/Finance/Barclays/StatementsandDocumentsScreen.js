import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, SectionList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StatementsAndDocumentsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Statements');

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  const statements = [
    { date: '11 Jul', description: 'Statement 11-JUL-24 AC 90427500 13043626' },
    { date: '11 Jun', description: 'Statement 11-JUN-24 AC 90427500 13043605' },
    { date: '10 May', description: 'Statement 10-MAY-24 AC 90427500 13053150' },
    { date: '11 Apr', description: 'Statement 11-APR-24 AC 90427500 15105508' },
    { date: '11 Mar', description: 'Statement 11-MAR-24 AC 90427500 13050608' },
    { date: '09 Feb', description: 'Statement 09-FEB-24 AC 90427500 11043935' },
    { date: '11 Jan', description: 'Statement 11-JAN-24 AC 90427500 13043928' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.statementItem}>
      <View style={styles.statementContent}>
        <Text style={styles.statementDescription}>{item.description}</Text>
        <Text style={styles.statementDate}>{item.date}</Text>
      </View>
      <Text style={styles.arrowIcon}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleNavigation('More')}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Statements and documents</Text>
        <TouchableOpacity onPress={() => handleNavigation('Help')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.helpIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.accountNumber}>20-25-24 90427500</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Statements' && styles.activeTab]}
          onPress={() => setActiveTab('Statements')}
        >
          <Text style={[styles.tabText, activeTab === 'Statements' && styles.activeTabText]}>Statements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Documents' && styles.activeTab]}
          onPress={() => setActiveTab('Documents')}
        >
          <Text style={[styles.tabText, activeTab === 'Documents' && styles.activeTabText]}>Documents</Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={[{ title: '2024', data: statements }]}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

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
  backButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  helpIcon: {
    width: 24,
    height: 24,
  },
  accountNumber: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: '#007AFF',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  statementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statementContent: {
    flex: 1,
  },
  statementDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  statementDate: {
    fontSize: 12,
    color: '#666',
  },
  arrowIcon: {
    fontSize: 20,
    color: '#ccc',
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

export default StatementsAndDocumentsScreen;