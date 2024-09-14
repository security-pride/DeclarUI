import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ConnectionsScreen = () => {

  const navigation = useNavigation();



  const handleBackPress = () => {

    navigation.goBack();

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleBackPress}>

          <Text style={styles.backButton}>{'<'}</Text>

        </TouchableOpacity>

        <Text style={styles.title}>Connections</Text>

      </View>

      

      <ScrollView style={styles.content}>

        <View style={styles.card}>

          <Image source={require('../assets/snack-icon.png')} style={styles.computerIcon} />

          <View style={styles.cardContent}>

            <Text style={styles.cardTitle}>From Computer</Text>

            <Text style={styles.cardSubtitle}>Connect computer via address bar</Text>

          </View>

        </View>



        <Text style={styles.sectionTitle}>Import from cloud storage</Text>

        

        <View style={styles.cloudOptions}>

          <TouchableOpacity style={[styles.cloudButton, styles.dropboxButton]}>

            <Text style={styles.cloudButtonText}>Dropbox</Text>

          </TouchableOpacity>

          <TouchableOpacity style={[styles.cloudButton, styles.googleDriveButton]}>

            <Text style={styles.cloudButtonText}>Google Drive</Text>

          </TouchableOpacity>

        </View>



        <Text style={styles.sectionTitle}>Add Connection</Text>



        <TouchableOpacity style={styles.connectionOption}>

          <Text style={styles.connectionOptionText}>Box</Text>

          <Text style={styles.chevron}>{'>'}</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.connectionOption}>

          <Text style={styles.connectionOptionText}>OneDrive</Text>

          <Text style={styles.chevron}>{'>'}</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.connectionOption}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.connectionOptionText}>FTP Server</Text>

          <Text style={styles.chevron}>{'>'}</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.connectionOption}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.connectionOptionText}>SFTP Server</Text>

          <Text style={styles.chevron}>{'>'}</Text>

        </TouchableOpacity>



        <TouchableOpacity style={styles.connectionOption}>

          <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />

          <Text style={styles.connectionOptionText}>Windows SMB</Text>

          <Text style={styles.chevron}>{'>'}</Text>

        </TouchableOpacity>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F2F2F7',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    paddingTop: 60,

    backgroundColor: '#FFFFFF',

  },

  backButton: {

    fontSize: 24,

    marginRight: 16,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  card: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#E8EEFF',

    borderRadius: 10,

    padding: 16,

    margin: 16,

  },

  computerIcon: {

    width: 40,

    height: 40,

    marginRight: 16,

  },

  cardContent: {

    flex: 1,

  },

  cardTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  cardSubtitle: {

    fontSize: 14,

    color: '#666',

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    margin: 16,

    marginBottom: 8,

  },

  cloudOptions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginHorizontal: 16,

  },

  cloudButton: {

    flex: 1,

    padding: 12,

    borderRadius: 8,

    alignItems: 'center',

  },

  dropboxButton: {

    backgroundColor: '#E8E8ED',

    marginRight: 8,

  },

  googleDriveButton: {

    backgroundColor: '#E9F5E9',

    marginLeft: 8,

  },

  cloudButtonText: {

    fontWeight: 'bold',

  },

  connectionOption: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  connectionOptionText: {

    flex: 1,

    fontSize: 16,

  },

  chevron: {

    fontSize: 18,

    color: '#C7C7CC',

  },

  optionIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default ConnectionsScreen;