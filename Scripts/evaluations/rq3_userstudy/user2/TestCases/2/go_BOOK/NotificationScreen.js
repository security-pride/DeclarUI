import React from 'react';

import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const notifications = [

  {

    id: '1',

    user: 'Mohammad Reza',

    action: 'commented on',

    target: 'your UI/UX Designer',

    time: 'about 2 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'comment',

  },

  {

    id: '2',

    user: 'Sandra Redden',

    action: 'like your',

    target: 'Web UI Design Post',

    time: 'about 2 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'like',

  },

  {

    id: '3',

    user: 'Merry Rose',

    action: 'joined to',

    target: 'Final Presentation 🔥',

    time: 'about 2 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'join',

  },

  {

    id: '4',

    user: 'Adan Eslishth',

    action: 'commented on',

    target: 'your New shot',

    time: 'about 2 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'comment',

  },

  {

    id: '5',

    user: 'Michael Pinson',

    action: 'want to follow you.',

    target: '',

    time: 'about 2 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'follow',

  },

  {

    id: '6',

    user: 'Merry Rose',

    action: 'joined to',

    target: 'Final Presentation 🔥',

    time: 'about 24 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'join',

  },

  {

    id: '7',

    user: 'Sandra Redden',

    action: 'like your',

    target: 'Web UI Design Post',

    time: 'about 24 hours ago',

    image: require('../assets/snack-icon.png'),

    type: 'like',

  },

];



const NotificationItem = ({ item }) => {

  const getIcon = (type) => {

    switch (type) {

      case 'comment':

        return '💬';

      case 'like':

        return '❤️';

      case 'join':

        return '🔥';

      case 'follow':

        return '👤';

      default:

        return '•';

    }

  };



  return (

    <View style={styles.notificationItem}>

      <Image source={item.image} style={styles.avatar} />

      <View style={styles.notificationContent}>

        <Text style={styles.notificationText}>

          <Text style={styles.boldText}>{item.user}</Text> {item.action}{' '}

          <Text style={styles.boldText}>{item.target}</Text>

        </Text>

        <Text style={styles.timeText}>{item.time}</Text>

      </View>

      <Text style={styles.icon}>{getIcon(item.type)}</Text>

    </View>

  );

};



const NotificationScreen = () => {

  const navigation = useNavigation();



  const renderHeader = () => (

    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

      </TouchableOpacity>

      <Text style={styles.headerTitle}>Search</Text>

      <TouchableOpacity onPress={() => {/* Handle more options */}} style={styles.moreButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

      </TouchableOpacity>

    </View>

  );



  const renderSectionHeader = ({ section: { title } }) => (

    <Text style={styles.sectionHeader}>{title}</Text>

  );



  return (

    <SafeAreaView style={styles.container}>

      {renderHeader()}

      <FlatList

        data={notifications}

        renderItem={({ item }) => <NotificationItem item={item} />}

        keyExtractor={(item) => item.id}

        ListHeaderComponent={() => <Text style={styles.sectionHeader}>Today</Text>}

        stickyHeaderIndices={[0]}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}  onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Notification</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Ticket</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>History</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Setting</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

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

  backButton: {

    padding: 8,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  moreButton: {

    padding: 8,

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  sectionHeader: {

    fontSize: 16,

    fontWeight: 'bold',

    padding: 16,

    backgroundColor: '#F5F5F5',

  },

  notificationItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  avatar: {

    width: 48,

    height: 48,

    borderRadius: 24,

    marginRight: 16,

  },

  notificationContent: {

    flex: 1,

  },

  notificationText: {

    fontSize: 14,

    color: '#333333',

  },

  boldText: {

    fontWeight: 'bold',

  },

  timeText: {

    fontSize: 12,

    color: '#999999',

    marginTop: 4,

  },

  icon: {

    fontSize: 20,

    marginLeft: 8,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#999999',

  },

  activeTab: {

    // Add styles for active tab if needed

  },

  activeTabText: {

    color: '#000000',

  },

});



export default NotificationScreen;