import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const NewOptionsScreen = () => {

  const navigation = useNavigation();



  const handleGoBack = () => {

    navigation.goBack();

  };



  const handleCountryLanguagePress = () => {

    // Navigate to country & language selection screen

  };



  const handleEditChannels = () => {

    // Implement edit channels logic

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>8:59</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </View>



      <View style={styles.titleContainer}>

        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.title}>News options</Text>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Country & language</Text>

          <TouchableOpacity style={styles.countryLanguageButton} onPress={handleCountryLanguagePress}>

            <Image source={require('../assets/snack-icon.png')} style={styles.flagIcon} />

            <Text style={styles.countryLanguageText}>United States - English</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.section}>

          <View style={styles.channelsTitleContainer}>

            <Text style={styles.sectionTitle}>My channels</Text>

            <TouchableOpacity onPress={handleEditChannels}>

              <Text style={styles.editButton}>Edit</Text>

            </TouchableOpacity>

          </View>

          <Text style={styles.channelsSubtitle}>Long press to edit</Text>

          <View style={styles.channelContainer}>

            <TouchableOpacity style={styles.channelButton}>

              <Text style={styles.channelButtonText}>For you</Text>

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.section}>

          <Text style={styles.sectionTitle}>Recommended</Text>

          <Text style={styles.recommendedSubtitle}>Click to add</Text>

        </View>

      </ScrollView>

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

  titleContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  backButton: {

    padding: 5,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 10,

  },

  content: {

    flex: 1,

  },

  section: {

    padding: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  countryLanguageButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  flagIcon: {

    width: 24,

    height: 16,

    marginRight: 10,

  },

  countryLanguageText: {

    fontSize: 16,

    flex: 1,

  },

  checkIcon: {

    width: 20,

    height: 20,

    tintColor: 'red',

  },

  channelsTitleContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  editButton: {

    color: 'red',

    fontSize: 16,

  },

  channelsSubtitle: {

    fontSize: 14,

    color: '#888888',

    marginBottom: 10,

  },

  channelContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

  },

  channelButton: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 20,

    marginRight: 10,

    marginBottom: 10,

  },

  channelButtonText: {

    fontSize: 14,

  },

  recommendedSubtitle: {

    fontSize: 14,

    color: '#888888',

  },

});



export default NewOptionsScreen;