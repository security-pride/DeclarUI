import React from 'react';
import { View, Text, StyleSheet, Button, Image, Pressable, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons';

const LessonDetailScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="EN/VN" onPress={() => {}} />
      </View>
      <View style={styles.videoPlayer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
        <Pressable style={styles.playButton}>
          <MaterialIcons name="play-arrow" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.lessonContent}>
        <View style={styles.pageIndicator}>
          <Text>6 / 12</Text>
        </View>
        <Pressable style={styles.dictionaryTip}>
          <Text>Tap to see word in dictionary</Text>
        </Pressable>
        <Text style={styles.originalSentence}>
          NBD, let's <Text style={styles.highlightedWord}>keep</Text> going.
        </Text>
        <Text style={styles.translation}>Không có gì to tát cả, tiếp tục nào.</Text>
        <Text style={styles.explanation}>
          NBD: (no big deal) không có gì to tát cả.
        </Text>
        <View style={styles.controls}>
          <Button title="Drill" onPress={() => {}} />
          <Button title="1x" onPress={() => {}} />
          <Pressable>
            <MaterialIcons name="signal-cellular-4-bar" size={24} />
          </Pressable>
        </View>
      </View>
      <View style={styles.feedbackSection}>
        <Text>Chỉ xước nhẹ thôi ý mà.</Text>
        <View style={styles.interactionButtons}>
          <Pressable>
            <FontAwesome name="thumbs-up" size={24} />
            <Text>62</Text>
          </Pressable>
          <Pressable>
            <FontAwesome name="thumbs-down" size={24} />
            <Text>3</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bookmarkSection}>
        <Button title="Bookmark" onPress={() => {}} />
        <Button title="Share" onPress={() => {}} />
        <Button title="More" onPress={() => {}} />
      </View>
      <View style={styles.authorSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <Text>Ellen Jacobs</Text>
        <Text>3.7k Subscriber</Text>
        <Button title="Subscribed" onPress={() => {}} />
      </View>
      <View style={styles.practiceSection}>
        <Text style={styles.practiceTitle}>Practice Speaking !</Text>
        <Text style={styles.practiceSentence}>It's just a scratch.</Text>
        <Text style={styles.practiceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>
        <Button title="Speak" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  videoPlayer: {
    position: 'relative',
    height: 200,
    marginVertical: 10,
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '45%',
    left: '45%',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 50,
  },
  lessonContent: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  pageIndicator: {
    alignSelf: 'flex-end',
  },
  dictionaryTip: {
    alignSelf: 'center',
    backgroundColor: '#f9c2ff',
    padding: 5,
    borderRadius: 5,
  },
  originalSentence: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  highlightedWord: {
    backgroundColor: 'yellow',
  },
  translation: {
    fontSize: 16,
    color: 'gray',
  },
  explanation: {
    fontSize: 14,
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  feedbackSection: {
    marginVertical: 10,
  },
  interactionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  bookmarkSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  practiceSection: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  practiceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  practiceSentence: {
    fontSize: 16,
    marginVertical: 5,
  },
  practiceTranslation: {
    fontSize: 14,
    color: 'gray',
  },
});

export default LessonDetailScreen;