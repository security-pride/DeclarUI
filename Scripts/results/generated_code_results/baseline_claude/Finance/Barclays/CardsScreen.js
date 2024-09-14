import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CardsScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>STUDENT ADDITIONS</Text>

      </View>

      

      <Text style={styles.subheader}>Personal debit</Text>

      

      <View style={styles.cardContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />

        <Text style={styles.cardNumber}>**** **** **** 4011</Text>

        <Text style={styles.cardType}>VISA Debit</Text>

      </View>

      

      <View style={styles.statusContainer}>

        <View style={styles.statusDot} />

        <Text style={styles.statusText}>Active</Text>

      </View>

      

      <Text style={styles.walletStatus}>Added to Apple Wallet ✓</Text>

      

      <View style={styles.actionButtons}>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>Report damaged, lost or stolen</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>Temporary freeze</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          <Text style={styles.actionText}>View card details & PIN</Text>

        </TouchableOpacity>

      </View>

      

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>Travel money</Text>

        <TouchableOpacity style={styles.sectionItem}>

          <Text style={styles.sectionItemText}>Create travel wallet</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>

      </View>

      

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>Spending controls</Text>

        <TouchableOpacity style={styles.sectionItem}>

          <Text style={styles.sectionItemText}>Contactless limit</Text>

          <View style={styles.limitContainer}>

            <Text style={styles.limitText}>£100</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </View>

        </TouchableOpacity>

      </View>

      

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

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  subheader: {

    fontSize: 16,

    fontWeight: '500',

    padding: 16,

  },

  cardContainer: {

    alignItems: 'center',

    marginBottom: 16,

  },

  cardImage: {

    width: 300,

    height: 180,

    borderRadius: 10,

  },

  cardNumber: {

    fontSize: 18,

    fontWeight: 'bold',

    marginTop: 8,

  },

  cardType: {

    fontSize: 14,

    color: '#666',

  },

  statusContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 8,

  },

  statusDot: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: 'green',

    marginRight: 8,

  },

  statusText: {

    fontSize: 14,

  },

  walletStatus: {

    fontSize: 14,

    textAlign: 'center',

    marginBottom: 16,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 24,

  },

  actionButton: {

    alignItems: 'center',

  },

  actionIcon: {

    width: 40,

    height: 40,

    marginBottom: 8,

  },

  actionText: {

    fontSize: 12,

    textAlign: 'center',

    width: 100,

  },

  section: {

    marginBottom: 24,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: '500',

    marginLeft: 16,

    marginBottom: 8,

  },

  sectionItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#f5f5f5',

  },

  sectionItemText: {

    fontSize: 16,

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  limitContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  limitText: {

    fontSize: 16,

    marginRight: 8,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  footerItem: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  footerText: {

    fontSize: 12,

  },

});



export default CardsScreen;