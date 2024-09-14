import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {

  const [isNewsNotificationEnabled, setNewsNotificationEnabled] = React.useState(false);
  const toggleNewsNotification = () => setNewsNotificationEnabled(previousState => !previousState);

  const [isMessageEnabled, setMessageEnabled] = React.useState(false);
  const toggleMessage = () => setMessageEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features</Text>

        <View style={styles.item}>
          <Text style={styles.itemText}>News notification</Text>
          <Switch
            onValueChange={toggleNewsNotification}
            value={isNewsNotificationEnabled}
            trackColor={{ false: '#767577', true: '#f58376' }}
            thumbColor={isNewsNotificationEnabled ? '#f44336' : '#f4f3f4'}
          />
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>News notification settings</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Text style={styles.itemText}>Message</Text>
          <Switch
            onValueChange={toggleMessage}
            value={isMessageEnabled}
            trackColor={{ false: '#767577', true: '#f58376' }}
            thumbColor={isMessageEnabled ? '#f44336' : '#f4f3f4'}
          />
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Messaging settings</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Text style={styles.itemText}>Reader mode</Text>
          <Text style={styles.itemSubText}>Auto</Text>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Clear cache</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data</Text>

        <View style={styles.item}>
          <Text style={styles.itemText}>Data Saving</Text>
          <Text style={styles.itemSubText}>0 B saved</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Text style={styles.itemText}>Pictureless Mode</Text>
          <Text style={styles.itemSubText}>Disabled</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>End-user license agreement</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacy statement</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Delete my data</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#9CA3AF',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  itemText: {
    fontSize: 16,
  },
  itemSubText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  }
});

export default SettingsScreen;