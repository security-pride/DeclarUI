import React from 'react';

import {

  View,

  Text,

  StyleSheet,

  Image,

  TouchableOpacity,

  SafeAreaView,

  StatusBar,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const FriendsScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>好友</Text>

        <TouchableOpacity onPress={() => navigation.navigate('FindFriend')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.content}>

        <Image source={require('../assets/snack-icon.png')} style={styles.illustration} />

        <Text style={styles.title}>和朋友一起继续向前！</Text>

        <Text style={styles.description}>

          记录进度、发送鼓励，并通过友好竞赛让自己更有活力。

        </Text>

      </View>

      <TouchableOpacity

        style={styles.addFriendButton}

        onPress={() => navigation.navigate('FindFriend')}

      >

        <Image source={require('../assets/snack-icon.png')} style={styles.buttonIcon} />

        <Text style={styles.buttonText}>添加好友</Text>

      </TouchableOpacity>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discovery')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>发现</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>今天</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>好友</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Premium')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Premium</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

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

    paddingVertical: 12,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#4a90e2',

  },

  addIcon: {

    width: 24,

    height: 24,

    tintColor: '#4a90e2',

  },

  content: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 32,

  },

  illustration: {

    width: 200,

    height: 200,

    marginBottom: 24,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 16,

  },

  description: {

    fontSize: 16,

    textAlign: 'center',

    color: '#666',

    marginBottom: 32,

  },

  addFriendButton: {

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#ff4081',

    paddingVertical: 16,

    marginHorizontal: 16,

    marginBottom: 24,

    borderRadius: 8,

  },

  buttonIcon: {

    width: 24,

    height: 24,

    marginRight: 8,

    tintColor: '#fff',

  },

  buttonText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

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

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

    tintColor: '#999',

  },

  tabText: {

    fontSize: 12,

    color: '#999',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#4a90e2',

  },

  activeTabIcon: {

    tintColor: '#4a90e2',

  },

  activeTabText: {

    color: '#4a90e2',

  },

});



export default FriendsScreen;