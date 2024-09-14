import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CourseDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        <View style={styles.instructorInfo}>
          <Text style={styles.instructorName}>John Wiseberg</Text>
          <Text style={styles.instructorTitle}>Teach Advertising and Creativity</Text>
        </View>
      </View>
      
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>About</Text>
        <Text style={styles.inactiveTab} onPress={() => navigation.navigate('Lessons')}>Lessons</Text>
      </View>
      <View style={styles.tabUnderline} />

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Create the big ideas</Text>
        <Text style={styles.contentText}>Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit...</Text>
        
        <Text style={styles.sectionTitle}>Or buy a good UI Kit</Text>
        <Text style={styles.contentText}>Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit...</Text>
        
        <TouchableOpacity style={styles.playButton}>
          <Text style={styles.playButtonText}>Play Lesson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 16,
  },
  instructorInfo: {
    marginLeft: 16,
  },
  instructorName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructorTitle: {
    color: '#ccc',
    fontSize: 16,
  },
  tabs: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  activeTab: {
    color: '#fff',
    fontSize: 18,
    marginRight: 24,
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#555',
    fontSize: 18,
  },
  tabUnderline: {
    height: 2,
    backgroundColor: '#ffa500',
    width: 50,
    marginBottom: 16,
  },
  content: {
    paddingVertical: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contentText: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 16,
  },
  playButton: {
    backgroundColor: '#ffdd00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;