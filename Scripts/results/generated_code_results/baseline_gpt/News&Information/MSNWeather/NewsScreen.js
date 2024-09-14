import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} />
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search news"
        />
        <View style={styles.iconGroup}>
          <Icon name="mic-outline" size={24} />
          <Icon name="ellipsis-horizontal" size={24} />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.tabSection}>
          <TouchableOpacity style={styles.tabButtonActive}>
            <Text style={styles.tabTextActive}>For You</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Local</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Top Stories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>US</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headlinesText}>Headlines</Text>
        <View style={styles.newsItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />
          <View style={styles.newsDetails}>
            <Text style={styles.newsSource}>The Associated Press · 4h</Text>
            <Text style={styles.newsTitle}>
              Argentina wins record 16th Copa America title, beats Colombia 1-0 after Messi gets hurt
            </Text>
            <View style={styles.newsReactions}>
              <FontAwesome name="thumbs-o-up" size={16} />
              <Text style={styles.reactionText}>178</Text>
              <FontAwesome name="comment-o" size={16} />
              <Text style={styles.reactionText}>47</Text>
              <Icon name="share-outline" size={16} />
              <Text style={styles.reactionText}>9</Text>
            </View>
          </View>
        </View>

        {/* Additional news items can be repeated here in similar blocks */}

        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </ScrollView>
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 35,
  },
  iconGroup: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  tabSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  tabButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
  },
  tabButtonActive: {
    backgroundColor: '#2f6af6',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  tabText: {
    color: '#888',
  },
  tabTextActive: {
    color: '#fff',
  },
  headlinesText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
  },
  newsImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  newsDetails: {
    flex: 1,
    marginLeft: 10,
  },
  newsSource: {
    fontSize: 12,
    color: '#888',
  },
  newsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  newsReactions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionText: {
    marginHorizontal: 8,
    fontSize: 12,
  },
  seeMoreText: {
    color: '#2f6af6',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default NewsScreen;