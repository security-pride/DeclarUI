import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const { width: screenWidth } = Dimensions.get('window');



const HomeScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('For You');



  const tabs = ['For You', 'Following', 'Live'];



  const posts = [

    {

      id: '1',

      user: 'RomeoSmile',

      caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id',

      song: 'eyes blue like the atlantic',

      likes: 4231,

      comments: 644,

    },

  ];



  const renderPost = ({ item }) => (

    <View style={styles.postContainer}>

      <Image source={require('../assets/snack-icon.png')} style={styles.postImage} />

      <View style={styles.postOverlay}>

        <View style={styles.postInfo}>

          <TouchableOpacity style={styles.userInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.userAvatar} />

            <Text style={styles.username}>{item.user}</Text>

            <TouchableOpacity style={styles.followButton}>

              <Text style={styles.followButtonText}>Follow</Text>

            </TouchableOpacity>

          </TouchableOpacity>

          <Text style={styles.caption}>{item.caption}</Text>

          <View style={styles.songInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.musicIcon} />

            <Text style={styles.songName}>{item.song}</Text>

          </View>

        </View>

        <View style={styles.interactions}>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

            <Text style={styles.interactionCount}>{item.likes}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

            <Text style={styles.interactionCount}>{item.comments}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

          </TouchableOpacity>

        </View>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        {tabs.map((tab) => (

          <TouchableOpacity

            key={tab}

            onPress={() => setActiveTab(tab)}

            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}

          >

            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>

          </TouchableOpacity>

        ))}

      </View>

      <FlatList

        data={posts}

        renderItem={renderPost}

        keyExtractor={(item) => item.id}

        pagingEnabled

        snapToInterval={screenWidth}

        decelerationRate="fast"

        showsVerticalScrollIndicator={false}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <View style={styles.addButton}>

            <Text style={styles.addButtonLabel}>+</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Activity</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Profile</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'center',

    paddingTop: 40,

    paddingBottom: 10,

  },

  tabButton: {

    paddingHorizontal: 15,

  },

  activeTabButton: {

    borderBottomWidth: 2,

    borderBottomColor: '#fff',

  },

  tabText: {

    color: '#999',

    fontSize: 16,

    fontWeight: 'bold',

  },

  activeTabText: {

    color: '#fff',

  },

  postContainer: {

    width: screenWidth,

    height: '100%',

  },

  postImage: {

    width: '100%',

    height: '100%',

    resizeMode: 'cover',

  },

  postOverlay: {

    ...StyleSheet.absoluteFillObject,

    justifyContent: 'space-between',

    padding: 20,

  },

  postInfo: {

    flex: 1,

    justifyContent: 'flex-end',

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  userAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  username: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16,

  },

  followButton: {

    backgroundColor: '#f00',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 20,

    marginLeft: 10,

  },

  followButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  caption: {

    color: '#fff',

    marginBottom: 10,

  },

  songInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  musicIcon: {

    width: 15,

    height: 15,

    marginRight: 5,

  },

  songName: {

    color: '#fff',

  },

  interactions: {

    alignItems: 'flex-end',

  },

  interactionButton: {

    alignItems: 'center',

    marginBottom: 15,

  },

  interactionIcon: {

    width: 30,

    height: 30,

    tintColor: '#fff',

  },

  interactionCount: {

    color: '#fff',

    marginTop: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  activeTabItem: {

    borderTopWidth: 2,

    borderTopColor: '#f00',

  },

  tabIcon: {

    width: 24,

    height: 24,

    tintColor: '#999',

  },

  activeTabIcon: {

    tintColor: '#f00',

  },

  tabLabel: {

    color: '#999',

    fontSize: 10,

    marginTop: 3,

  },

  activeTabLabel: {

    color: '#f00',

  },

  addButton: {

    width: 40,

    height: 40,

    backgroundColor: '#f00',

    borderRadius: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonLabel: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

});



export default HomeScreen;