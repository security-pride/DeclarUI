import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const LessonDetailScreen = () => {

  const navigation = useNavigation();

  const [isBookmarked, setIsBookmarked] = useState(false);

  const [playbackSpeed, setPlaybackSpeed] = useState('1x');



  const handleBack = () => {

    navigation.goBack();

  };



  const toggleBookmark = () => {

    setIsBookmarked(!isBookmarked);

  };



  const togglePlaybackSpeed = () => {

    const speeds = ['1x', '1.5x', '2x'];

    const currentIndex = speeds.indexOf(playbackSpeed);

    const nextIndex = (currentIndex + 1) % speeds.length;

    setPlaybackSpeed(speeds[nextIndex]);

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={handleBack}>

          <Text style={styles.backButton}>←</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.fullscreenButton}>

          <Text style={styles.fullscreenIcon}>⤢</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.videoContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.videoPlaceholder} />

        <TouchableOpacity style={styles.playButton}>

          <Text style={styles.playIcon}>▶</Text>

        </TouchableOpacity>

        <View style={styles.languageToggle}>

          <Text style={styles.languageText}>EN / VN</Text>

        </View>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.progressContainer}>

          <View style={styles.progressBar}>

            <View style={styles.progress} />

          </View>

          <Text style={styles.progressText}>6 / 12</Text>

        </View>



        <TouchableOpacity style={styles.dictionaryButton}>

          <Text style={styles.dictionaryButtonText}>Tap to see word in dictionary</Text>

        </TouchableOpacity>



        <Text style={styles.sentence}>

          NBD, let's <Text style={styles.highlightedWord}>keep</Text> going.

        </Text>

        <Text style={styles.translation}>Không có gì to tát cả, tiếp tục nào.</Text>

        <Text style={styles.explanation}>NBD: (no big deal) không có gì to tát cả.</Text>



        <View style={styles.actionButtons}>

          <TouchableOpacity style={styles.actionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

            <Text style={styles.actionText}>Drill</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={togglePlaybackSpeed}>

            <Text style={styles.speedText}>{playbackSpeed}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

          </TouchableOpacity>

        </View>



        <Text style={styles.additionalSentence}>Chỉ xước nhẹ thôi ý mà.</Text>



        <View style={styles.interactionButtons}>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

            <Text style={styles.interactionText}>62</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

            <Text style={styles.interactionText}>3</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton} onPress={toggleBookmark}>

            <Image

              source={require('../assets/snack-icon.png')}

              style={[styles.interactionIcon, isBookmarked && styles.bookmarkedIcon]}

            />

            <Text style={[styles.interactionText, isBookmarked && styles.bookmarkedText]}>Bookmark</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

            <Text style={styles.interactionText}>Share</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.interactionButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />

            <Text style={styles.interactionText}>More</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.authorInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.authorAvatar} />

          <View style={styles.authorDetails}>

            <Text style={styles.authorName}>Ellen Jacobs</Text>

            <Text style={styles.subscriberCount}>3.7k Subscriber</Text>

          </View>

          <TouchableOpacity style={styles.subscribedButton}>

            <Text style={styles.subscribedText}>✓ Subscribed</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.practiceSection}>

          <Text style={styles.practiceTitle}>Practice Speaking !</Text>

          <View style={styles.practiceSentence}>

            <Text style={styles.practiceText}>It's just a scratch.</Text>

            <TouchableOpacity style={styles.speakerButton}>

              <Image source={require('../assets/snack-icon.png')} style={styles.speakerIcon} />

            </TouchableOpacity>

          </View>

          <Text style={styles.practiceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>

          <TouchableOpacity style={styles.recordButton}>

            <Text style={styles.recordButtonText}>Record</Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

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

    padding: 10,

  },

  backButton: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  fullscreenButton: {

    padding: 5,

  },

  fullscreenIcon: {

    fontSize: 20,

  },

  videoContainer: {

    aspectRatio: 16 / 9,

    backgroundColor: '#000',

    justifyContent: 'center',

    alignItems: 'center',

  },

  videoPlaceholder: {

    width: '100%',

    height: '100%',

  },

  playButton: {

    position: 'absolute',

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: 30,

    padding: 15,

  },

  playIcon: {

    color: '#FFF',

    fontSize: 24,

  },

  languageToggle: {

    position: 'absolute',

    bottom: 10,

    left: 10,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: 15,

    padding: 5,

  },

  languageText: {

    color: '#FFF',

    fontSize: 12,

  },

  content: {

    flex: 1,

    padding: 15,

  },

  progressContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  progressBar: {

    flex: 1,

    height: 4,

    backgroundColor: '#E0E0E0',

    borderRadius: 2,

    marginRight: 10,

  },

  progress: {

    width: '50%',

    height: '100%',

    backgroundColor: '#007AFF',

    borderRadius: 2,

  },

  progressText: {

    fontSize: 12,

    color: '#666',

  },

  dictionaryButton: {

    backgroundColor: '#FFA500',

    borderRadius: 20,

    padding: 10,

    alignItems: 'center',

    marginBottom: 15,

  },

  dictionaryButtonText: {

    color: '#FFF',

    fontWeight: 'bold',

  },

  sentence: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  highlightedWord: {

    color: '#007AFF',

  },

  translation: {

    fontSize: 16,

    color: '#666',

    marginBottom: 5,

  },

  explanation: {

    fontSize: 14,

    color: '#888',

    marginBottom: 15,

  },

  actionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 15,

  },

  actionButton: {

    alignItems: 'center',

  },

  actionIcon: {

    width: 24,

    height: 24,

  },

  actionText: {

    fontSize: 12,

    color: '#666',

  },

  speedText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  additionalSentence: {

    fontSize: 16,

    color: '#666',

    marginBottom: 15,

  },

  interactionButtons: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 20,

  },

  interactionButton: {

    alignItems: 'center',

  },

  interactionIcon: {

    width: 24,

    height: 24,

  },

  interactionText: {

    fontSize: 12,

    color: '#666',

  },

  bookmarkedIcon: {

    tintColor: '#007AFF',

  },

  bookmarkedText: {

    color: '#007AFF',

  },

  authorInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 20,

  },

  authorAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  authorDetails: {

    flex: 1,

  },

  authorName: {

    fontWeight: 'bold',

  },

  subscriberCount: {

    fontSize: 12,

    color: '#666',

  },

  subscribedButton: {

    backgroundColor: '#E0E0E0',

    borderRadius: 15,

    paddingVertical: 5,

    paddingHorizontal: 10,

  },

  subscribedText: {

    fontSize: 12,

    color: '#666',

  },

  practiceSection: {

    backgroundColor: '#F0F0F0',

    borderRadius: 10,

    padding: 15,

  },

  practiceTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  practiceSentence: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

  },

  practiceText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  speakerButton: {

    padding: 5,

  },

  speakerIcon: {

    width: 24,

    height: 24,

  },

  practiceTranslation: {

    fontSize: 14,

    color: '#666',

    marginBottom: 10,

  },

  recordButton: {

    backgroundColor: '#007AFF',

    borderRadius: 20,

    paddingVertical: 10,

    alignItems: 'center',

  },

  recordButtonText: {

    color: '#FFF',

    fontWeight: 'bold',

  },

});



export default LessonDetailScreen;