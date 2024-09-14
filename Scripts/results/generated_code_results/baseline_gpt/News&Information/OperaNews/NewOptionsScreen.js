import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewOptionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} />
        <Text style={styles.headerTitle}>News options</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Country & language</Text>
        <View style={styles.row}>
          <Image source={require('../assets/snack-icon.png')} style={styles.flag} />
          <Text style={styles.languageText}>United States - English</Text>
          <TouchableOpacity>
            <Icon name="arrow-drop-down" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>My channels</Text>
          <Text style={styles.editText}>Edit</Text>
        </View>
        <Text style={styles.subText}>Long press to edit</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>For you</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <Text style={styles.subText}>Click to add</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  flag: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  languageText: {
    flex: 1,
    fontSize: 16,
  },
  editText: {
    color: 'red',
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default NewOptionsScreen;