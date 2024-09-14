import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Font } from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>amazon.co.uk</Text>
          <Text style={styles.logoSubText}>prime</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="bell" size={24} />
          <Icon name="search" size={24} />
        </View>
      </View>
      <View style={styles.userInfoContainer}>
        <Icon name="user-circle" size={40} />
        <Text style={styles.userNameText}>Hello, ml296</Text>
        <Icon name="chevron-down" size={20} />
        <Image
          source={{ uri: 'https://flags.example.com/flags/GB.png' }}
          style={styles.flag}
        />
        <Text>EN</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => navigation.navigate('Orders')} style={styles.button}><Text>Your Orders</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Buy Again</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.button}><Text>Your Account</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Your Lists</Text></TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Your Orders</Text>
          <Text style={styles.seeAllText}>See all</Text>
          <ScrollView horizontal>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
          </ScrollView>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Buy again</Text>
          <Text style={styles.seeAllText}>See all</Text>
          <ScrollView horizontal>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  logoSubText: {
    marginLeft: 5,
    fontSize: 12,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  userNameText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  flag: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    margin: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: 'blue',
    position: 'absolute',
    right: 10,
    top: 0,
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default ProfileScreen;