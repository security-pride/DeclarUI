import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search Amazon.co.uk" />
      </View>
      <View style={styles.topMenu}>
        <Text style={styles.topMenuItem}>Prime</Text>
        <Text style={styles.topMenuItem}>Video</Text>
        <Text style={styles.topMenuItem}>Music</Text>
      </View>
      <Text style={styles.deliveryAddress}>Deliver to Muyi - St. Andrews KY16 9</Text>
      <View style={styles.featuredSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />
        <Text style={styles.featuredText}>Shop Electronics today</Text>
      </View>
      <View style={styles.dealsSection}>
        <View style={styles.dealCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
          <Text style={styles.dealText}>Recommended deal for you</Text>
        </View>
        <View style={styles.dealCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
          <Text style={styles.dealText}>4+ star deal for you</Text>
        </View>
        <View style={styles.dealCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
          <Text style={styles.dealText}>Sports & Outdoors</Text>
        </View>
      </View>
      <View style={styles.categoriesSection}>
        <Text style={styles.categoriesHeading}>Prime Day by category</Text>
        <View style={styles.categories}>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Bags & Luggage</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Office</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Automotive</Text>
          </View>
          <View style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Jewellery & Watches</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <Text style={styles.bottomNavItem}>Home</Text>
        <Text style={styles.bottomNavItem}>Profile</Text>
        <Text style={styles.bottomNavItem}>Cart</Text>
        <Text style={styles.bottomNavItem}>Menu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f6',
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: '#e0f0f8',
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    paddingLeft: 35,
  },
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e0f0f8',
    paddingBottom: 10,
  },
  topMenuItem: {
    color: '#007bff',
  },
  deliveryAddress: {
    padding: 10,
    color: '#333',
  },
  featuredSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  featuredImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  featuredText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dealsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  dealCard: {
    width: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    elevation: 2,
  },
  dealImage: {
    width: 60,
    height: 60,
  },
  dealText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  categoriesSection: {
    padding: 10,
  },
  categoriesHeading: {
    color: '#333',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: 10,
    color: '#333',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  bottomNavItem: {
    color: '#007bff',
  },
});

export default HomeScreen;