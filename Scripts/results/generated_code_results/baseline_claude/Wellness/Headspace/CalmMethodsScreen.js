import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CalmMethodsScreen = () => {

  const navigation = useNavigation();



  const SOSMethods = [

    { title: 'Feeling Overwhelmed SOS', duration: '3-4 min', description: 'Give yourself room to breathe.', image: require('../assets/snack-icon.png') },

    { title: 'Panicking SOS', duration: '3 min', description: 'Anchor your mind and body in the present.', image: require('../assets/snack-icon.png') },

    { title: 'Breathe', duration: '1-3 min', description: 'Add a sense of spaciousness to your day.', image: require('../assets/snack-icon.png') },

    { title: 'Reset', duration: '3-10 min', description: 'Find some focus and relaxation during a busy day.', image: require('../assets/snack-icon.png') },

  ];



  const renderSOSMethod = (method, index) => (

    <TouchableOpacity key={index} style={styles.methodCard}>

      <Image source={method.image} style={styles.methodImage} />

      <View style={styles.methodInfo}>

        <Text style={styles.methodTitle}>{method.title}</Text>

        <Text style={styles.methodDuration}>Meditation · {method.duration}</Text>

        <Text style={styles.methodDescription}>{method.description}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.screenTitle}>Calming Everyday Anxiety</Text>

        <Text style={styles.screenDescription}>

          Get in-the-moment support for anxious thinking, plus expert guidance for cultivating a calmer mind every day.

        </Text>

        <Text style={styles.sectionTitle}>SOS for Anxious Moments</Text>

        {SOSMethods.map(renderSOSMethod)}

        <TouchableOpacity style={styles.unlockButton}>

          <Text style={styles.unlockButtonText}>Unlock the Headspace Library</Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E2A59',

  },

  scrollContent: {

    padding: 20,

  },

  backButton: {

    position: 'absolute',

    top: 10,

    left: 10,

    zIndex: 1,

  },

  backButtonText: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

  },

  screenTitle: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 40,

    marginBottom: 10,

  },

  screenDescription: {

    color: 'white',

    fontSize: 16,

    marginBottom: 20,

  },

  sectionTitle: {

    color: 'white',

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  methodCard: {

    backgroundColor: '#2A3A7B',

    borderRadius: 10,

    marginBottom: 15,

    overflow: 'hidden',

  },

  methodImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  methodInfo: {

    padding: 15,

  },

  methodTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  methodDuration: {

    color: '#A0A0A0',

    fontSize: 14,

    marginBottom: 5,

  },

  methodDescription: {

    color: 'white',

    fontSize: 14,

  },

  unlockButton: {

    backgroundColor: '#3A4A8B',

    padding: 15,

    borderRadius: 25,

    alignItems: 'center',

    marginTop: 20,

  },

  unlockButtonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default CalmMethodsScreen;