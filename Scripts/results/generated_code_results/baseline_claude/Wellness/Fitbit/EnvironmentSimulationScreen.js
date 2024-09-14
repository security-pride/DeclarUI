import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const EnvironmentSimulationScreen = () => {

  const navigation = useNavigation();

  const [isPlaying, setIsPlaying] = useState(false);



  const togglePlay = () => {

    setIsPlaying(!isPlaying);

  };



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />

      <View style={styles.overlay}>

        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>

          <Text style={styles.closeButtonText}>✕</Text>

        </TouchableOpacity>

        <View style={styles.headerIcons}>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

        </View>

        <View style={styles.content}>

          <View style={styles.calmBadge}>

            <Text style={styles.calmText}>Calm</Text>

          </View>

          <Text style={styles.title}>Nature rain on leaves</Text>

          <Text style={styles.subtitle}>用心</Text>

          <Text style={styles.description}>

            Relax with ease to the sounds of rain on leaves.

          </Text>

          <View style={styles.durationContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.clockIcon} />

            <Text style={styles.durationText}>持续时间</Text>

            <Text style={styles.durationValue}>45 分钟</Text>

          </View>

        </View>

        <TouchableOpacity style={styles.premiumButton}>

          <Text style={styles.premiumButtonText}>试用 PREMIUM</Text>

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

  backgroundImage: {

    ...StyleSheet.absoluteFillObject,

    width: '100%',

    height: '100%',

    resizeMode: 'cover',

  },

  overlay: {

    flex: 1,

    backgroundColor: 'rgba(0,0,0,0.5)',

    padding: 20,

  },

  closeButton: {

    position: 'absolute',

    top: 40,

    left: 20,

    zIndex: 1,

  },

  closeButtonText: {

    color: '#fff',

    fontSize: 30,

  },

  headerIcons: {

    flexDirection: 'row',

    justifyContent: 'flex-end',

    marginTop: 40,

  },

  icon: {

    width: 24,

    height: 24,

    marginLeft: 15,

    tintColor: '#fff',

  },

  content: {

    flex: 1,

    justifyContent: 'center',

  },

  calmBadge: {

    backgroundColor: '#4a90e2',

    alignSelf: 'flex-start',

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 15,

    marginBottom: 10,

  },

  calmText: {

    color: '#fff',

    fontSize: 14,

  },

  title: {

    color: '#fff',

    fontSize: 28,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  subtitle: {

    color: '#fff',

    fontSize: 18,

    marginBottom: 15,

  },

  description: {

    color: '#fff',

    fontSize: 16,

    marginBottom: 20,

  },

  durationContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  clockIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

    tintColor: '#fff',

  },

  durationText: {

    color: '#fff',

    fontSize: 16,

    marginRight: 10,

  },

  durationValue: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  premiumButton: {

    backgroundColor: '#4a90e2',

    paddingVertical: 15,

    borderRadius: 25,

    alignItems: 'center',

  },

  premiumButtonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default EnvironmentSimulationScreen;