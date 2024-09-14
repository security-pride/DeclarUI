import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const StorageDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Internal Storage</Text>
        <View style={styles.placeholder} />
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.progressContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.progressImage} />
          <Text style={styles.progressText}>66%</Text>
        </View>

        <View style={styles.storageInfo}>
          <Text style={styles.storageText}>Used</Text>
          <Text style={styles.storageText}>Available</Text>
          <Text style={styles.storageText}>Total</Text>
        </View>
        
        <View style={styles.storageInfo}>
          <Text style={styles.storageValue}>85 GB</Text>
          <Text style={styles.storageValue}>43 GB</Text>
          <Text style={styles.storageValue}>256 GB</Text>
        </View>

        <View style={styles.freeUpSpaceContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.freeUpSpaceIcon} />
          <View style={styles.freeUpSpaceTextContainer}>
            <Text style={styles.freeUpSpaceLabel}>Free up space</Text>
            <Text style={styles.freeUpSpaceDescription}>Go to Clean to manage and free up space</Text>
          </View>
        </View>

        {renderCategory('Apps', '1,427 items 䍘 55 GB')}
        {renderCategory('Videos', '53 items 䍘 9.9 GB')}
        {renderCategory('Document', '127 items 䍘 9.0 GB')}
        {renderCategory('Images', '1,432 items 䍘 6.8 GB')}
        {renderCategory('Audio', '421 items 䍘 116 MB')}
        {renderCategory('Audio', '421 items 䍘 116 MB')}
      </ScrollView>
    </View>
  );
};

const renderCategory = (label, details) => (
  <View style={styles.categoryContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
    <View style={styles.categoryTextContainer}>
      <Text style={styles.categoryLabel}>{label}</Text>
      <Text style={styles.categoryDetails}>{details}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 25,
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  progressImage: {
    width: 100,
    height: 100,
  },
  progressText: {
    position: 'absolute',
    top: '40%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  storageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  storageText: {
    fontSize: 16,
  },
  storageValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  freeUpSpaceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  freeUpSpaceIcon: {
    width: 30,
    height: 30,
  },
  freeUpSpaceTextContainer: {
    marginLeft: 10,
  },
  freeUpSpaceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  freeUpSpaceDescription: {
    fontSize: 14,
    color: 'grey',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryTextContainer: {
    marginLeft: 10,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryDetails: {
    fontSize: 14,
    color: 'grey',
  },
});

export default StorageDetailsScreen;