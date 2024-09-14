import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MeScreen = () => {

  const navigation = useNavigation();



  const handleSettingsPress = () => {

    navigation.navigate('Settings');

  };



  const handleOptionPress = (screenName) => {

    navigation.navigate(screenName);

  };



  const handleHomePress = () => {

    navigation.navigate('Home');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>8:56</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        <Text style={styles.networkStatus}>3G</Text>

      </View>



      <ScrollView style={styles.content}>

        <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>



        <View style={styles.logoContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

          <Text style={styles.appName}>Opera News</Text>

        </View>



        <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('OfflineReading')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <View style={styles.optionTextContainer}>

            <Text style={styles.optionTitle}>Offline reading</Text>

            <Text style={styles.optionSubtitle}>Read news without the internet</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>



        <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('ReadLater')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.optionTitle}>Read it later</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>



        <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('BlockedUsers')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.optionTitle}>Blocked users</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>



        <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('CountryLanguage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.optionTitle}>Country & language</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>



        <TouchableOpacity style={styles.optionItem} onPress={() => handleOptionPress('DarkMode')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.optionTitle}>Dark mode</Text>

          <Text style={styles.optionValue}>Automatic</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={handleHomePress}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.footerButton, styles.activeFooterButton]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.footerIcon, styles.activeFooterIcon]} />

          <Text style={[styles.footerText, styles.activeFooterText]}>Me</Text>

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

    padding: 10,

  },

  time: {

    fontSize: 16,

  },

  icon: {

    width: 20,

    height: 20,

  },

  networkStatus: {

    fontSize: 16,

  },

  content: {

    flex: 1,

  },

  settingsButton: {

    position: 'absolute',

    top: 10,

    right: 10,

    zIndex: 1,

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  logoContainer: {

    alignItems: 'center',

    marginVertical: 20,

  },

  logo: {

    width: 60,

    height: 60,

  },

  appName: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 10,

  },

  optionItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  optionIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  optionTextContainer: {

    flex: 1,

  },

  optionTitle: {

    fontSize: 18,

  },

  optionSubtitle: {

    fontSize: 14,

    color: '#888888',

  },

  optionValue: {

    fontSize: 16,

    color: '#888888',

    marginLeft: 'auto',

    marginRight: 10,

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

    paddingVertical: 10,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

  },

  footerText: {

    fontSize: 12,

    marginTop: 5,

  },

  activeFooterButton: {

    // Add styles for active state

  },

  activeFooterIcon: {

    // Add styles for active icon

  },

  activeFooterText: {

    color: '#FF0000', // Assuming red is the active color based on the image

  },

});



export default MeScreen;