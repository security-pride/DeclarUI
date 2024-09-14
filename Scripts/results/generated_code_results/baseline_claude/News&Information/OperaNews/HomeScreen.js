import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const handleTryAgain = () => {

    // Implement retry logic here

  };



  const handleRefresh = () => {

    // Implement refresh logic here

  };



  const handleMePress = () => {

    navigation.navigate('Me');

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>8:56</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        <Text style={styles.networkStatus}>3G</Text>

      </View>



      <View style={styles.content}>

        <Text style={styles.title}>For you</Text>

        <View style={styles.errorContainer}>

          <Text style={styles.errorText}>Connection failed</Text>

          <View style={styles.errorImageContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.errorImage} />

          </View>

          <TouchableOpacity style={styles.tryAgainButton} onPress={handleTryAgain}>

            <Text style={styles.tryAgainText}>TRY AGAIN</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={handleRefresh}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Refresh</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={handleMePress}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Me</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

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

    padding: 20,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 20,

  },

  errorContainer: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  errorText: {

    fontSize: 18,

    marginBottom: 20,

  },

  errorImageContainer: {

    width: 200,

    height: 200,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 20,

  },

  errorImage: {

    width: '100%',

    height: '100%',

    resizeMode: 'contain',

  },

  tryAgainButton: {

    backgroundColor: '#007AFF',

    paddingHorizontal: 20,

    paddingVertical: 10,

    borderRadius: 5,

  },

  tryAgainText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  footerText: {

    fontSize: 12,

  },

});



export default HomeScreen;