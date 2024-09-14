import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CourseDetailScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal-outline" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
        <View style={styles.tag}>
          <Text style={styles.tagText}>UI Design</Text>
        </View>
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart-outline" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Expert Wireframing for Webiste Design theme food</Text>

      <View style={styles.authorContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.authorImage} />
        <Text style={styles.authorText}>Jerremy Mamika</Text>
        <Icon name="star" size={20} color="gold" />
        <Text style={styles.ratingText}>4.6</Text>
      </View>

      <Text style={styles.sectionTitle}>About Course</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>30+</Text>
          <Text style={styles.statLabel}>Lesson</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>4.5</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>1.4K</Text>
          <Text style={styles.statLabel}>Student</Text>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.priceValue}>$129</Text>
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  courseImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  authorText: {
    fontSize: 16,
    marginRight: 10,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginVertical: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTitle: {
    fontSize: 16,
    color: '#777',
  },
  priceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#444',
  },
  buyButton: {
    backgroundColor: '#6c63ff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
  },
  buyButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;