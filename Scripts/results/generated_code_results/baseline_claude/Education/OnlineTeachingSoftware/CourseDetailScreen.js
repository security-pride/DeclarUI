import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const CourseDetailScreen = () => {

  const navigation = useNavigation();



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="ellipsis-vertical" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      

      <View style={styles.imageContainer}>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.courseImage}

        />

        <TouchableOpacity style={styles.favoriteButton}>

          <Icon name="heart-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.contentContainer}>

        <Text style={styles.tag}>UI Design</Text>

        <Text style={styles.title}>Expert Wireframing for Webisite Design theme food</Text>

        

        <View style={styles.instructorContainer}>

          <Image

            source={require('../assets/snack-icon.png')}

            style={styles.instructorImage}

          />

          <Text style={styles.instructorName}>Jerremy Mamika</Text>

          <View style={styles.ratingContainer}>

            <Icon name="star" size={16} color="#FFD700" />

            <Text style={styles.rating}>4.6</Text>

          </View>

        </View>



        <Text style={styles.description}>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

        </Text>



        <View style={styles.statsContainer}>

          <View style={styles.statItem}>

            <Text style={styles.statValue}>30+</Text>

            <Text style={styles.statLabel}>Lessons</Text>

          </View>

          <View style={styles.statItem}>

            <Text style={styles.statValue}>4.5</Text>

            <Text style={styles.statLabel}>Rating</Text>

          </View>

          <View style={styles.statItem}>

            <Text style={styles.statValue}>1.4K</Text>

            <Text style={styles.statLabel}>Students</Text>

          </View>

        </View>



        <View style={styles.priceContainer}>

          <Text style={styles.price}>$129</Text>

          <TouchableOpacity style={styles.buyButton}>

            <Text style={styles.buyButtonText}>Buy Now</Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 16,

  },

  imageContainer: {

    position: 'relative',

  },

  courseImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  favoriteButton: {

    position: 'absolute',

    top: 16,

    right: 16,

    backgroundColor: '#fff',

    borderRadius: 20,

    padding: 8,

  },

  contentContainer: {

    padding: 16,

  },

  tag: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

    alignSelf: 'flex-start',

    marginBottom: 8,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 16,

  },

  instructorContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  instructorImage: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 8,

  },

  instructorName: {

    fontSize: 16,

    fontWeight: '500',

    marginRight: 8,

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  rating: {

    marginLeft: 4,

  },

  description: {

    marginBottom: 16,

    lineHeight: 20,

  },

  statsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 16,

  },

  statItem: {

    alignItems: 'center',

  },

  statValue: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  statLabel: {

    color: '#666',

  },

  priceContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  price: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  buyButton: {

    backgroundColor: '#6C5CE7',

    paddingHorizontal: 24,

    paddingVertical: 12,

    borderRadius: 8,

  },

  buyButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

});



export default CourseDetailScreen;