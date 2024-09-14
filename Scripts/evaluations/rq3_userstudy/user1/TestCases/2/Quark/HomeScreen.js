import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderMenuItem = (icon, label, onPress) => (

    <TouchableOpacity style={styles.menuItem} onPress={onPress}>

      <Image source={icon} style={styles.menuIcon} />

      <Text style={styles.menuLabel}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.content}>

        <Text style={styles.logo}>Quark</Text>

        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            placeholder="Search..."

            placeholderTextColor="#999"

          />

          <TouchableOpacity style={styles.voiceButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.voiceIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.cameraButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />

          </TouchableOpacity>

        </View>

        <View style={styles.menuGrid}>

          {renderMenuItem(require('../assets/snack-icon.png'), '夸克日报', () => navigation.navigate('News'))}

          {renderMenuItem(require('../assets/snack-icon.png'), '精选', () => navigation.navigate('Select'))}

          {renderMenuItem(require('../assets/snack-icon.png'), '夸克学习', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), '夸克扫描王', () => navigation.navigate('Scanner'))}

          {renderMenuItem(require('../assets/snack-icon.png'), '夸克网盘', () => navigation.navigate('OnlineStorage'))}

          {renderMenuItem(require('../assets/snack-icon.png'), '夸克文档', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), '更多', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), '省钱集市', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), 'AI工具', () => {})}

        </View>

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  content: {

    flex: 1,

    paddingHorizontal: 20,

    paddingTop: 20,

  },

  logo: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

    marginBottom: 20,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#222',

    borderRadius: 20,

    paddingHorizontal: 15,

    marginBottom: 20,

  },

  searchInput: {

    flex: 1,

    height: 40,

    color: '#fff',

  },

  voiceButton: {

    padding: 5,

  },

  cameraButton: {

    padding: 5,

    marginLeft: 5,

  },

  voiceIcon: {

    width: 20,

    height: 20,

    tintColor: '#fff',

  },

  cameraIcon: {

    width: 20,

    height: 20,

    tintColor: '#fff',

  },

  menuGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  menuItem: {

    width: '22%',

    alignItems: 'center',

    marginBottom: 20,

  },

  menuIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  menuLabel: {

    fontSize: 12,

    color: '#fff',

    textAlign: 'center',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 25,

    height: 25,

    tintColor: '#fff',

  },

});



export default HomeScreen;