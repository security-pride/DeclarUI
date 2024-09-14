import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ParcelOption = ({ image, title, maxDetails, description }) => (
  <View style={styles.optionContainer}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.maxDetails}>{maxDetails}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </View>
);

const SendParcel_Parcel_sizeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Send parcel</Text>
      <Text style={styles.subHeader}>Parcel size</Text>
      <ScrollView>
        <ParcelOption
          image={require('../assets/snack-icon.png')}
          title="Small"
          maxDetails="Max. 25 kg, 8 x 38 x 64 cm"
          description="Fits in an envelope"
        />
        <ParcelOption
          image={require('../assets/snack-icon.png')}
          title="Medium"
          maxDetails="Max. 25 kg, 19 x 38 x 64 cm"
          description="Fits in a shoe box"
        />
        <ParcelOption
          image={require('../assets/snack-icon.png')}
          title="Large"
          maxDetails="Max. 25 kg, 41 x 38 x 64 cm"
          description="Fits in a cardboard box"
        />
        <ParcelOption
          image={require('../assets/snack-icon.png')}
          title="Custom"
          maxDetails="Max: 30kg or 300cm"
          description="Fits on a skid"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  maxDetails: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  description: {
    fontSize: 12,
    color: '#888',
  },
});

export default SendParcel_Parcel_sizeScreen;