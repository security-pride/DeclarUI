import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const sportOptions = [

  { id: 1, name: '运动日历', icon: 'event' },

  { id: 2, name: '户外跑步', icon: 'directions-run' },

  { id: 3, name: '户外行走', icon: 'directions-walk' },

  { id: 4, name: '跳绳', icon: 'fitness-center' },

  { id: 5, name: '室内骑行', icon: 'bike-scooter' },

  { id: 6, name: '户外骑行', icon: 'pedal-bike' },

  { id: 7, name: '室内跑步', icon: 'directions-run' },

  { id: 8, name: '室内行走', icon: 'directions-walk' },

  { id: 9, name: '爬楼梯', icon: 'stairs' },

];



const SearchSportsScreen = () => {

  const [selectedSport, setSelectedSport] = useState(sportOptions[0].id);

  const navigation = useNavigation();



  const renderSportItem = ({ item }) => (

    <TouchableOpacity

      style={[

        styles.sportItem,

        selectedSport === item.id && styles.selectedSportItem,

      ]}

      onPress={() => {

        setSelectedSport(item.id);

        navigation.navigate('Sports', { sportType: item.name });

      }}

    >

      <Icon

        name={item.icon}

        size={24}

        color={selectedSport === item.id ? '#4CAF50' : '#000'}

      />

      <Text style={[

        styles.sportName,

        selectedSport === item.id && styles.selectedSportName,

      ]}>

        {item.name}

      </Text>

      {selectedSport === item.id && (

        <Icon name="check-circle" size={24} color="#4CAF50" style={styles.checkIcon} />

      )}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="close" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.title}>选择运动类别</Text>

        <TouchableOpacity onPress={() => console.log('Manage sports')}>

          <Text style={styles.manageText}>管理</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.content}>

        <View style={styles.mySportsSection}>

          <Text style={styles.sectionTitle}>我的运动</Text>

          <TouchableOpacity onPress={() => console.log('Edit my sports')}>

            <Icon name="edit" size={20} color="#666" />

          </TouchableOpacity>

        </View>

        <FlatList

          data={sportOptions}

          renderItem={renderSportItem}

          keyExtractor={(item) => item.id.toString()}

          showsVerticalScrollIndicator={false}

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

    borderBottomColor: '#e0e0e0',

  },

  title: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  manageText: {

    color: '#4CAF50',

  },

  content: {

    flex: 1,

    padding: 16,

  },

  mySportsSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#666',

  },

  sportItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  selectedSportItem: {

    backgroundColor: '#E8F5E9',

  },

  sportName: {

    marginLeft: 16,

    fontSize: 16,

  },

  selectedSportName: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  checkIcon: {

    marginLeft: 'auto',

  },

});



export default SearchSportsScreen;