import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SettingScreen = () => {

  const navigation = useNavigation();

  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(false);



  const settingOptions = [

    { icon: '🔑', title: 'Change Password', hasChevron: true },

    { icon: '🔔', title: 'Notification', hasSwitch: true },

    { icon: '💳', title: 'Payment Method', hasChevron: true },

    { icon: '🛡️', title: 'Security', hasChevron: true },

    { icon: '👥', title: 'Invite Friend', hasChevron: true },

    { icon: '📄', title: 'Terms & Condition', hasChevron: true },

    { icon: '🔒', title: 'Privacy Policy', hasChevron: true },

  ];



  const renderSettingItem = (item, index) => (

    <TouchableOpacity

      key={index}

      style={styles.settingItem}

      onPress={() => handleSettingPress(item.title)}

    >

      <View style={styles.settingItemLeft}>

        <Text style={styles.settingIcon}>{item.icon}</Text>

        <Text style={styles.settingTitle}>{item.title}</Text>

      </View>

      {item.hasChevron && (

        <Image source={require('../assets/snack-icon.png')} style={styles.chevronIcon} />

      )}

      {item.hasSwitch && (

        <Switch

          value={isNotificationEnabled}

          onValueChange={setIsNotificationEnabled}

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"}

        />

      )}

    </TouchableOpacity>

  );



  const handleSettingPress = (title) => {

    console.log(`Pressed: ${title}`);

    // Add navigation logic here if needed

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Notification</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.profileSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <View style={styles.profileInfo}>

            <Text style={styles.profileName}>Mosarraf Hossain</Text>

            <Text style={styles.profileJob}>Product Designer</Text>

          </View>

          <TouchableOpacity style={styles.editButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.editIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.settingsContainer}>

          {settingOptions.map(renderSettingItem)}

        </View>



        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>

          <Text style={styles.logoutText}>Logout</Text>

        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  scrollContent: {

    flexGrow: 1,

  },

  profileSection: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

    marginBottom: 16,

  },

  profileImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  profileInfo: {

    marginLeft: 16,

    flex: 1,

  },

  profileName: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  profileJob: {

    fontSize: 14,

    color: '#888888',

  },

  editButton: {

    padding: 8,

  },

  editIcon: {

    width: 24,

    height: 24,

  },

  settingsContainer: {

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    marginHorizontal: 16,

    marginBottom: 16,

  },

  settingItem: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#F0F0F0',

  },

  settingItemLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  settingIcon: {

    fontSize: 20,

    marginRight: 16,

  },

  settingTitle: {

    fontSize: 16,

  },

  chevronIcon: {

    width: 24,

    height: 24,

  },

  logoutButton: {

    backgroundColor: '#007AFF',

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

    marginHorizontal: 16,

    marginBottom: 32,

  },

  logoutText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default SettingScreen;