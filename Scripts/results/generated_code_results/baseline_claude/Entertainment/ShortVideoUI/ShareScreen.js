import React from 'react';

import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ShareScreen = () => {

  const navigation = useNavigation();



  const shareOptions = [

    { id: 'whatsapp', name: 'WhatsApp', icon: '../assets/snack-icon.png' },

    { id: 'whatsapp_status', name: 'WhatsApp status', icon: '../assets/snack-icon.png' },

    { id: 'message', name: 'Message', icon: '../assets/snack-icon.png' },

    { id: 'sms', name: 'SMS', icon: '../assets/snack-icon.png' },

    { id: 'messenger', name: 'Messenger', icon: '../assets/snack-icon.png' },

    { id: 'instagram', name: 'Instagram', icon: '../assets/snack-icon.png' },

  ];



  const actionOptions = [

    { id: 'report', name: 'Report', icon: '../assets/snack-icon.png' },

    { id: 'not_interested', name: 'Not interested', icon: '../assets/snack-icon.png' },

    { id: 'save_video', name: 'Save video', icon: '../assets/snack-icon.png' },

    { id: 'duet', name: 'Duet', icon: '../assets/snack-icon.png' },

    { id: 'react', name: 'React', icon: '../assets/snack-icon.png' },

    { id: 'add_to_favorites', name: 'Add to Favorites', icon: '../assets/snack-icon.png' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerText}>Following</Text>

        <Text style={[styles.headerText, styles.activeHeaderText]}>For You</Text>

      </View>

      

      <View style={styles.videoContainer}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.videoThumbnail} />

        <View style={styles.likeButton}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.likeIcon} />

        </View>

        <View style={styles.likeCount}>

          <Text style={styles.likeCountText}>328.7K</Text>

        </View>

      </View>



      <ScrollView style={styles.shareOptionsContainer}>

        <Text style={styles.shareToText}>Share to</Text>

        <View style={styles.shareOptionsGrid}>

          {shareOptions.map((option) => (

            <TouchableOpacity key={option.id} style={styles.shareOption}>

              <Image source={{ uri: option.icon }} style={styles.shareOptionIcon} />

              <Text style={styles.shareOptionText}>{option.name}</Text>

            </TouchableOpacity>

          ))}

        </View>



        <View style={styles.actionOptionsGrid}>

          {actionOptions.map((option) => (

            <TouchableOpacity key={option.id} style={styles.actionOption}>

              <Image source={{ uri: option.icon }} style={styles.actionOptionIcon} />

              <Text style={styles.actionOptionText}>{option.name}</Text>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>



      <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>

        <Text style={styles.cancelButtonText}>Cancel</Text>

      </TouchableOpacity>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: 'black',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'center',

    paddingVertical: 10,

  },

  headerText: {

    color: '#808080',

    fontSize: 16,

    marginHorizontal: 15,

  },

  activeHeaderText: {

    color: 'white',

    fontWeight: 'bold',

  },

  videoContainer: {

    height: '40%',

    justifyContent: 'center',

    alignItems: 'center',

  },

  videoThumbnail: {

    width: '100%',

    height: '100%',

    resizeMode: 'cover',

  },

  likeButton: {

    position: 'absolute',

    right: 10,

    bottom: 60,

    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    borderRadius: 25,

    padding: 5,

  },

  likeIcon: {

    width: 30,

    height: 30,

  },

  likeCount: {

    position: 'absolute',

    right: 10,

    bottom: 30,

  },

  likeCountText: {

    color: 'white',

    fontWeight: 'bold',

  },

  shareOptionsContainer: {

    backgroundColor: 'white',

    borderTopLeftRadius: 20,

    borderTopRightRadius: 20,

    padding: 20,

  },

  shareToText: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 15,

  },

  shareOptionsGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  shareOption: {

    width: '16%',

    alignItems: 'center',

    marginBottom: 15,

  },

  shareOptionIcon: {

    width: 50,

    height: 50,

    borderRadius: 25,

  },

  shareOptionText: {

    fontSize: 12,

    textAlign: 'center',

    marginTop: 5,

  },

  actionOptionsGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

  },

  actionOption: {

    width: '16%',

    alignItems: 'center',

    marginBottom: 15,

  },

  actionOptionIcon: {

    width: 40,

    height: 40,

  },

  actionOptionText: {

    fontSize: 12,

    textAlign: 'center',

    marginTop: 5,

  },

  cancelButton: {

    backgroundColor: 'white',

    paddingVertical: 15,

    alignItems: 'center',

  },

  cancelButtonText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

});



export default ShareScreen;