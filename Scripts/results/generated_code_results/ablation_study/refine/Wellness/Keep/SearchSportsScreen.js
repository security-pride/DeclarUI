import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const SportItem = ({ icon, label, selected, onPress }) => (

  <TouchableOpacity style={styles.sportItem} onPress={onPress}>

    <Image source={icon} style={styles.sportIcon} />

    <Text style={styles.sportLabel}>{label}</Text>

    {selected && <View style={styles.selectedCircle} />}

  </TouchableOpacity>

);



const SearchSportsScreen = ({ navigation }) => {

  const [selectedSport, setSelectedSport] = useState('运动日历');



  const sportsList = [

    { id: '1', label: '运动日历', icon: require('../assets/snack-icon.png') },

    { id: '2', label: '户外跑步', icon: require('../assets/snack-icon.png') },

    { id: '3', label: '户外行走', icon: require('../assets/snack-icon.png') },

    { id: '4', label: '跳绳', icon: require('../assets/snack-icon.png') },

    { id: '5', label: '室内骑行', icon: require('../assets/snack-icon.png') },

    { id: '6', label: '户外骑行', icon: require('../assets/snack-icon.png') },

    { id: '7', label: '室内跑步', icon: require('../assets/snack-icon.png') },

    { id: '8', label: '爬楼梯', icon: require('../assets/snack-icon.png') },

    { id: '9', label: '室内行走', icon: require('../assets/snack-icon.png') },

  ];



  const renderSportItem = ({ item }) => (

    <SportItem

      icon={item.icon}

      label={item.label}

      selected={selectedSport === item.label}

      onPress={() => setSelectedSport(item.label)}

    />

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>选择运动类别</Text>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>

          <Icon name="close" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      <View style={styles.content}>

        <View style={styles.myExerciseSection}>

          <Text style={styles.sectionTitle}>我的运动</Text>

          <TouchableOpacity style={styles.manageButton}>

            <Text style={styles.manageText}>管理</Text>

            <Icon name="edit" size={16} color="#666" />

          </TouchableOpacity>

        </View>

        <FlatList

          data={sportsList}

          renderItem={renderSportItem}

          keyExtractor={item => item.id}

          style={styles.sportsList}

        />

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  title: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  closeButton: {

    padding: 8,

  },

  content: {

    flex: 1,

    padding: 16,

  },

  myExerciseSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  sectionTitle: {

    fontSize: 16,

    color: '#666',

  },

  manageButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  manageText: {

    fontSize: 14,

    color: '#666',

    marginRight: 4,

  },

  sportsList: {

    flex: 1,

  },

  sportItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  sportIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  sportLabel: {

    fontSize: 16,

    flex: 1,

  },

  selectedCircle: {

    width: 20,

    height: 20,

    borderRadius: 10,

    backgroundColor: '#4CAF50',

  },

});



export default SearchSportsScreen;