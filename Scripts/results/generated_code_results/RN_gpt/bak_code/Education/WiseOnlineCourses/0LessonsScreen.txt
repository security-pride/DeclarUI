import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LessonsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.tabs}>
          <Text style={styles.tabText}>About</Text>
          <Text style={styles.activeTabText}>Lessons</Text>
          <View style={styles.activeIndicator} />
        </View>
        <TouchableOpacity style={styles.minusButton}>
          <Icon name="remove-circle-outline" size={24} color="#FFC107" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.lessonItem}>
          <Image style={styles.thumbnail} source={require('../assets/snack-icon.png')} />
          <View style={styles.lessonInfo}>
            <Text style={styles.duration}>08:12</Text>
            <Text style={styles.lessonTitle}>Lesson 1</Text>
            <Text style={styles.lessonName}>What is Advertising</Text>
            <Text style={styles.lessonDescription}>
              Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadText}>DOWNLOAD</Text>
                <Icon name="download-outline" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.lessonItem}>
          <Image style={styles.thumbnail} source={require('../assets/snack-icon.png')} />
          <View style={styles.lessonInfo}>
            <Text style={styles.duration}>14:10</Text>
            <Text style={styles.lessonTitle}>Lesson 2</Text>
            <Text style={styles.lessonName}>Working With Brands</Text>
            <Text style={styles.lessonDescription}>
              Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadText}>DOWNLOAD</Text>
                <Icon name="download-outline" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.lessonItem}>
          <Image style={styles.thumbnail} source={require('../assets/snack-icon.png')} />
          <View style={styles.lessonInfo}>
            <Text style={styles.duration}>13:20</Text>
            <Text style={styles.lessonTitle}>Lesson 3</Text>
            <Text style={styles.lessonName}>10 things you shouldn't do!</Text>
            <Text style={styles.lessonDescription}>
              Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.
            </Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.downloadButton}>
                <Text style={styles.downloadText}>DOWNLOAD</Text>
                <Icon name="download-outline" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 8,
  },
  tabs: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabText: {
    color: '#7E7E7E',
    fontSize: 16,
  },
  activeTabText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeIndicator: {
    width: '50%',
    height: 2,
    backgroundColor: '#FFC107',
    marginTop: 4,
  },
  minusButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2C2C2C',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  lessonInfo: {
    flex: 1,
  },
  duration: {
    color: '#B3B3B3',
    fontSize: 12,
    marginBottom: 4,
  },
  lessonTitle: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lessonName: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 8,
  },
  lessonDescription: {
    color: '#B3B3B3',
    fontSize: 14,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  downloadText: {
    color: '#FFF',
    fontSize: 12,
    marginRight: 4,
  },
});

export default LessonsScreen;