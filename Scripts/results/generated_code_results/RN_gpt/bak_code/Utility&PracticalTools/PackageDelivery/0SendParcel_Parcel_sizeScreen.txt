import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SendParcel_Parcel_sizeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timeLabel}>9:41</Text>
      <Text style={styles.title}>Send parcel</Text>
      <Text style={styles.subtitle}>Parcel size</Text>
      
      <View style={styles.parcelOption}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <View style={styles.parcelDetails}>
          <Text style={styles.parcelTitle}>Small</Text>
          <Text style={styles.parcelSpecs}>Max. 25 kg, 8 x 38 x 64 cm</Text>
          <Text style={styles.parcelFits}>Fits in an envelope</Text>
        </View>
      </View>

      <View style={styles.parcelOption}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <View style={styles.parcelDetails}>
          <Text style={styles.parcelTitle}>Medium</Text>
          <Text style={styles.parcelSpecs}>Max. 25 kg, 19 x 38 x 64 cm</Text>
          <Text style={styles.parcelFits}>Fits in a shoe box</Text>
        </View>
      </View>

      <View style={styles.parcelOption}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <View style={styles.parcelDetails}>
          <Text style={styles.parcelTitle}>Large</Text>
          <Text style={styles.parcelSpecs}>Max. 25 kg, 41 x 38 x 64 cm</Text>
          <Text style={styles.parcelFits}>Fits in a cardboard box</Text>
        </View>
      </View>

      <View style={styles.parcelOption}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <View style={styles.parcelDetails}>
          <Text style={styles.parcelTitle}>Custom</Text>
          <Text style={styles.parcelSpecs}>Max: 30kg or 300cm</Text>
          <Text style={styles.parcelFits}>Fits on a skid</Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navText}>My parcels</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.activeNavText}>Send parcel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Parcel center</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
  },
  timeLabel: {
    position: 'absolute',
    top: 10,
    left: 20,
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  parcelOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eee',
    marginBottom: 15,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  parcelDetails: {
    flexShrink: 1,
  },
  parcelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  parcelSpecs: {
    fontSize: 14,
    color: '#666',
  },
  parcelFits: {
    fontSize: 12,
    color: '#aaa',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  navText: {
    fontSize: 14,
    color: '#aaa',
  },
  activeNavText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SendParcel_Parcel_sizeScreen;