import React from 'react';

import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const HomeScreen = ({ navigation }) => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#888" />

          <TextInput

            style={styles.searchInput}

            placeholder="Search Amazon.co.uk"

          />

          <TouchableOpacity>

            <Icon name="camera-outline" size={24} color="#888" />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView>

        <View style={styles.subHeader}>

          <TouchableOpacity style={styles.subHeaderItem}>

            <Text style={styles.subHeaderText}>Prime</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.subHeaderItem}>

            <Text style={styles.subHeaderText}>Video</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.subHeaderItem}>

            <Text style={styles.subHeaderText}>Music</Text>

          </TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.deliveryInfo}>

          <Icon name="location-outline" size={20} color="#000" />

          <Text style={styles.deliveryText}>Deliver to Muyi - St. Andrews KY16 9</Text>

          <Icon name="chevron-down-outline" size={20} color="#000" />

        </TouchableOpacity>



        <View style={styles.bannerContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

          <View style={styles.bannerTextContainer}>

            <Text style={styles.bannerTitle}>Shop</Text>

            <Text style={styles.bannerTitle}>Electronics</Text>

            <Text style={styles.bannerTitle}>today</Text>

          </View>

        </View>



        <View style={styles.dealsContainer}>

          <View style={styles.dealCard}>

            <Text style={styles.dealTitle}>Recommended deal for you</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

          </View>

          <View style={styles.dealCard}>

            <Text style={styles.dealTitle}>4+ star deal for you</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

          </View>

          <View style={styles.dealCard}>

            <Text style={styles.dealTitle}>Sports & Outdoors</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

          </View>

        </View>



        <Text style={styles.categoryTitle}>Prime Day by category</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>

          <TouchableOpacity style={styles.categoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

            <Text style={styles.categoryText}>Bags & Luggage</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

            <Text style={styles.categoryText}>Office</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

            <Text style={styles.categoryText}>Automotive</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

            <Text style={styles.categoryText}>Jewellery & Watches</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

            <Text style={styles.categoryText}>Books</Text>

          </TouchableOpacity>

        </ScrollView>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#00a0d6" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>

          <Icon name="cart-outline" size={24} color="#888" />

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

    backgroundColor: '#9bf3f0',

    padding: 10,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 5,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    marginLeft: 5,

  },

  subHeader: {

    flexDirection: 'row',

    backgroundColor: '#9bf3f0',

    paddingHorizontal: 10,

    paddingBottom: 10,

  },

  subHeaderItem: {

    marginRight: 20,

  },

  subHeaderText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  deliveryInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#e3f2fd',

    padding: 10,

  },

  deliveryText: {

    flex: 1,

    marginLeft: 5,

  },

  bannerContainer: {

    position: 'relative',

  },

  bannerImage: {

    width: '100%',

    height: 200,

  },

  bannerTextContainer: {

    position: 'absolute',

    top: 20,

    left: 20,

  },

  bannerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#000',

  },

  dealsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

  },

  dealCard: {

    width: '30%',

    backgroundColor: '#f0f0f0',

    borderRadius: 5,

    padding: 10,

  },

  dealTitle: {

    fontSize: 12,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  dealImage: {

    width: '100%',

    height: 100,

    resizeMode: 'cover',

    borderRadius: 5,

  },

  categoryTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    padding: 10,

  },

  categoryScroll: {

    paddingHorizontal: 10,

  },

  categoryItem: {

    alignItems: 'center',

    marginRight: 20,

  },

  categoryIcon: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  categoryText: {

    marginTop: 5,

    textAlign: 'center',

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

});



export default HomeScreen;