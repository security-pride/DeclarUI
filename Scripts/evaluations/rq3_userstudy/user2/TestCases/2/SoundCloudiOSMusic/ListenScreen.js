import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ListenScreen = () => {

  const navigation = useNavigation();



  const renderHotItem = (title, followers, image) => (

    <TouchableOpacity style={styles.hotItem}>

      <Image source={image} style={styles.hotItemImage} />

      <View style={styles.hotItemOverlay}>

        <Text style={styles.hotItemTitle}>{title}</Text>

      </View>

      <Text style={styles.hotItemFollowers}>{followers} FOLLOWERS</Text>

    </TouchableOpacity>

  );



  const renderRecentItem = (icon, title, isNew = false) => (

    <TouchableOpacity style={styles.recentItem}>

      <View style={styles.recentItemLeft}>

        <Image source={icon} style={styles.recentItemIcon} />

        <Text style={styles.recentItemTitle}>{title}</Text>

      </View>

      {isNew && <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>}

      <Image source={require('../assets/snack-icon.png')} style={styles.chevronIcon} />

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.sectionTitle}>Hots now</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hotSection}>

        {renderHotItem('Summer Vibes', '3,304,231', require('../assets/snack-icon.png'))}

        {renderHotItem('Monday Party', '650,231', require('../assets/snack-icon.png'))}

      </ScrollView>



      <Text style={styles.sectionTitle}>Recents</Text>

      <View style={styles.recentsSection}>

        {renderRecentItem(require('../assets/snack-icon.png'), 'Ranking', true)}

        {renderRecentItem(require('../assets/snack-icon.png'), 'Weekly featured')}

        {renderRecentItem(require('../assets/snack-icon.png'), 'Podcast')}

        {renderRecentItem(require('../assets/snack-icon.png'), 'Live')}

        {renderRecentItem(require('../assets/snack-icon.png'), 'Concerts')}

      </View>



      <Text style={styles.sectionTitle}>Playlists</Text>

      <View style={styles.nowPlayingBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.nowPlayingImage} />

        <View style={styles.nowPlayingInfo}>

          <Text style={styles.nowPlayingSong}>All Mine</Text>

          <Text style={styles.nowPlayingArtist}>Kanye West</Text>

        </View>

        <TouchableOpacity style={styles.playButton}  onPress={() => navigation.navigate('Player')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

    paddingTop: 60,

  },

  sectionTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 15,

    marginTop: 20,

    marginBottom: 10,

  },

  hotSection: {

    paddingLeft: 15,

  },

  hotItem: {

    width: 150,

    marginRight: 15,

  },

  hotItemImage: {

    width: 150,

    height: 150,

    borderRadius: 10,

  },

  hotItemOverlay: {

    position: 'absolute',

    bottom: 30,

    left: 10,

  },

  hotItemTitle: {

    color: '#fff',

    fontWeight: 'bold',

    fontSize: 16,

  },

  hotItemFollowers: {

    fontSize: 12,

    color: '#888',

    marginTop: 5,

  },

  recentsSection: {

    paddingHorizontal: 15,

  },

  recentItem: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingVertical: 15,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  recentItemLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  recentItemIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  recentItemTitle: {

    fontSize: 16,

  },

  newBadge: {

    backgroundColor: '#FF6B00',

    paddingHorizontal: 8,

    paddingVertical: 2,

    borderRadius: 10,

  },

  newBadgeText: {

    color: '#fff',

    fontSize: 12,

  },

  chevronIcon: {

    width: 12,

    height: 12,

  },

  nowPlayingBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#f8f8f8',

    borderTopWidth: 1,

    borderTopColor: '#eee',

  },

  nowPlayingImage: {

    width: 40,

    height: 40,

    borderRadius: 5,

    marginRight: 10,

  },

  nowPlayingInfo: {

    flex: 1,

  },

  nowPlayingSong: {

    fontWeight: 'bold',

  },

  nowPlayingArtist: {

    color: '#888',

    fontSize: 12,

  },

  playButton: {

    width: 30,

    height: 30,

    justifyContent: 'center',

    alignItems: 'center',

  },

  playIcon: {

    width: 20,

    height: 20,

  },

});



export default ListenScreen;