import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderHeader = () => (

    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Layers')}>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </TouchableOpacity>

    </View>

  );



  const renderMap = () => (

    <View style={styles.mapContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.mapImage} />

    </View>

  );



  const renderSearchBar = () => (

    <View style={styles.searchBar}>

      <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

      <TextInput

        style={styles.searchInput}

        placeholder="查找地点、公交、地铁"

        placeholderTextColor="#999"

      />

      <TouchableOpacity onPress={() => {}}>

        <Image source={require('../assets/snack-icon.png')} style={styles.voiceIcon} />

      </TouchableOpacity>

    </View>

  );



  const renderQuickActions = () => {

    const actions = [

      { icon: '../assets/snack-icon.png', label: '驾车' },

      { icon: '../assets/snack-icon.png', label: '公交' },

      { icon: '../assets/snack-icon.png', label: '优惠加油' },

      { icon: '../assets/snack-icon.png', label: '打车' },

      { icon: '../assets/snack-icon.png', label: '订酒店' },

      { icon: '../assets/snack-icon.png', label: '火车票机票' },

      { icon: '../assets/snack-icon.png', label: '代驾' },

      { icon: '../assets/snack-icon.png', label: '步行' },

      { icon: '../assets/snack-icon.png', label: '实时公交' },

      { icon: '../assets/snack-icon.png', label: '更多工具' },

    ];



    return (

      <View style={styles.quickActions}>

        {actions.map((action, index) => (

          <TouchableOpacity key={index} style={styles.actionItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

            <Text style={styles.actionLabel}>{action.label}</Text>

          </TouchableOpacity>

        ))}

      </View>

    );

  };



  const renderBottomBar = () => {

    const tabs = [

      { icon: '../assets/snack-icon.png', label: '首页' },

      { icon: '../assets/snack-icon.png', label: '附近' },

      { icon: '../assets/snack-icon.png', label: '消息' },

      { icon: '../assets/snack-icon.png', label: '打车' },

      { icon: '../assets/snack-icon.png', label: '我的' },

    ];



    return (

      <View style={styles.bottomBar}>

        {tabs.map((tab, index) => (

          <TouchableOpacity key={index} style={styles.tabItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

            <Text style={styles.tabLabel}>{tab.label}</Text>

          </TouchableOpacity>

        ))}

      </View>

    );

  };



  return (

    <View style={styles.container}>

      {renderHeader()}

      {renderMap()}

      <ScrollView style={styles.content}>

        {renderSearchBar()}

        {renderQuickActions()}

      </ScrollView>

      {renderBottomBar()}

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

    justifyContent: 'flex-end',

    padding: 10,

    position: 'absolute',

    top: 0,

    right: 0,

    zIndex: 1,

  },

  icon: {

    width: 24,

    height: 24,

    marginLeft: 15,

  },

  mapContainer: {

    flex: 1,

  },

  mapImage: {

    width: '100%',

    height: '100%',

  },

  content: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: 'white',

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    paddingVertical: 20,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    marginHorizontal: 20,

    paddingHorizontal: 15,

    height: 40,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    fontSize: 16,

  },

  voiceIcon: {

    width: 20,

    height: 20,

    marginLeft: 10,

  },

  quickActions: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 20,

    marginTop: 20,

  },

  actionItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 15,

  },

  actionIcon: {

    width: 40,

    height: 40,

  },

  actionLabel: {

    fontSize: 12,

    marginTop: 5,

    textAlign: 'center',

  },

  bottomBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

    backgroundColor: 'white',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 5,

  },

});



export default HomeScreen;