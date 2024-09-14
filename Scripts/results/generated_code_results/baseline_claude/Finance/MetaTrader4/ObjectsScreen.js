import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const ObjectsScreen = () => {

  const navigation = useNavigation();



  const renderObjectIcon = (iconName) => (

    <TouchableOpacity style={styles.objectIcon}>

      <Icon name={iconName} size={24} color="#007AFF" />

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="chevron-back" size={28} color="#FFFFFF" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Objects</Text>

        <TouchableOpacity style={styles.trashButton}>

          <Icon name="trash-outline" size={24} color="#FFFFFF" />

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.addObjectButton}>

        <Text style={styles.addObjectText}>Add Object</Text>

        <Icon name="chevron-forward" size={20} color="#8E8E93" />

      </TouchableOpacity>



      <View style={styles.objectIconsContainer}>

        {renderObjectIcon('analytics')}

        {renderObjectIcon('remove')}

        {renderObjectIcon('pencil')}

        {renderObjectIcon('triangle')}

        {renderObjectIcon('ellipsis-vertical')}

        {renderObjectIcon('arrow-forward')}

      </View>



      <Text style={styles.instructionText}>

        Long tap the object on the chart to edit or delete it

      </Text>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#1C1C1E',

  },

  backButton: {

    padding: 5,

  },

  headerTitle: {

    fontSize: 17,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  trashButton: {

    padding: 5,

  },

  addObjectButton: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#1C1C1E',

    paddingVertical: 12,

    paddingHorizontal: 16,

    marginTop: 20,

    marginHorizontal: 16,

    borderRadius: 10,

  },

  addObjectText: {

    color: '#FFFFFF',

    fontSize: 17,

  },

  objectIconsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    marginTop: 30,

    paddingHorizontal: 16,

  },

  objectIcon: {

    width: 44,

    height: 44,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#1C1C1E',

    borderRadius: 22,

  },

  instructionText: {

    color: '#8E8E93',

    fontSize: 13,

    textAlign: 'center',

    marginTop: 20,

    paddingHorizontal: 16,

  },

});



export default ObjectsScreen;