import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ConnectToComputerScreen = () => {

  const navigation = useNavigation();

  const [rotateValue] = useState(new Animated.Value(0));



  useEffect(() => {

    startRotationAnimation();

  }, []);



  const startRotationAnimation = () => {

    Animated.loop(

      Animated.timing(rotateValue, {

        toValue: 1,

        duration: 3000,

        easing: Easing.linear,

        useNativeDriver: true,

      })

    ).start();

  };



  const spin = rotateValue.interpolate({

    inputRange: [0, 1],

    outputRange: ['0deg', '360deg'],

  });



  const handleBackPress = () => {

    navigation.goBack();

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleBackPress}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.title}>Connect to Computer</Text>

      </View>



      <View style={styles.content}>

        <View style={styles.circleContainer}>

          <Animated.View

            style={[

              styles.circle,

              {

                transform: [{ rotate: spin }],

              },

            ]}

          >

            <View style={[styles.arcSegment, styles.arcYellow, { transform: [{ rotate: '0deg' }] }]} />

            <View style={[styles.arcSegment, styles.arcBlue, { transform: [{ rotate: '120deg' }] }]} />

            <View style={[styles.arcSegment, styles.arcRed, { transform: [{ rotate: '240deg' }] }]} />

          </Animated.View>

        </View>



        <Text style={styles.waitingText}>Waiting···</Text>

        <Text style={styles.instructionText}>

          Open your computer browser and enter below

        </Text>



        <View style={styles.urlContainer}>

          <Text style={styles.urlText}>http://john-312-ru</Text>

        </View>

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

    alignItems: 'center',

    padding: 16,

    paddingTop: 60,

  },

  backButton: {

    fontSize: 24,

    marginRight: 16,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 20,

  },

  circleContainer: {

    width: 200,

    height: 200,

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 40,

  },

  circle: {

    width: 150,

    height: 150,

    borderRadius: 75,

    borderWidth: 15,

    borderColor: '#F0F0F5',

    justifyContent: 'center',

    alignItems: 'center',

  },

  arcSegment: {

    position: 'absolute',

    width: 150,

    height: 150,

    borderRadius: 75,

    borderWidth: 15,

    borderColor: 'transparent',

  },

  arcYellow: {

    borderTopColor: '#FFD700',

    transform: [{ rotate: '0deg' }],

  },

  arcBlue: {

    borderTopColor: '#4169E1',

    transform: [{ rotate: '120deg' }],

  },

  arcRed: {

    borderTopColor: '#FF6347',

    transform: [{ rotate: '240deg' }],

  },

  waitingText: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  instructionText: {

    fontSize: 16,

    color: '#666',

    textAlign: 'center',

    marginBottom: 20,

  },

  urlContainer: {

    backgroundColor: '#4169E1',

    paddingVertical: 15,

    paddingHorizontal: 30,

    borderRadius: 8,

  },

  urlText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

});



export default ConnectToComputerScreen;