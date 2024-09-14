import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();

  const [colorEnabled, setColorEnabled] = useState(true);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);



  const toggleColor = () => setColorEnabled(previousState => !previousState);

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source="../assets/snack-icon.png" style={styles.backIcon} />

          </TouchableOpacity>

        </View>

        <View style={styles.profileInfo}>

          <Image source="../assets/snack-icon.png" style={styles.profileImage} />

          <Text style={styles.name}>Martha Craig</Text>

          <Text style={styles.subtitle}>Messenger</Text>

        </View>

        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.actionButton}>

            <Image source="../assets/snack-icon.png" style={styles.actionIcon} />

            <Text style={styles.actionText}>Audio</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Image source="../assets/snack-icon.png" style={styles.actionIcon} />

            <Text style={styles.actionText}>Video</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Image source="../assets/snack-icon.png" style={styles.actionIcon} />

            <Text style={styles.actionText}>Profile</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Image source="../assets/snack-icon.png" style={styles.actionIcon} />

            <Text style={styles.actionText}>Mute</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.section}>

          <View style={styles.row}>

            <Text style={styles.rowText}>Color</Text>

            <Switch

              trackColor={{ false: "#767577", true: "#81b0ff" }}

              thumbColor={colorEnabled ? "#f5dd4b" : "#f4f3f4"}

              onValueChange={toggleColor}

              value={colorEnabled}

            />

          </View>

          <View style={styles.row}>

            <Text style={styles.rowText}>Emoji</Text>

            <Image source="../assets/snack-icon.png" style={styles.emoji} />

          </View>

          <TouchableOpacity style={styles.row}>

            <Text style={styles.rowText}>Nicknames</Text>

            <Image source="../assets/snack-icon.png" style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>MORE ACTIONS</Text>

          <TouchableOpacity style={styles.row}>

            <Text style={styles.rowText}>Search in Conversation</Text>

            <Image source="../assets/snack-icon.png" style={styles.searchIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>

            <Text style={styles.rowText}>Create group</Text>

            <Image source="../assets/snack-icon.png" style={styles.groupIcon} />

          </TouchableOpacity>

        </View>

        <View style={styles.section}>

          <Text style={styles.sectionTitle}>PRIVACY</Text>

          <View style={styles.row}>

            <Text style={styles.rowText}>Notifications</Text>

            <View style={styles.notificationToggle}>

              <Text style={styles.toggleText}>{notificationsEnabled ? 'On' : 'Off'}</Text>

              <Switch

                trackColor={{ false: "#767577", true: "#81b0ff" }}

                thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}

                onValueChange={toggleNotifications}

                value={notificationsEnabled}

              />

            </View>

          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>

            <Text style={styles.rowText}>Ignore Messages</Text>

            <Image source="../assets/snack-icon.png" style={styles.ignoreIcon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.row}>

            <Text style={styles.rowText}>Block</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    padding: 16,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  profileInfo: {

    alignItems: 'center',

    marginBottom: 24,

  },

  profileImage: {

    width: 100,

    height: 100,

    borderRadius: 50,

    marginBottom: 12,

  },

  name: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  subtitle: {

    fontSize: 16,

    color: '#8E8E93',

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 24,

  },

  actionButton: {

    alignItems: 'center',

  },

  actionIcon: {

    width: 32,

    height: 32,

    marginBottom: 4,

  },

  actionText: {

    fontSize: 12,

  },

  section: {

    marginBottom: 24,

  },

  sectionTitle: {

    fontSize: 12,

    fontWeight: 'bold',

    color: '#8E8E93',

    marginLeft: 16,

    marginBottom: 8,

  },

  row: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  rowText: {

    fontSize: 16,

  },

  emoji: {

    width: 24,

    height: 24,

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  searchIcon: {

    width: 20,

    height: 20,

  },

  groupIcon: {

    width: 24,

    height: 24,

  },

  notificationToggle: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  toggleText: {

    marginRight: 8,

    fontSize: 16,

    color: '#8E8E93',

  },

  ignoreIcon: {

    width: 24,

    height: 24,

  },

});



export default ProfileScreen;