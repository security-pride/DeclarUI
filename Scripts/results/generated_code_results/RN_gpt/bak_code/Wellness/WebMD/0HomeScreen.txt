import React from 'react';
import { View, Text, TextInput, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bars" size={24} style={styles.menuIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search drugs, conditions, news..."
        />
      </View>
      <View style={styles.featureContainer}>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="bullseye" size={40} color="#007AFF" />
          <Text style={styles.featureText}>Symptom Checker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="clock-o" size={40} color="#007AFF" />
          <Text style={styles.featureText}>Med Reminders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="file-text-o" size={40} color="#007AFF" />
          <Text style={styles.featureText}>Prescription Discounts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="flask" size={40} color="#007AFF" />
          <Text style={styles.featureText}>Drug Interactions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.featureItem}
          onPress={() => navigation.navigate('PillIdentifier')}
        >
          <Icon name="search" size={40} color="#007AFF" />
          <Text style={styles.featureText}>Pill Identifier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem}>
          <Icon name="line-chart" size={40} color="#007AFF" />
          <Text style={styles.featureText}>Track Symptoms</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('../assets/snack-icon.png')}
        style={styles.adBanner}
      >
        <Text style={styles.adText}>WebMDRx</Text>
        <Text style={styles.adDescription}>Save up to 80% on prescriptions</Text>
        <TouchableOpacity style={styles.adButton}>
          <Text style={styles.adButtonText}>Compare prices</Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.newsContainer}>
        <Text style={styles.newsTitle}>Top News</Text>
        <View style={styles.newsItem}>
          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.newsImage}
          >
            <Text style={styles.newsHeadline}>The Summer COVID Wave Is Spreading</Text>
            <Text style={styles.newsSubtitle}>
              The summertime spread of COVID-19 is nowhere near ending, according to newly published
            </Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#007AFF" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="stethoscope" size={24} color="#A9A9A9" />
          <Text>Doctor Finder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="user" size={24} color="#A9A9A9" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  featureItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  featureText: {
    marginTop: 5,
    textAlign: 'center',
  },
  adBanner: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
  },
  adText: {
    fontSize: 20,
    color: '#007AFF',
    marginBottom: 5,
  },
  adDescription: {
    fontSize: 12,
    textAlign: 'center',
  },
  adButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  adButtonText: {
    color: '#FFFFFF',
  },
  newsContainer: {
    marginVertical: 10,
  },
  newsTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  newsItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  newsImage: {
    height: 150,
    justifyContent: 'flex-end',
    padding: 10,
  },
  newsHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsSubtitle: {
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default HomeScreen;