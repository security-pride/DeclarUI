import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const QuickActionButton = ({ icon, label }) => (

    <TouchableOpacity style={styles.quickActionButton}>

      <View style={styles.quickActionIcon}>

        <Image source={icon} style={styles.icon} />

      </View>

      <Text style={styles.quickActionLabel}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>Miss Muyi Li</Text>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

          </TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.accountCard}>

          <View style={styles.accountInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.bankLogo} />

            <Text style={styles.accountType}>STUDENT ADDITIONS</Text>

          </View>

          <Text style={styles.accountBalance}>£3,760.06</Text>

          <Text style={styles.accountDetails}>Available balance | 20-25-24 90427500</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>



        <View style={styles.promotionCard}>

          <TouchableOpacity style={styles.closeButton}>

            <Text style={styles.closeButtonText}>×</Text>

          </TouchableOpacity>

          <Text style={styles.promotionTitle}>Dreaming of your first home?</Text>

          <Text style={styles.promotionText}>

            You could buy with a 5% deposit. Tap to get started. T&Cs apply.

          </Text>

        </View>



        <View style={styles.quickActions}>

          <QuickActionButton icon={require('../assets/snack-icon.png')} label="Your cards" />

          <QuickActionButton icon={require('../assets/snack-icon.png')} label="Your rewards" />

          <QuickActionButton icon={require('../assets/snack-icon.png')} label="Spending" />

          <QuickActionButton icon={require('../assets/snack-icon.png')} label="Mobile PINsentry" />

        </View>



        <View style={styles.sustainabilitySection}>

          <Text style={styles.sectionTitle}>Living more sustainably</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.sustainabilityImage} />

          <TouchableOpacity style={styles.learnMoreButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.learnMoreIcon} />

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={[styles.footerItem, styles.activeFooterItem]}>

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

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 20,

  },

  profileIcon: {

    width: 30,

    height: 30,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  notificationIcon: {

    width: 30,

    height: 30,

  },

  accountCard: {

    backgroundColor: '#f0f8ff',

    margin: 20,

    borderRadius: 10,

    padding: 20,

  },

  accountInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  bankLogo: {

    width: 30,

    height: 30,

    marginRight: 10,

  },

  accountType: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#0066cc',

  },

  accountBalance: {

    fontSize: 28,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  accountDetails: {

    fontSize: 14,

    color: '#666',

  },

  arrowIcon: {

    position: 'absolute',

    right: 20,

    top: '50%',

    width: 20,

    height: 20,

  },

  promotionCard: {

    backgroundColor: '#f0f0f0',

    margin: 20,

    borderRadius: 10,

    padding: 20,

  },

  closeButton: {

    position: 'absolute',

    right: 10,

    top: 10,

  },

  closeButtonText: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  promotionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  promotionText: {

    fontSize: 14,

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  quickActionButton: {

    alignItems: 'center',

  },

  quickActionIcon: {

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: '#0066cc',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 5,

  },

  icon: {

    width: 30,

    height: 30,

    tintColor: '#fff',

  },

  quickActionLabel: {

    fontSize: 12,

    textAlign: 'center',

  },

  sustainabilitySection: {

    margin: 20,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  sustainabilityImage: {

    width: '100%',

    height: 200,

    borderRadius: 10,

  },

  learnMoreButton: {

    position: 'absolute',

    right: 10,

    bottom: 10,

    backgroundColor: '#fff',

    borderRadius: 15,

    padding: 5,

  },

  learnMoreIcon: {

    width: 20,

    height: 20,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

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

  },

  activeFooterItem: {

    borderTopWidth: 2,

    borderTopColor: '#0066cc',

  },

});



export default HomeScreen;