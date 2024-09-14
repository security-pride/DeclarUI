import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const StatementsandDocumentsScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Statements');



  const statements = [

    { id: '1', date: '11 Jul', title: 'Statement 11-JUL-24 AC 90427500 13043626' },

    { id: '2', date: '11 Jun', title: 'Statement 11-JUN-24 AC 90427500 13043605' },

    { id: '3', date: '10 May', title: 'Statement 10-MAY-24 AC 90427500 13053150' },

    { id: '4', date: '11 Apr', title: 'Statement 11-APR-24 AC 90427500 15105508' },

    { id: '5', date: '11 Mar', title: 'Statement 11-MAR-24 AC 90427500 13050608' },

    { id: '6', date: '09 Feb', title: 'Statement 09-FEB-24 AC 90427500 11043935' },

    { id: '7', date: '11 Jan', title: 'Statement 11-JAN-24 AC 90427500 13043928' },

  ];



  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.statementItem}>

      <View style={styles.statementDot} />

      <View style={styles.statementContent}>

        <Text style={styles.statementTitle}>{item.title}</Text>

        <Text style={styles.statementDate}>{item.date}</Text>

      </View>

      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Statements and documents</Text>

        <TouchableOpacity>

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



      <View style={styles.yearContainer}>

        <Text style={styles.yearText}>2024</Text>

      </View>



      <FlatList

        data={statements}

        renderItem={renderItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.listContainer}

      />



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Accounts</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Products')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Products</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('PayAndTransfer')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Pay & Transfer</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Help')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Help</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('More')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>More</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  helpIcon: {

    width: 24,

    height: 24,

  },

  accountNumber: {

    fontSize: 16,

    color: '#666666',

    textAlign: 'center',

    marginVertical: 16,

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  tab: {

    flex: 1,

    paddingVertical: 16,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#0066CC',

  },

  tabText: {

    fontSize: 16,

    color: '#666666',

  },

  activeTabText: {

    color: '#0066CC',

    fontWeight: 'bold',

  },

  yearContainer: {

    paddingVertical: 12,

    paddingHorizontal: 16,

    backgroundColor: '#F5F5F5',

  },

  yearText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  listContainer: {

    paddingHorizontal: 16,

  },

  statementItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  statementDot: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#0066CC',

    marginRight: 16,

  },

  statementContent: {

    flex: 1,

  },

  statementTitle: {

    fontSize: 16,

    color: '#333333',

  },

  statementDate: {

    fontSize: 14,

    color: '#666666',

    marginTop: 4,

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 8,

  },

  footerItem: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

  },

  footerText: {

    fontSize: 12,

    marginTop: 4,

  },

});



export default StatementsandDocumentsScreen;