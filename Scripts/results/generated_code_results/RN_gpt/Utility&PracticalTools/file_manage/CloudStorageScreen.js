import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CloudStorageScreen = ({ navigation }) => {
  const handleCardPress = (id) => {
    navigation.navigate(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cloud Storage</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => handleCardPress('CloudStorage-ListView')}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.title}>Dropbox</Text>
            <Text style={styles.subtitle}>2 items ⟐ 1.2 Gb</Text>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: '12%' }]} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardPress('CloudStorage-ListView')}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.title}>Kangxpukul@gmail.com</Text>
            <Text style={styles.subtitle}>4 items ⟐ 13.5 Gb</Text>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: '52%' }]} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardPress('CloudStorage-ListView')}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.title}>Nirwna - OneDrive</Text>
            <Text style={styles.subtitle}>5 items ⟐ 184.3 Gb</Text>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: '31%' }]} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardPress('CloudStorage-ListView')}>
          <View style={styles.card}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.title}>PIDT - OneDrive</Text>
            <Text style={styles.subtitle}>7 items ⟐ 131.1 Gb</Text>
            <View style={styles.progressBarWrapper}>
              <View style={[styles.progressBar, { width: '62%' }]} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#888',
    marginBottom: 10,
  },
  progressBarWrapper: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ddd',
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#3b82f6',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
});

export default CloudStorageScreen;