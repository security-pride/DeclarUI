import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.greeting}>Good Evening, 子骆</Text>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Start your day</Text>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>How to Headspace</Text>
          <View style={styles.cardDetail}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
            <Text style={styles.duration}>Video · 2 min</Text>
          </View>
          <TouchableOpacity style={styles.moreIcon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Rooted in the Present</Text>
          <View style={styles.cardDetail}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
            <Text style={styles.duration}>Mindful Activity · 2 min</Text>
          </View>
          <TouchableOpacity style={styles.moreIcon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Enjoying the Unknown</Text>
          <View style={styles.cardDetail}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
            <Text style={styles.duration}>Today's Meditation · 3-20 min</Text>
          </View>
          <Text style={styles.meditatingCount}>327 meditating</Text>
          <TouchableOpacity style={styles.moreIcon}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />
      </View>

      <Text style={styles.sectionTitle}>Your afternoon lift</Text>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Today')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navText}>子骆</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E27',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1A1B41',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  cardContent: {
    padding: 15,
    flex: 1,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconSmall: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  duration: {
    color: '#FFFFFF',
  },
  moreIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cardImage: {
    width: 100,
    height: 100,
  },
  meditatingCount: {
    color: '#A9B9FF',
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1A1B41',
    paddingVertical: 10,
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navText: {
    color: '#FFFFFF',
  },
});

export default HomeScreen;