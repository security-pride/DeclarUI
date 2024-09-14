import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const CalmMethodsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.timerText}>00:43</Text>
        <Text style={styles.batteryText}>94%</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Calming Everyday Anxiety</Text>
        <Text style={styles.description}>
          Get in-the-moment support for anxious thinking, plus expert guidance for cultivating a calmer mind every day.
        </Text>
        <Text style={styles.sectionTitle}>SOS for Anxious Moments</Text>
        <View style={styles.sosContainer}>
          <TouchableOpacity style={styles.sosItem}>
            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.sosImage}>
              <Text style={styles.sosTitle}>Feeling Overwhelmed SOS</Text>
              <Text style={styles.sosDetails}>Meditation · 3-4 min</Text>
              <Text style={styles.sosDescription}>Give yourself room to breathe.</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sosItem}>
            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.sosImage}>
              <Text style={styles.sosTitle}> panicking SOS</Text>
              <Text style={styles.sosDetails}>Meditation · 3 min</Text>
              <Text style={styles.sosDescription}>Anchor your mind and body in the present.</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.sosContainer}>
          <TouchableOpacity style={styles.sosItem}>
            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.sosImage}>
              <Text style={styles.sosTitle}>Breathe</Text>
              <Text style={styles.sosDetails}>Meditation · 1-3 min</Text>
              <Text style={styles.sosDescription}>Add a sense of spaciousness to your day.</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sosItem}>
            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.sosImage}>
              <Text style={styles.sosTitle}>Reset</Text>
              <Text style={styles.sosDetails}>Meditation · 3-10 min</Text>
              <Text style={styles.sosDescription}>Find some focus and relaxation during a busy day.</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <Text style={styles.unlockText}>Unlock the Headspace Library</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Text style={styles.navItemActive}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navItem}>子骆</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#0000ff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  timerText: {
    color: '#fff',
  },
  batteryText: {
    color: '#fff',
  },
  signalIcon: {
    width: 20,
    height: 20,
  },
  wifiIcon: {
    width: 20,
    height: 20,
  },
  batteryIcon: {
    width: 20,
    height: 20,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  sosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sosItem: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  sosImage: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    padding: 10,
  },
  sosTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  sosDetails: {
    fontSize: 12,
    color: '#fff',
  },
  sosDescription: {
    fontSize: 12,
    color: '#fff',
  },
  unlockText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginVertical: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    color: '#fff',
  },
  navItemActive: {
    color: '#ff0',
  },
});

export default CalmMethodsScreen;