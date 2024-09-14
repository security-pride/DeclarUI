import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Entypo, MaterialIcons } from 'react-native-vector-icons';

const ParcelCenterScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Parcel centers</Text>
      </View>
      <View style={styles.mapContainer}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.mapImage}
        />
        <Entypo name="home" style={[styles.mapIcon, { top: '30%', left: '20%' }]} />
        <Entypo name="home" style={[styles.mapIcon, { top: '50%', left: '50%' }]} />
        <Entypo name="home" style={[styles.mapIcon, { top: '70%', left: '80%' }]} />
      </View>
      <View style={styles.parcelCenterCard}>
        <View style={styles.cardTop}>
          <Text style={styles.cardId}>NY0924</Text>
          <Text style={styles.cardAvailability}>Available 24/7</Text>
        </View>
        <Text style={styles.cardAddress}>
          <Text style={styles.cardAddressBold}>985 Meadow St.</Text>
          {'\n'}Staten Island, NY 10306
        </Text>
        <Text style={styles.cardStatus}>Fully occupied</Text>
        <View style={styles.cardStatusBar}>
          <View style={styles.filledStatus}></View>
        </View>
      </View>
      <View style={styles.parcelCenterCard}>
        <View style={styles.cardTop}>
          <Text style={styles.cardId}>NY0812</Text>
          <Text style={styles.cardAvailability}>Available 24/7</Text>
        </View>
        <Text style={styles.cardAddress}>
          <Text style={styles.cardAddressBold}>54 West Adams Court</Text>
          {'\n'}Rego Park, NY 11374
        </Text>
        <Text style={styles.cardStatus}>Lots of empty space</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  mapContainer: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: 200,
  },
  mapIcon: {
    position: 'absolute',
    fontSize: 24,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
  },
  parcelCenterCard: {
    backgroundColor: '#FFF',
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAvailability: {
    fontSize: 12,
    color: 'grey',
  },
  cardAddress: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  cardAddressBold: {
    fontWeight: 'bold',
  },
  cardStatus: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  cardStatusBar: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F0F0F0',
  },
  filledStatus: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFD700',
    width: '100%',
  },
});

export default ParcelCenterScreen;