import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyListScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
          <Text style={styles.selectedHeaderText}>My List</Text>
          <Image
            style={styles.avatar}
            source={require('../assets/snack-icon.png')}
          />
        </View>

        {/* Instructors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instructors</Text>
          <View style={styles.item}>
            <Image
              style={styles.itemImage}
              source={require('../assets/snack-icon.png')}
            />
            <View>
              <Text style={styles.itemTitle}>Boniface Esanji</Text>
              <Text style={styles.itemSubtitle}>Teaches Guitar</Text>
            </View>
          </View>
        </View>

        {/* Lessons Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lessons</Text>
          <View style={styles.item}>
            <Image
              style={styles.itemImage}
              source={require('../assets/snack-icon.png')}
            />
            <View>
              <Text style={styles.lessonTitle}>
                Gift yourself this UI Kit and enjoy!
              </Text>
              <Text style={styles.itemSubtitle}>John Wiseberg</Text>
              <Text style={styles.duration}>08:12</Text>
            </View>
          </View>
          <View style={styles.item}>
            <Image
              style={styles.itemImage}
              source={require('../assets/snack-icon.png')}
            />
            <View>
              <Text style={styles.lessonTitle}>
                Make your Mess Your Message
              </Text>
              <Text style={styles.itemSubtitle}>Mendy Santiago</Text>
              <Text style={styles.duration}>12:38</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={30} color="#FFFFFF" />
        <Icon name="search-outline" size={30} color="#A0A0A0" />
        <Icon name="download-outline" size={30} color="#A0A0A0" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: '#A0A0A0',
    fontSize: 20,
  },
  selectedHeaderText: {
    color: '#FFE500',
    fontSize: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  itemSubtitle: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  lessonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  duration: {
    color: '#A0A0A0',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1A1A1A',
    borderTopWidth: 1,
    borderColor: '#2A2A2A',
  },
});

export default MyListScreen;