import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LessonDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
      
      {/* Language Tag */}
      <View style={styles.languageTag}>
        <Text style={styles.languageText}>EN / VN</Text>
      </View>

      {/* Lesson Content */}
      <View style={styles.lessonContent}>
        <Text style={styles.dictionaryHint}>Tap to see word in dictionary</Text>
        <View style={styles.lessonTextContainer}>
          <Text style={styles.lessonNumber}>6 / 12</Text>
          <Text style={styles.lessonText}>
            NBD, let's <Text style={styles.highlightedText}>keep</Text> going.
          </Text>
          <Text style={styles.translationText}>Không có gì to tát cả, tiếp tục nào.</Text>
          <Text style={styles.noteText}>NBD: (no big deal) không có gì to tát cả.</Text>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <Icon name="book" size={24} color="#000" />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Drill</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>1x</Text>
            </TouchableOpacity>
            <Icon name="ellipsis-horizontal" size={24} color="#000" />
          </View>
        </View>
      </View>

      {/* Comments and Likes */}
      <View style={styles.interactionContainer}>
        <Text style={styles.commentText}>Chỉ xước nhẹ thôi ý mà.</Text>
        <View style={styles.interactionButtons}>
          <Icon name="thumbs-up-outline" size={24} color="#000" />
          <Text style={styles.likeCount}>62</Text>
          <Icon name="chatbubble-outline" size={24} color="#000" />
          <Text style={styles.commentCount}>3</Text>
          <Text style={styles.bookmarkText}>Bookmark</Text>
          <Icon name="share-social-outline" size={24} color="#000" />
          <Text style={styles.moreText}>More</Text>
        </View>
      </View>

      {/* Author Information */}
      <View style={styles.authorContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.authorImage} />
        <View style={styles.authorDetails}>
          <Text style={styles.authorName}>Ellen Jacobs</Text>
          <Text style={styles.subscriberText}>3.7k Subscriber</Text>
        </View>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribed</Text>
        </TouchableOpacity>
      </View>

      {/* Practice Speaking Section */}
      <View style={styles.practiceContainer}>
        <Text style={styles.practiceTitle}>Practice Speaking !</Text>
        <Text style={styles.practiceText}>It's just a scratch.</Text>
        <Text style={styles.practiceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
  },
  languageTag: {
    position: 'absolute',
    top: 190,
    left: 16,
    backgroundColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  languageText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  lessonContent: {
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
  },
  dictionaryHint: {
    position: 'absolute',
    top: -10,
    left: 60,
    backgroundColor: '#ffa500',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  lessonTextContainer: {
    marginTop: 20,
  },
  lessonNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  lessonText: {
    fontSize: 18,
    marginVertical: 8,
  },
  highlightedText: {
    color: '#00f',
    fontWeight: 'bold',
  },
  translationText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  noteText: {
    fontSize: 14,
    color: '#aaa',
    marginVertical: 4,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
  },
  interactionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  commentText: {
    fontSize: 16,
    marginBottom: 8,
  },
  interactionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginHorizontal: 5,
  },
  commentCount: {
    marginHorizontal: 5,
  },
  bookmarkText: {
    marginLeft: 5,
    marginRight: 10,
  },
  moreText: {
    marginLeft: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subscriberText: {
    fontSize: 14,
    color: '#888',
  },
  subscribeButton: {
    backgroundColor: '#00f',
    padding: 10,
    borderRadius: 4,
  },
  subscribeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  practiceContainer: {
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  practiceTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 8,
  },
  practiceText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  practiceTranslation: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default LessonDetailScreen;