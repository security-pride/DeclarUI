import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Svg, Circle, Path } from 'react-native-svg';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const DashboardScreen = () => {

  const navigation = useNavigation();



  const stats = [

    { label: 'Total task', value: 55, icon: 'folder' },

    { label: 'Completed', value: 13, icon: 'check' },

    { label: 'Working on', value: 25, icon: 'trending-up' },

    { label: 'Pending', value: 17, icon: 'add' },

  ];



  const renderDonutChart = () => (

    <Svg height="200" width="200" viewBox="0 0 100 100">

      <Circle cx="50" cy="50" r="45" fill="none" stroke="#f0f0f0" strokeWidth="10" />

      <Path

        d="M50 5 A45 45 0 0 1 95 50"

        fill="none"

        stroke="#FF7F50"

        strokeWidth="10"

      />

      <Path

        d="M95 50 A45 45 0 0 1 67.5 91.9"

        fill="none"

        stroke="#6A5ACD"

        strokeWidth="10"

      />

      <Path

        d="M67.5 91.9 A45 45 0 0 1 5 50"

        fill="none"

        stroke="#20B2AA"

        strokeWidth="10"

      />

      <Text x="50" y="50" textAnchor="middle" fill="#333" fontSize="10">

        15%

      </Text>

      <Text x="85" y="50" textAnchor="middle" fill="#333" fontSize="10">

        13%

      </Text>

      <Text x="50" y="85" textAnchor="middle" fill="#333" fontSize="10">

        28%

      </Text>

    </Svg>

  );



  const renderStatItem = (item, index) => (

    <View key={index} style={styles.statItem}>

      <View style={[styles.iconContainer, { backgroundColor: getIconColor(item.icon) }]}>

        <Icon name={item.icon} size={24} color="#fff" />

      </View>

      <View style={styles.statInfo}>

        <Text style={styles.statLabel}>{item.label}</Text>

        <Text style={styles.statValue}>{item.value}</Text>

      </View>

    </View>

  );



  const getIconColor = (icon) => {

    switch (icon) {

      case 'folder': return '#f0f0f0';

      case 'check': return '#6A5ACD';

      case 'trending-up': return '#20B2AA';

      case 'add': return '#FF7F50';

      default: return '#f0f0f0';

    }

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>Dashboard</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

      </View>

      <View style={styles.chartContainer}>

        {renderDonutChart()}

      </View>

      <View style={styles.statsContainer}>

        {stats.map(renderStatItem)}

      </View>

      <View style={styles.bottomNav}>

        <TouchableOpacity onPress={() => navigation.navigate('Board')}>

          <Icon name="grid-view" size={24} color="#757575" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>

          <Icon name="check" size={24} color="#6200EE" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AddTask')} style={styles.addButton}>

          <Icon name="add" size={24} color="#FFFFFF" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Task')}>

          <Icon name="description" size={24} color="#757575" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Message')}>

          <Icon name="chat" size={24} color="#757575" />

        </TouchableOpacity>

      </View>

    </View>

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

  title: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  chartContainer: {

    alignItems: 'center',

    marginVertical: 20,

  },

  statsContainer: {

    padding: 16,

  },

  statItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    padding: 16,

    marginBottom: 12,

  },

  iconContainer: {

    width: 48,

    height: 48,

    borderRadius: 24,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 16,

  },

  statInfo: {

    flex: 1,

  },

  statLabel: {

    fontSize: 16,

    color: '#757575',

  },

  statValue: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingVertical: 12,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  addButton: {

    width: 56,

    height: 56,

    borderRadius: 28,

    backgroundColor: '#6200EE',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: -28,

  },

});



export default DashboardScreen;