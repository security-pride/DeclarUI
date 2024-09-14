import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CourseDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>John Wiseberg</Text>
        <Text style={styles.subtitle}>Teach Advertising and Creativity</Text>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tabs}>
          <Text style={styles.activeTab}>About</Text>
          <Text style={styles.inactiveTab}>Lessons</Text>
        </View>
        <Icon name="remove-circle-outline" size={30} color="#FFDD00" />
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Create the big ideas</Text>
        <Text style={styles.text}>
          Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, 
          vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis 
          sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis donec elementum.
        </Text>
        <Text style={styles.sectionTitle}>Or buy a good UI Kit</Text>
        <Text style={styles.text}>
          Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, 
          vel sodales augue mollis ut.
        </Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>Play Lesson</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16171C',
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    position: 'absolute',
    bottom: 30,
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    position: 'absolute',
    bottom: 10,
    color: '#fff',
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#16171C',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -20,
  },
  tabs: {
    flexDirection: 'row',
  },
  activeTab: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
  inactiveTab: {
    color: '#7B7C80',
    fontSize: 18,
  },
  content: {
    padding: 20,
    backgroundColor: '#1F2026',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    color: '#7B7C80',
    fontSize: 16,
    lineHeight: 24,
  },
  playButton: {
    backgroundColor: '#FFDD00',
    margin: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonText: {
    color: '#16171C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;