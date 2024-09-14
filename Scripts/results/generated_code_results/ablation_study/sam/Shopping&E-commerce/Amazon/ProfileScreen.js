import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';



const ProfileScreen = () => {

  const navigation = useNavigation();

  const [language, setLanguage] = useState('EN');



  const quickAccessItems = [

    { title: 'Your Orders', screen: 'Orders' },

    { title: 'Buy Again', screen: 'Home' },

    { title: 'Your Account', screen: 'Account' },

    { title: 'Your Lists', screen: 'Home' },

  ];



  const recentOrders = [

    { image: require('../assets/snack-icon.png'), title: 'SmithPackaging Large Bubble Wrap Roll' },

    { image: require('../assets/snack-icon.png'), title: 'AYhome Travel Pillow' },

  ];



  const buyAgainItems = [

    'Highland Spring water',

    'Disposable gloves',

    'King pot noodles',

    'Toyama Koshihikari rice',

    'Jin Ramen',

    'Andrex toilet paper',

  ];



  const renderQuickAccessItem = ({ item }) => (

    <TouchableOpacity

      style={styles.quickAccessItem}

      onPress={() => navigation.navigate(item.screen)}

    >

      <Text style={styles.quickAccessText}>{item.title}</Text>

    </TouchableOpacity>

  );



  const renderRecentOrderItem = ({ item }) => (

    <View style={styles.recentOrderItem}>

      <Image source={item.image} style={styles.recentOrderImage} />

      <Text style={styles.recentOrderTitle} numberOfLines={2}>{item.title}</Text>

    </View>

  );



  const renderBuyAgainItem = ({ item }) => (

    <View style={styles.buyAgainItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.buyAgainImage} />

      <Text style={styles.buyAgainTitle} numberOfLines={2}>{item}</Text>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.greeting}>Hello, ml296</Text>

        <TouchableOpacity onPress={() => setLanguage(language === 'EN' ? 'ES' : 'EN')}>

          <Text style={styles.language}>{language}</Text>

        </TouchableOpacity>

      </View>



      <FlatList

        data={quickAccessItems}

        renderItem={renderQuickAccessItem}

        keyExtractor={(item) => item.title}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.quickAccess}

      />



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>Your Orders</Text>

        <FlatList

          data={recentOrders}

          renderItem={renderRecentOrderItem}

          keyExtractor={(item) => item.title}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionTitle}>Buy again</Text>

        <FlatList

          data={buyAgainItems}

          renderItem={renderBuyAgainItem}

          keyExtractor={(item) => item}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <View style={styles.bottomBar}>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="user" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

          <Icon name="shopping-cart" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>

          <Icon name="bars" size={24} color="#000" />

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  greeting: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  language: {

    fontSize: 16,

    color: '#007AFF',

  },

  quickAccess: {

    paddingHorizontal: 16,

    marginBottom: 16,

  },

  quickAccessItem: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 16,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 8,

  },

  quickAccessText: {

    fontSize: 14,

  },

  section: {

    marginBottom: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 16,

    marginBottom: 8,

  },

  recentOrderItem: {

    width: 120,

    marginLeft: 16,

  },

  recentOrderImage: {

    width: 120,

    height: 120,

    borderRadius: 8,

    marginBottom: 4,

  },

  recentOrderTitle: {

    fontSize: 12,

  },

  buyAgainItem: {

    width: 100,

    marginLeft: 16,

  },

  buyAgainImage: {

    width: 100,

    height: 100,

    borderRadius: 8,

    marginBottom: 4,

  },

  buyAgainTitle: {

    fontSize: 12,

  },

  bottomBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 8,

  },

});



export default ProfileScreen;