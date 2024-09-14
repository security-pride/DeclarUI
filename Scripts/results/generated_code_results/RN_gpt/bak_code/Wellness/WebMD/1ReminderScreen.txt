import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ReminderScreen = () => {
  const navigation = useNavigation();

  const handleDonePress = () => {
    navigation.navigate('ResultDetail');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelButton}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Reminder</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.medicationInfo}>
          <ImageBackground
            source={require('../assets/snack-icon.png')}
            style={styles.pillIcon}
          />
          <Text style={styles.medicationName}>Abilify</Text>
        </View>

        <View style={styles.row}>
          <Icon name="medkit-outline" size={24} style={styles.icon} />
          <Text style={styles.label}>Dosage</Text>
          <TouchableOpacity>
            <Text style={styles.selectDosage}>Select Dosage</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Icon name="time-outline" size={24} style={styles.icon} />
          <Text style={styles.label}>Time</Text>
          <TextInput style={styles.timeInput} value="00:27" />
        </View>

        <View style={styles.row}>
          <Icon name="add-circle-outline" size={24} style={styles.icon} />
          <Text style={styles.label}>Add Another Time</Text>
          <Text style={styles.enterTime}>Enter Time</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Button title="Done" onPress={handleDonePress} style={styles.doneButton}/>
      </View>
    </View>
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
  },
  cancelButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  medicationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  pillIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  icon: {
    color: '#007AFF',
    marginRight: 8,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  selectDosage: {
    color: '#007AFF',
    fontSize: 16,
  },
  timeInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: 80,
    textAlign: 'center',
  },
  enterTime: {
    color: '#ccc',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: '#ddd',
    borderRadius: 20,
  }
});

export default ReminderScreen;