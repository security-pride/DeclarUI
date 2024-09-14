import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    title: 'What is Advertising',
    lesson: 'Lesson 1',
    duration: '08:12',
  },
  {
    id: '2',
    title: 'Working With Brands',
    lesson: 'Lesson 2',
    duration: '14:10',
  },
  {
    id: '3',
    title: "10 things you shouldn't do!",
    lesson: 'Lesson 3',
    duration: '13:20',
  },
];

const LessonItem = ({ item }) => {
  return (
    <View style={styles.lessonContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <View style={styles.lessonDetails}>
        <View style={styles.header}>
          <Text style={styles.lessonText}>{item.lesson}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>
          Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.
        </Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadText}>DOWNLOAD</Text>
          <Icon name="download-outline" size={20} color="#FFD700" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LessonsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <LessonItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  lessonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#2D2D2D',
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  lessonDetails: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lessonText: {
    color: '#BBBBBB',
    fontSize: 14,
  },
  duration: {
    color: '#BBBBBB',
    fontSize: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  description: {
    color: '#BBBBBB',
    fontSize: 14,
    marginVertical: 8,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  downloadText: {
    color: '#FFD700',
    marginRight: 4,
  },
});

export default LessonsScreen;