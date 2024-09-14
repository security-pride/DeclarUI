import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const LessonDetailScreen = ({ navigation }) => {

  const [isSubscribed, setIsSubscribed] = useState(true);

  const [playbackSpeed, setPlaybackSpeed] = useState('1x');



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.headerRight}>

          <Text style={styles.playbackSpeed}>{playbackSpeed}</Text>

          <TouchableOpacity>

            <Icon name="wifi" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.videoContainer}>

          <TouchableOpacity style={styles.playButton}>

            <Icon name="play" size={40} color="#fff" />

          </TouchableOpacity>

        </View>



        <Text style={styles.instructionText}>Tap to see word in dictionary</Text>



        <View style={styles.lessonContent}>

          <Text style={styles.lessonText}>

            NBD, let' <Text style={styles.highlightedWord}>s kee</Text> going.

          </Text>

          <Text style={styles.translationText}>Không có gì to tắt cả, tiếp tục nào.</Text>

        </View>



        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.actionButton}>

            <Icon name="book-outline" size={24} color="#000" />

            <Text>Dictionary</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Text>Drill</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Icon name="refresh" size={24} color="#000" />

          </TouchableOpacity>

        </View>



        <View style={styles.interactionButtons}>

          <TouchableOpacity style={styles.interactionButton}>

            <Icon name="thumbs-up" size={24} color="#4287f5" />

            <Text style={styles.interactionCount}>62</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Icon name="thumbs-down" size={24} color="#000" />

            <Text style={styles.interactionCount}>3</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Icon name="bookmark" size={24} color="#000" />

            <Text>Bookmark</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Icon name="share" size={24} color="#000" />

            <Text>Share</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Icon name="ellipsis-horizontal" size={24} color="#000" />

            <Text>More</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <View style={styles.userInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

          <View>

            <Text style={styles.userName}>Ellen Jacobs</Text>

            <Text style={styles.userSubscribers}>3.7k Subscriber</Text>

          </View>

        </View>

        <TouchableOpacity

          style={styles.subscribeButton}

          onPress={() => setIsSubscribed(!isSubscribed)}

        >

          <Text style={styles.subscribeButtonText}>

            {isSubscribed ? 'Subscribed' : 'Subscribe'}

          </Text>

        </TouchableOpacity>

      </View>



      <View style={styles.practiceSection}>

        <Text style={styles.practiceTitle}>Practice Speaking !</Text>

        <Text style={styles.practiceText}>It' s just a scratch.</Text>

        <Text style={styles.practiceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>

        <TouchableOpacity style={styles.practiceButton}>

          <Icon name="mic" size={24} color="#fff" />

        </TouchableOpacity>

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

    padding: 10,

  },

  backButton: {

    padding: 5,

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  playbackSpeed: {

    marginRight: 10,

  },

  content: {

    flex: 1,

  },

  videoContainer: {

    height: 200,

    backgroundColor: '#000',

    justifyContent: 'center',

    alignItems: 'center',

  },

  playButton: {

    backgroundColor: 'rgba(255,255,255,0.3)',

    borderRadius: 30,

    padding: 10,

  },

  instructionText: {

    textAlign: 'center',

    padding: 10,

    backgroundColor: '#f0f0f0',

  },

  lessonContent: {

    padding: 15,

  },

  lessonText: {

    fontSize: 18,

    marginBottom: 10,

  },

  highlightedWord: {

    backgroundColor: '#4287f5',

    color: '#fff',

  },

  translationText: {

    fontSize: 16,

    color: '#666',

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#eee',

  },

  actionButton: {

    alignItems: 'center',

  },

  interactionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

  },

  interactionButton: {

    alignItems: 'center',

  },

  interactionCount: {

    color: '#666',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderColor: '#eee',

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  userName: {

    fontWeight: 'bold',

  },

  userSubscribers: {

    color: '#666',

  },

  subscribeButton: {

    backgroundColor: '#4287f5',

    paddingVertical: 5,

    paddingHorizontal: 10,

    borderRadius: 5,

  },

  subscribeButtonText: {

    color: '#fff',

  },

  practiceSection: {

    padding: 15,

    backgroundColor: '#f0f0f0',

  },

  practiceTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  practiceText: {

    fontSize: 16,

    marginBottom: 5,

  },

  practiceTranslation: {

    fontSize: 14,

    color: '#666',

    marginBottom: 10,

  },

  practiceButton: {

    backgroundColor: '#4287f5',

    padding: 10,

    borderRadius: 25,

    alignSelf: 'flex-end',

  },

});



export default LessonDetailScreen;