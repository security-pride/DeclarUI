import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchSportsScreen = () => {

  const navigation = useNavigation();

  const [selectedSport, setSelectedSport] = useState('运动日历');



  const sportsData = [

    { id: '1', name: '运动日历', icon: '⚡' },

    { id: '2', name: '户外跑步', icon: '🏃' },

    { id: '3', name: '户外行走', icon: '🚶' },

    { id: '4', name: '跳绳', icon: '🏋️' },

    { id: '5', name: '室内骑行', icon: '🚴' },

    { id: '6', name: '户外骑行', icon: '🚴' },

    { id: '7', name: '室内跑步', icon: '🏃' },

    { id: '8', name: '爬楼梯', icon: '🏢' },

    { id: '9', name: '室内行走', icon: '🚶' },

  ];



  const renderSportItem = ({ item }) => (

    <TouchableOpacity

      style={[

        styles.sportItem,

        selectedSport === item.name && styles.selectedSportItem,

      ]}

      onPress={() => setSelectedSport(item.name)}

    >

      <Text style={styles.sportIcon}>{item.icon}</Text>

      <Text style={styles.sportName}>{item.name}</Text>

      <View style={styles.radioButton}>

        {selectedSport === item.name && <View style={styles.radioButtonInner} />}

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>运动时长</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.closeIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.content}>

        <Text style={styles.title}>选择运动类别</Text>

        <View style={styles.managementRow}>

          <Text style={styles.myExercisesText}>我的运动</Text>

          <TouchableOpacity style={styles.manageButton}>

            <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.manageIcon} />

            <Text style={styles.manageText}>管理</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={sportsData}

          renderItem={renderSportItem}

          keyExtractor={(item) => item.id}

          showsVerticalScrollIndicator={false}

        />

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

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  closeIcon: {

    width: 24,

    height: 24,

  },

  content: {

    flex: 1,

    padding: 16,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  managementRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  myExercisesText: {

    fontSize: 16,

    color: '#888888',

  },

  manageButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  manageIcon: {

    width: 16,

    height: 16,

    marginRight: 4,

  },

  manageText: {

    fontSize: 14,

    color: '#333333',

  },

  sportItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  selectedSportItem: {

    backgroundColor: '#F0F0F0',

  },

  sportIcon: {

    fontSize: 24,

    marginRight: 16,

  },

  sportName: {

    flex: 1,

    fontSize: 16,

  },

  radioButton: {

    width: 20,

    height: 20,

    borderRadius: 10,

    borderWidth: 2,

    borderColor: '#CCCCCC',

    justifyContent: 'center',

    alignItems: 'center',

  },

  radioButtonInner: {

    width: 12,

    height: 12,

    borderRadius: 6,

    backgroundColor: '#4CAF50',

  },

});



export default SearchSportsScreen;