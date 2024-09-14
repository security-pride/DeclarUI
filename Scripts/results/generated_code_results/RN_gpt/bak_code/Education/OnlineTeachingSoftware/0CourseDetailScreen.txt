import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CourseDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
        <Text style={styles.timeText}>19:27</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
      </View>

      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </Pressable>
        <View style={styles.spacer} />
        <TouchableOpacity>
          <Icon name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageTag}>UI Design</Text>
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.courseTitle}>Expert Wireframing for Webiste Design theme food</Text>

      <View style={styles.instructorInfo}>
        <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />
        <View style={styles.instructorDetails}>
          <Text style={styles.instructorName}>Jerremy Mamika</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.6</Text>
            <Icon name="star" size={16} color="gold" />
          </View>
        </View>
      </View>

      <Text style={styles.aboutCourseTitle}>About Course</Text>
      <Text style={styles.aboutCourseDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>30+</Text>
          <Text style={styles.statLabel}>Leason</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>4.5</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>1.4K</Text>
          <Text style={styles.statLabel}>Student</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.priceLabel}>Price</Text>
        <Text style={styles.coursePrice}>$129</Text>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signalIcon: {
    width: 20,
    height: 20,
  },
  timeText: {
    fontSize: 16,
  },
  wifiIcon: {
    width: 20,
    height: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  spacer: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 16,
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  imageOverlay: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  imageTag: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: 4,
    borderRadius: 4,
  },
  courseTitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  instructorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  instructorDetails: {
    marginLeft: 8,
  },
  instructorName: {
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    marginRight: 4,
  },
  aboutCourseTitle: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutCourseDescription: {
    marginTop: 8,
    fontSize: 14,
    color: 'gray',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 16,
    color: 'gray',
  },
  coursePrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: 'purple',
    padding: 16,
    borderRadius: 8,
  },
  buyNowButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseDetailScreen;