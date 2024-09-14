import React from 'react';
import { View, Text, TextInput, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#000" />
        <TextInput style={styles.searchInput} placeholder="Search Amazon.co.uk" />
        <Icon name="qr-code-outline" size={25} color="#000" />
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <Text style={styles.tabText}>Prime</Text>
        <Text style={styles.tabText}>Video</Text>
        <Text style={styles.tabText}>Music</Text>
      </View>

      {/* Delivery Location */}
      <View style={styles.deliveryContainer}>
        <Icon name="location-outline" size={20} color="#000" />
        <Text style={styles.deliveryText}>Deliver to Muyi - St. Andrews KY16 9</Text>
      </View>

      {/* Shop Electronics Section */}
      <Image source={require('../assets/snack-icon.png')} style={styles.electronicsBanner} />

      {/* Recommended and Deals */}
      <View style={styles.dealsContainer}>
        <View style={styles.dealItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
          <Text style={styles.dealText}>Recommended deal for you</Text>
        </View>
        <View style={styles.dealItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
          <Text style={styles.dealText}>4+ star deal for you</Text>
        </View>
        <View style={styles.dealItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />
          <Text style={styles.dealText}>Sports & Outdoors</Text>
        </View>
      </View>

      {/* Prime Day by Category */}
      <Text style={styles.categoryTitle}>Prime Day by category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="bag-outline" size={40} color="#005EB8" />
          <Text style={styles.categoryText}>Bags & Luggage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="print-outline" size={40} color="#005EB8" />
          <Text style={styles.categoryText}>Office</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="car-outline" size={40} color="#005EB8" />
          <Text style={styles.categoryText}>Automotive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="diamond-outline" size={40} color="#005EB8" />
          <Text style={styles.categoryText}>Jewellery & Watches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="book-outline" size={40} color="#005EB8" />
          <Text style={styles.categoryText}>Books</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#f0f0f0'
  },
  searchInput: {
    flex: 1,
    marginLeft: 10
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#dff0ff'
  },
  tabText: {
    color: '#000',
    fontWeight: 'bold'
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0f7fa'
  },
  deliveryText: {
    marginLeft: 10,
    color: '#000'
  },
  electronicsBanner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginVertical: 10
  },
  dealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  },
  dealItem: {
    alignItems: 'center',
    width: 100
  },
  dealImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  dealText: {
    textAlign: 'center',
    fontSize: 12
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 20
  },
  categoryItem: {
    alignItems: 'center',
    margin: 10
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5
  }
});

export default HomeScreen;