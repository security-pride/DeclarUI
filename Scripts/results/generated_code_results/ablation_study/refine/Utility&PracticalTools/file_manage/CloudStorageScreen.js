import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const CloudCard = ({ icon, name, items, size, usage }) => (

  <View style={styles.cloudCard}>

    <View style={styles.cloudCardHeader}>

      <Image source={icon} style={styles.cloudIcon} />

      <View style={styles.cloudInfo}>

        <Text style={styles.cloudName}>{name}</Text>

        <Text style={styles.cloudDetails}>{items} items • {size}</Text>

      </View>

      <TouchableOpacity>

        <Icon name="more-vert" size={24} color="#000" />

      </TouchableOpacity>

    </View>

    <View style={styles.usageBar}>

      <View style={[styles.usageProgress, { width: `${usage}%` }]} />

    </View>

    <Text style={styles.usageText}>{usage}% used</Text>

  </View>

);



const CloudStorageScreen = () => {

  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Cloud Storage</Text>

        <View style={styles.headerIcons}>

          <TouchableOpacity style={styles.headerIcon}>

            <Icon name="add" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.headerIcon}>

            <Icon name="sort" size={24} color="#000" />

          </TouchableOpacity>

          <TouchableOpacity style={styles.headerIcon}>

            <Icon name="menu" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView style={styles.content}>

        <CloudCard

          icon={require('../assets/snack-icon.png')}

          name="Dropbox"

          items="2"

          size="1.2 Gb"

          usage={12}

        />

        <CloudCard

          icon={require('../assets/snack-icon.png')}

          name="Kangxpukul@gmail.com"

          items="4"

          size="13.5 Gb"

          usage={52}

        />

        <CloudCard

          icon={require('../assets/snack-icon.png')}

          name="Nirwna - OneDrive"

          items="5"

          size="169.3 Gb"

          usage={31}

        />

        <CloudCard

          icon={require('../assets/snack-icon.png')}

          name="PIDT - OneDrive"

          items="7"

          size="131.1 Gb"

          usage={62}

        />

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="home" size={24} color="#757575" />

          <Text style={styles.tabLabel}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="folder" size={24} color="#757575" />

          <Text style={styles.tabLabel}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cloud" size={24} color="#2196F3" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="cleaning-services" size={24} color="#757575" />

          <Text style={styles.tabLabel}>Clean</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingTop: 60,

    paddingBottom: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    marginLeft: 16,

  },

  content: {

    flex: 1,

  },

  cloudCard: {

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  cloudCardHeader: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  cloudIcon: {

    width: 40,

    height: 40,

    marginRight: 12,

  },

  cloudInfo: {

    flex: 1,

  },

  cloudName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  cloudDetails: {

    fontSize: 12,

    color: '#757575',

  },

  usageBar: {

    height: 4,

    backgroundColor: '#e0e0e0',

    borderRadius: 2,

    marginTop: 8,

  },

  usageProgress: {

    height: '100%',

    backgroundColor: '#2196F3',

    borderRadius: 2,

  },

  usageText: {

    fontSize: 12,

    color: '#757575',

    marginTop: 4,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 4,

    color: '#757575',

  },

  activeTabLabel: {

    color: '#2196F3',

  },

});



export default CloudStorageScreen;