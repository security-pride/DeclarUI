import React from 'react';

import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const ProfileScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="notifications-outline" size={24} color="#000" />

            <View style={styles.notificationBadge} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>

            <Icon name="search" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView>

        <View style={styles.userInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

          <View style={styles.userDetails}>

            <Text style={styles.userName}>Hello, ml296</Text>

            <TouchableOpacity style={styles.languageSelector}>

              <Image source={require('../assets/snack-icon.png')} style={styles.flagIcon} />

              <Text style={styles.languageText}>EN</Text>

              <Icon name="chevron-down" size={16} color="#000" />

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.quickLinks}>

          <TouchableOpacity style={styles.quickLinkButton} onPress={() => navigation.navigate('Orders')}>

            <Text style={styles.quickLinkText}>Your Orders</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.quickLinkButton} onPress={() => navigation.navigate('BuyAgain')}>

            <Text style={styles.quickLinkText}>Buy Again</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.quickLinkButton} onPress={() => navigation.navigate('Account')}>

            <Text style={styles.quickLinkText}>Your Account</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.quickLinkButton} onPress={() => navigation.navigate('Lists')}>

            <Text style={styles.quickLinkText}>Your Lists</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Your Orders</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Orders')}>

              <Text style={styles.seeAllText}>See all</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.orderItems}>

            <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.orderImage} />

          </View>

        </View>



        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Buy again</Text>

            <TouchableOpacity onPress={() => navigation.navigate('BuyAgain')}>

              <Text style={styles.seeAllText}>See all</Text>

            </TouchableOpacity>

          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.buyAgainItems}>

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

            <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

          </ScrollView>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person" size={24} color="#00a0d6" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>

          <Icon name="cart-outline" size={24} color="#888" />

          <View style={styles.cartBadge}>

            <Text style={styles.cartBadgeText}>2</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Menu')}>

          <Icon name="menu-outline" size={24} color="#888" />

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

    padding: 10,

    backgroundColor: '#9bf3f0',

  },

  logo: {

    width: 100,

    height: 30,

    resizeMode: 'contain',

  },

  headerRight: {

    flexDirection: 'row',

  },

  iconButton: {

    marginLeft: 15,

  },

  notificationBadge: {

    position: 'absolute',

    right: -5,

    top: -5,

    backgroundColor: 'red',

    width: 10,

    height: 10,

    borderRadius: 5,

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  userDetails: {

    flex: 1,

  },

  userName: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  languageSelector: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,

  },

  flagIcon: {

    width: 20,

    height: 15,

    marginRight: 5,

  },

  languageText: {

    marginRight: 5,

  },

  quickLinks: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    padding: 15,

  },

  quickLinkButton: {

    width: '48%',

    backgroundColor: '#f0f0f0',

    padding: 15,

    borderRadius: 5,

    marginBottom: 10,

    alignItems: 'center',

  },

  quickLinkText: {

    fontWeight: 'bold',

  },

  section: {

    marginTop: 20,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 15,

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#00a0d6',

  },

  orderItems: {

    flexDirection: 'row',

    paddingHorizontal: 15,

  },

  orderImage: {

    width: 150,

    height: 150,

    marginRight: 10,

    borderRadius: 5,

  },

  buyAgainItems: {

    paddingHorizontal: 15,

  },

  buyAgainImage: {

    width: 100,

    height: 100,

    marginRight: 10,

    borderRadius: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  cartBadge: {

    position: 'absolute',

    right: -10,

    top: -5,

    backgroundColor: '#00a0d6',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  cartBadgeText: {

    color: '#fff',

    fontSize: 12,

  },

});



export default ProfileScreen;