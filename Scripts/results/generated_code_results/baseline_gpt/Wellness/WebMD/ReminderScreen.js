import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ReminderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Reminder</Text>
      </View>
      
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.medicineName}>Abilify</Text>
        </View>
        
        <View style={styles.cardRow}>
          <View style={styles.cardIcon}>
            <Icon name="edit-3" size={22} color="#007AFF" />
          </View>
          <Text style={styles.cardLabel}>Dosage</Text>
          <TouchableOpacity>
            <Text style={styles.actionText}>Select Dosage</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardRow}>
          <View style={styles.cardIcon}>
            <Icon name="clock" size={22} color="#007AFF" />
          </View>
          <Text style={styles.cardLabel}>Time</Text>
          <TextInput 
            style={styles.timeInput} 
            value="00:27" 
            editable={false}
          />
        </View>

        <View style={styles.cardRow}>
          <View style={styles.cardIcon}>
            <Icon name="clock" size={22} color="#007AFF" />
          </View>
          <Text style={styles.cardLabel}>Add Another Time</Text>
          <TouchableOpacity>
            <Text style={styles.actionText}>Enter Time</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
  },
  cancelText: {
    color: '#007AFF',
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  cardIcon: {
    marginRight: 12,
  },
  cardLabel: {
    fontSize: 16,
    flex: 1,
  },
  actionText: {
    color: '#007AFF',
    fontSize: 16,
  },
  timeInput: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    minWidth: 60,
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: '#D3D3D3',
    marginHorizontal: 16,
    marginVertical: 32,
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  doneText: {
    fontSize: 18,
    color: '#000000',
  },
});

export default ReminderScreen;