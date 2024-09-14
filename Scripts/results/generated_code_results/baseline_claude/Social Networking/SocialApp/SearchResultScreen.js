import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const SearchResultScreen = () => {

  const navigation = useNavigation();



  const relatedResults = [

    {

      id: '1',

      name: 'Klee Gracia',

      age: 24,

      bio: 'Hi there! I'm Gracia ☀️, a fun-loving adventurer looking for great connections.',

      interests: ['Running', 'Outdoor', 'Anime'],

      isPotentialMatch: true,

      isVerified: true,

    },

    // Add more related results here

  ];



  const moreResults = [

    {

      id: '2',

      name: 'Mika Gracia',

      age: 18,

      location: 'Bali, Indonesia',

      matchPercentage: 98,

    },

    {

      id: '3',

      name: 'Gracy Logan',

      age: 28,

      location: 'Jakarta, Indonesia',

      matchPercentage: 98,

    },

    {

      id: '4',

      name: 'R.O Gracia',

      age: 17,

      location: 'Bekasi, Indonesia',

      matchPercentage: 93,

      isVerified: true,

    },

    {

      id: '5',

      name: 'Audrey Gracia',

      age: 17,

      location: 'Bali, Indonesia',

      matchPercentage: 93,

    },

  ];



  const renderRelatedResult = ({ item }) => (

    <TouchableOpacity style={styles.relatedResultCard} onPress={() => navigation.navigate('Profile', { id: item.id })}>

      <Image source={require('../assets/snack-icon.png')} style={styles.relatedResultImage} />

      {item.isPotentialMatch && (

        <View style={styles.potentialMatchBadge}>

          <Icon name="flash" size={12} color="#FFD700" />

          <Text style={styles.potentialMatchText}>Potential Match!</Text>

        </View>

      )}

      <View style={styles.relatedResultInfo}>

        <View style={styles.nameContainer}>

          <Text style={styles.name}>{item.name}, {item.age}</Text>

          {item.isVerified && <Icon name="checkmark-circle" size={16} color="#1DA1F2" />}

        </View>

        <View style={styles.interestsContainer}>

          {item.interests.map((interest, index) => (

            <View key={index} style={styles.interestBadge}>

              <Text style={styles.interestText}>{interest}</Text>

            </View>

          ))}

        </View>

        <Text style={styles.bio} numberOfLines={2}>{item.bio}</Text>

      </View>

    </TouchableOpacity>

  );



  const renderMoreResult = ({ item }) => (

    <TouchableOpacity style={styles.moreResultCard} onPress={() => navigation.navigate('Profile', { id: item.id })}>

      <Image source={require('../assets/snack-icon.png')} style={styles.moreResultImage} />

      <View style={styles.moreResultInfo}>

        <Text style={styles.moreResultName}>{item.name}, {item.age}</Text>

        <Text style={styles.moreResultLocation}>{item.location}</Text>

      </View>

      <View style={styles.matchPercentage}>

        <Text style={styles.matchPercentageText}>{item.matchPercentage}% Match</Text>

      </View>

      {item.isVerified && (

        <Icon name="checkmark-circle" size={16} color="#1DA1F2" style={styles.verifiedIcon} />

      )}

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Gracia"

            placeholderTextColor="#999"

          />

        </View>

      </View>

      <Text style={styles.sectionTitle}>Related Result</Text>

      <FlatList

        data={relatedResults}

        renderItem={renderRelatedResult}

        keyExtractor={(item) => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

      />

      <Text style={styles.sectionTitle}>More About Gracia</Text>

      <FlatList

        data={moreResults}

        renderItem={renderMoreResult}

        keyExtractor={(item) => item.id}

        numColumns={2}

        columnWrapperStyle={styles.moreResultsWrapper}

      />

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F8F8F8',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    marginLeft: 16,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginHorizontal: 16,

    marginTop: 16,

    marginBottom: 12,

  },

  relatedResultCard: {

    width: 300,

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    marginLeft: 16,

    overflow: 'hidden',

  },

  relatedResultImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  potentialMatchBadge: {

    position: 'absolute',

    top: 12,

    left: 12,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

  },

  potentialMatchText: {

    color: '#FFFFFF',

    fontSize: 12,

    marginLeft: 4,

  },

  relatedResultInfo: {

    padding: 12,

  },

  nameContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  name: {

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 4,

  },

  interestsContainer: {

    flexDirection: 'row',

    marginTop: 8,

  },

  interestBadge: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

    marginRight: 8,

  },

  interestText: {

    fontSize: 12,

    color: '#666',

  },

  bio: {

    fontSize: 14,

    color: '#666',

    marginTop: 8,

  },

  moreResultsWrapper: {

    justifyContent: 'space-between',

    paddingHorizontal: 16,

  },

  moreResultCard: {

    width: '48%',

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    overflow: 'hidden',

    marginBottom: 16,

  },

  moreResultImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  moreResultInfo: {

    padding: 12,

  },

  moreResultName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  moreResultLocation: {

    fontSize: 12,

    color: '#666',

    marginTop: 4,

  },

  matchPercentage: {

    position: 'absolute',

    top: 8,

    right: 8,

    backgroundColor: 'rgba(0, 0, 0, 0.7)',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

  },

  matchPercentageText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  verifiedIcon: {

    position: 'absolute',

    bottom: 8,

    right: 8,

  },

});



export default SearchResultScreen;