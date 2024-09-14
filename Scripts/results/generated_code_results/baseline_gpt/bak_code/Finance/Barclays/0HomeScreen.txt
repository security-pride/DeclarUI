import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="person-circle-outline" size={30} color="#0080ff" />
        <Text style={styles.headerText}>Miss Muyi Li</Text>
        <Icon name="notifications-outline" size={30} color="#0080ff" />
      </View>
      
      <View style={styles.balanceSection}>
        <Icon name="logo-apple" size={40} color="#0080ff" />
        <Text style={styles.balanceTitle}>STUDENT ADDITIONS</Text>
        <Text style={styles.balanceAmount}>£3,760.06</Text>
        <Text style={styles.balanceDetails}>Available balance | 20-25-24 90427500</Text>
      </View>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Dreaming of your first home?</Text>
        <Text style={styles.cardSubtitle}>
          You could buy with a 5% deposit. Tap to get started. T&Cs apply.
        </Text>
      </TouchableOpacity>

      <View style={styles.iconsRow}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="card-outline" size={40} color="#0080ff" />
          <Text style={styles.iconText}>Your cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="gift-outline" size={40} color="#0080ff" />
          <Text style={styles.iconText}>Your rewards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="wallet-outline" size={40} color="#0080ff" />
          <Text style={styles.iconText}>Spending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="keypad-outline" size={40} color="#0080ff" />
          <Text style={styles.iconText}>Mobile PINsentry</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sustainableSection}>
        <Text style={styles.sectionTitle}>Living more sustainably</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0080ff',
  },
  balanceSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#0080ff',
    marginTop: 8,
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#444444',
    marginTop: 8,
  },
  balanceDetails: {
    fontSize: 14,
    color: '#999999',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0080ff',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 8,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    marginTop: 4,
    color: '#0080ff',
  },
  sustainableSection: {
    backgroundColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444444',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default HomeScreen;