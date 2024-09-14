import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();

  const [muteNotifications, setMuteNotifications] = useState(false);



  const handleMuteNotifications = () => setMuteNotifications(previousState => !previousState);



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.profile}>

        <View style={styles.avatar}>

          <Text style={styles.avatarText}>AB</Text>

        </View>

        <Text style={styles.name}>Antonio Banderas</Text>

        <Text style={styles.status}>Online</Text>

      </View>



      <View style={styles.section}>

        <View style={styles.sectionItem}>

          <Text style={styles.sectionTitle}>Mute notifications</Text>

          <Switch

            trackColor={{ false: "#767577", true: "#81b0ff" }}

            thumbColor={muteNotifications ? "#f5dd4b" : "#f4f3f4"}

            ios_backgroundColor="#3e3e3e"

            onValueChange={handleMuteNotifications}

            value={muteNotifications}

          />

        </View>

        <TouchableOpacity style={styles.sectionItem}>

          <Text style={styles.sectionTitle}>Custom notifications</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.section}>

        <Text style={styles.sectionHeader}>Bio and phone number</Text>

        <Text style={styles.bio}>UI Design enthusiast</Text>

        <Text style={styles.date}>June 24, 2020</Text>

        <View style={styles.phoneContainer}>

          <Text style={styles.phone}>+62 009 1212 3131</Text>

          <Text style={styles.phoneLabel}>Mobile</Text>

          <View style={styles.phoneActions}>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

            </TouchableOpacity>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

            </TouchableOpacity>

          </View>

        </View>

      </View>



      <View style={styles.mediaSection}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <TouchableOpacity style={styles.mediaTab}>

            <Text style={[styles.mediaTabText, styles.activeMediaTab]}>Media</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaTab}>

            <Text style={styles.mediaTabText}>Documents</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaTab}>

            <Text style={styles.mediaTabText}>Links</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaTab}>

            <Text style={styles.mediaTabText}>Groups</Text>

          </TouchableOpacity>

        </ScrollView>

        <View style={styles.mediaGrid}>

          <View style={styles.mediaItem} />

          <View style={styles.mediaItem} />

          <View style={styles.mediaItem} />

          <View style={styles.mediaItem} />

        </View>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 16,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  profile: {

    alignItems: 'center',

    marginBottom: 24,

  },

  avatar: {

    width: 80,

    height: 80,

    borderRadius: 40,

    backgroundColor: '#EEEEEE',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 8,

  },

  avatarText: {

    fontSize: 32,

    fontWeight: 'bold',

  },

  name: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  status: {

    fontSize: 16,

    color: '#4CAF50',

  },

  section: {

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

    paddingVertical: 16,

  },

  sectionItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  sectionTitle: {

    fontSize: 16,

  },

  sectionHeader: {

    fontSize: 16,

    fontWeight: 'bold',

    paddingHorizontal: 16,

    marginBottom: 8,

  },

  bio: {

    fontSize: 16,

    paddingHorizontal: 16,

  },

  date: {

    fontSize: 14,

    color: '#999999',

    paddingHorizontal: 16,

    marginTop: 4,

  },

  phoneContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    marginTop: 16,

  },

  phone: {

    fontSize: 16,

    marginRight: 8,

  },

  phoneLabel: {

    fontSize: 14,

    color: '#999999',

  },

  phoneActions: {

    flexDirection: 'row',

    marginLeft: 'auto',

  },

  actionIcon: {

    width: 24,

    height: 24,

    marginLeft: 16,

  },

  mediaSection: {

    marginTop: 24,

  },

  mediaTab: {

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  mediaTabText: {

    fontSize: 16,

    color: '#999999',

  },

  activeMediaTab: {

    color: '#000000',

    fontWeight: 'bold',

  },

  mediaGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 4,

  },

  mediaItem: {

    width: '33.33%',

    aspectRatio: 1,

    padding: 4,

  },

});



export default ProfileScreen;