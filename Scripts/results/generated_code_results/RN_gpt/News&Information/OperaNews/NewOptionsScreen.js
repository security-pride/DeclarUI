import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const NewOptionsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Text style={styles.time}>8:59</Text>
        <View style={styles.icons}>
          <Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.statusIcon} />
        </View>
      </View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>News options</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.blackCircleIcon} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Country & language</Text>
        <View style={styles.flagContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.flagIcon} />
          <Text style={styles.countryText}>United States - English</Text>
          <Icon name="arrow-drop-down" size={24} />
        </View>
      </View>
      <View style={styles.channelSection}>
        <View style={styles.myChannels}>
          <Text style={styles.channelTitle}>My channels</Text>
          <Text style={styles.editInstructions}>Long press to edit</Text>
        </View>
        <Button title="Edit" color="#ff3b3f" onPress={() => {}} />
        <TouchableOpacity style={styles.forYouButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>For you</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recommendedSection}>
        <Text style={styles.recommendedTitle}>Recommended</Text>
        <Text>Click to add</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  time: {
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
  },
  statusIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
  },
  blackCircleIcon: {
    width: 30,
    height: 30,
  },
  section: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryText: {
    fontSize: 16,
    flex: 1,
  },
  channelSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  myChannels: {
    flex: 1,
  },
  channelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editInstructions: {
    fontSize: 14,
    color: '#666',
  },
  forYouButton: {
    borderWidth: 1,
    borderColor: '#666',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  recommendedSection: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewOptionsScreen;