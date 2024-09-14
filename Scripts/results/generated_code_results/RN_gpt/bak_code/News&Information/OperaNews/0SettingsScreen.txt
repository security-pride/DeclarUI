import React from 'react';
import { View, Text, StyleSheet, Switch, Image, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  const [newsNotification, setNewsNotification] = React.useState(false);
  const [messageNotification, setMessageNotification] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.backIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
        <Image style={styles.statusIcon} source={require('../assets/snack-icon.png')} />
      </View>

      <Text style={styles.sectionHeader}>Features</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>News notification</Text>
        <Switch
          value={newsNotification}
          onValueChange={setNewsNotification}
          trackColor={{ false: '#767577', true: '#f4f3f4' }}
          thumbColor={newsNotification ? '#f4511e' : '#f4f3f4'}
        />
      </View>

      <Text style={styles.label}>News notification settings</Text>
      
      <View style={styles.row}>
        <Text style={styles.label}>Message</Text>
        <Switch
          value={messageNotification}
          onValueChange={setMessageNotification}
          trackColor={{ false: '#767577', true: '#f4f3f4' }}
          thumbColor={messageNotification ? '#f4511e' : '#f4f3f4'}
        />
      </View>

      <Text style={styles.label}>Messaging settings</Text>
      <Text style={styles.label}>Reader mode <Text style={styles.autoText}>Auto</Text></Text>
      <Text style={styles.label}>Clear cache</Text>
      
      <Text style={styles.sectionHeader}>Data</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Data Saving</Text>
        <Text style={styles.savingStatus}>0 B saved</Text>
      </View>

      <Text style={styles.label}>Pictureless Mode <Text style={styles.disabledText}>Disabled</Text></Text>
      
      <Text style={styles.sectionHeader}>Terms</Text>
      <Text style={styles.label}>End-user license agreement</Text>
      <Text style={styles.label}>Privacy statement</Text>
      <Text style={styles.label}>Delete my data</Text>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Me')}>
          <Image style={styles.navIcon} source={require('../assets/snack-icon.png')} />
          <Text style={styles.navLabelActive}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  statusIcon: {
    width: 24,
    height: 24,
  },
  sectionHeader: {
    fontSize: 14,
    color: '#a0a0a0',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    marginVertical: 12,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  autoText: {
    color: '#a0a0a0',
  },
  savingStatus: {
    color: '#a0a0a0',
  },
  disabledText: {
    color: 'red',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#d0d0d0',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navLabel: {
    fontSize: 12,
    color: '#000',
  },
  navLabelActive: {
    fontSize: 12,
    color: '#f4511e',
  }
});

export default SettingsScreen;