import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const OfflineReadingScreen = () => {

  const navigation = useNavigation();

  const [isAutoDownloadEnabled, setIsAutoDownloadEnabled] = useState(false);



  const handleGoBack = () => {

    navigation.goBack();

  };



  const handleDownloadArticles = () => {

    // Implement download logic here

  };



  const handleTrashPress = () => {

    // Implement trash functionality

  };



  const handleSettingsPress = () => {

    navigation.navigate('Settings');

  };



  const toggleAutoDownload = () => {

    setIsAutoDownloadEnabled(previousState => !previousState);

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>8:58</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </View>



      <View style={styles.titleContainer}>

        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.title}>Offline reading</Text>

        <TouchableOpacity onPress={handleTrashPress} style={styles.trashButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.trashIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={handleSettingsPress} style={styles.settingsButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.content}>

        <View style={styles.autoDownloadContainer}>

          <Text style={styles.autoDownloadText}>Automatic download on WiFi</Text>

          <Switch

            trackColor={{ false: "#767577", true: "#81b0ff" }}

            thumbColor={isAutoDownloadEnabled ? "#f5dd4b" : "#f4f3f4"}

            ios_backgroundColor="#3e3e3e"

            onValueChange={toggleAutoDownload}

            value={isAutoDownloadEnabled}

          />

        </View>



        <View style={styles.downloadSection}>

          <View style={styles.downloadTextContainer}>

            <Image source={require('../assets/snack-icon.png')} style={styles.downloadIcon} />

            <Text style={styles.downloadText}>Download articles</Text>

          </View>

          <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadArticles}>

            <Text style={styles.downloadButtonText}>DOWNLO...</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.infoContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.infoIcon} />

          <Text style={styles.infoText}>Download the latest news in 10 seconds</Text>

        </View>

      </View>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Me')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>Me</Text>

        </TouchableOpacity>

      </View>

    </View>

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

    alignItems: 'center',

    padding: 10,

  },

  time: {

    fontSize: 16,

  },

  icon: {

    width: 20,

    height: 20,

  },

  titleContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  backButton: {

    padding: 5,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    flex: 1,

    marginLeft: 10,

  },

  trashButton: {

    padding: 5,

  },

  trashIcon: {

    width: 24,

    height: 24,

  },

  settingsButton: {

    padding: 5,

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  content: {

    flex: 1,

    padding: 20,

  },

  autoDownloadContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 20,

  },

  autoDownloadText: {

    fontSize: 16,

  },

  downloadSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#E0E0E0',

    paddingVertical: 15,

  },

  downloadTextContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  downloadIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  downloadText: {

    fontSize: 16,

  },

  downloadButton: {

    backgroundColor: '#007AFF',

    paddingHorizontal: 15,

    paddingVertical: 8,

    borderRadius: 5,

  },

  downloadButtonText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  infoContainer: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

  },

  infoIcon: {

    width: 100,

    height: 100,

    marginBottom: 20,

  },

  infoText: {

    fontSize: 16,

    color: '#888888',

    textAlign: 'center',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  footerButton: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

  },

  footerText: {

    fontSize: 12,

    marginTop: 5,

  },

});



export default OfflineReadingScreen;