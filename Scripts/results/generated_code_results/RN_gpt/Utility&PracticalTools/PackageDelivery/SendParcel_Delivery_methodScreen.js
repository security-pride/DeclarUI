import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SendParcel_Delivery_methodScreen = () => {
  const navigation = useNavigation();

  const goToParcelSize = () => {
    navigation.navigate('SendParcel_Parcel_size');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.icons}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      
      <Text style={styles.title}>Send parcel</Text>
      <Text style={styles.subtitle}>Delivery method</Text>

      <TouchableOpacity style={styles.card}>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardIcon} />
        <View>
          <Text style={styles.cardTitle}>From door to parcel center</Text>
          <Text style={styles.cardDetails}>1 - 2 days</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={goToParcelSize}>
        <Image source={require('../assets/snack-icon.png')} style={styles.cardIcon} />
        <View>
          <Text style={styles.cardTitle}>From door to door</Text>
          <Text style={styles.cardDetails}>2 - 3 days</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.recipientInfo}>Recipient info</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value="James May" />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value="james.rn" />

      <Text style={styles.label}>Phone number</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.input} />

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>My parcels</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Send parcel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>Parcel center</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginTop: 20,
  },
  cardIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
  },
  cardDetails: {
    color: '#999',
  },
  recipientInfo: {
    fontSize: 18,
    marginTop: 40,
  },
  label: {
    fontSize: 14,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SendParcel_Delivery_methodScreen;