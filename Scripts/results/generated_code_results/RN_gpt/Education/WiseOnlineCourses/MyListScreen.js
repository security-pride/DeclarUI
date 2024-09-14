import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyListScreen = () => {
  const navigation = useNavigation();

  const handleCourseDetailNavigation = () => {
    navigation.navigate('CourseDetail');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.inactiveTabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.activeTabText}>My List</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.userAvatar}
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructors</Text>
          <View style={styles.instructorContainer}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.instructorAvatar}
            />
            <View>
              <Text style={styles.instructorName}>Boniface Esanji</Text>
              <Text style={styles.instructorTitle}>Teaches Guitar</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lessons</Text>
          <TouchableOpacity style={styles.lessonContainer} onPress={handleCourseDetailNavigation}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.lessonThumbnail}
            />
            <View>
              <Text style={styles.duration}>08:12</Text>
              <Text style={styles.lessonTitle}>Gift yourself this UI Kit and enjoy!</Text>
              <Text style={styles.instructorName}>John Wiseberg</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lessonContainer} onPress={handleCourseDetailNavigation}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.lessonThumbnail}
            />
            <View>
              <Text style={styles.duration}>12:38</Text>
              <Text style={styles.lessonTitle}>Make your Mess Your Message</Text>
              <Text style={styles.instructorName}>Mendy Santiago</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  tab: {
    flex: 1,
  },
  inactiveTabText: {
    textAlign: 'center',
    color: '#A0A0A0',
  },
  activeTabText: {
    textAlign: 'center',
    color: '#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  userAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 16,
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  instructorName: {
    color: '#ffffff',
    fontSize: 16,
  },
  instructorTitle: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  lessonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  lessonThumbnail: {
    width: 100,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  duration: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: '#ffffff',
    backgroundColor: '#000000',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    fontSize: 12,
  },
  lessonTitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#1E1E1E',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default MyListScreen;