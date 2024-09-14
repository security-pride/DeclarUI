import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderDeal = (title, imagePath) => (

    <TouchableOpacity style={styles.dealContainer}>

      <Text style={styles.dealTitle}>{title}</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

    </TouchableOpacity>

  );



  const renderPrimeDayCategory = (category) => (

    <TouchableOpacity style={styles.categoryContainer}>

      <Icon name="shopping-bag" size={24} color="#007185" />

      <Text style={styles.categoryText}>{category}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TextInput

          style={styles.searchBar}

          placeholder="Search Amazon.co.uk"

          placeholderTextColor="#888"

        />

        <TouchableOpacity>

          <Icon name="photo-camera" size={24} color="#888" />

        </TouchableOpacity>

      </View>

      <ScrollView>

        <View style={styles.topMenu}>

          {['Prime', 'Video', 'Music'].map((item) => (

            <TouchableOpacity key={item} style={styles.menuItem}>

              <Text style={styles.menuText}>{item}</Text>

            </TouchableOpacity>

          ))}

        </View>

        <TouchableOpacity style={styles.deliveryAddress}>

          <Icon name="location-on" size={18} color="#000" />

          <Text style={styles.deliveryAddressText}>Deliver to Muyi - St. Andrews KY16 9</Text>

          <Icon name="arrow-drop-down" size={18} color="#000" />

        </TouchableOpacity>

        <View style={styles.featuredSection}>

          <Text style={styles.featuredTitle}>Shop Electronics today</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.featuredImage} />

        </View>

        <View style={styles.dealsSection}>

          {renderDeal('Recommended deal for you', '../assets/snack-icon.png')}

          {renderDeal('4+ star deal for you', '../assets/snack-icon.png')}

          {renderDeal('Sports & Outdoors', '../assets/snack-icon.png')}

        </View>

        <Text style={styles.primeDayTitle}>Prime Day by category</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>

          {['Bags & Luggage', 'Office', 'Automotive', 'Jewellery & Watches'].map((category) =>

            renderPrimeDayCategory(category)

          )}

        </ScrollView>

      </ScrollView>

      <View style={styles.bottomBar}>

        <TouchableOpacity>

          <Icon name="home" size={24} color="#008296" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

          <Icon name="person" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="shopping-cart" size={24} color="#888" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="menu" size={24} color="#888" />

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

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#00CED1',

  },

  searchBar: {

    flex: 1,

    height: 40,

    backgroundColor: '#fff',

    borderRadius: 5,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  topMenu: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    backgroundColor: '#00CED1',

  },

  menuItem: {

    padding: 5,

  },

  menuText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  deliveryAddress: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#E0F2F7',

  },

  deliveryAddressText: {

    marginLeft: 5,

    flex: 1,

  },

  featuredSection: {

    padding: 10,

  },

  featuredTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  featuredImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

    borderRadius: 5,

  },

  dealsSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

  },

  dealContainer: {

    width: '32%',

  },

  dealTitle: {

    fontSize: 12,

    marginBottom: 5,

  },

  dealImage: {

    width: '100%',

    height: 100,

    resizeMode: 'cover',

    borderRadius: 5,

  },

  primeDayTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    padding: 10,

  },

  categoriesScroll: {

    paddingLeft: 10,

  },

  categoryContainer: {

    alignItems: 'center',

    marginRight: 20,

  },

  categoryText: {

    marginTop: 5,

    textAlign: 'center',

  },

  bottomBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

});



export default HomeScreen;