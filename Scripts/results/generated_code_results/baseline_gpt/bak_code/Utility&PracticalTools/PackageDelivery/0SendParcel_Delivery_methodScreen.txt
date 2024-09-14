import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

const SendParcel_Delivery_methodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Send parcel</Text>
      <Text style={styles.subHeader}>Delivery method</Text>

      <View style={styles.methodContainer}>
        <View style={styles.methodCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text style={styles.methodTitle}>From door to parcel center</Text>
            <Text style={styles.methodSubtitle}>1 - 2 days</Text>
          </View>
        </View>

        <View style={styles.methodCard}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text style={styles.methodTitle}>From door to door</Text>
            <Text style={styles.methodSubtitle}>2 - 3 days</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeader}>Recipient info</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput style={styles.input} defaultValue="James May" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} defaultValue="james.rn" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone number</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput style={styles.input} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  methodContainer: {
    marginVertical: 10,
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  methodSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 16,
  },
});

export default SendParcel_Delivery_methodScreen;