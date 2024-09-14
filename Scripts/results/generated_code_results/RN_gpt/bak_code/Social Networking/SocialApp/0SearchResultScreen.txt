import React from 'react';
import { View, Text, Image, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchResultScreen = ({ navigation }) => {
  const profiles = [
    {
      name: 'Klee Gracia, 24',
      bio: "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.",
      interests: ['Running', 'Outdoor', 'Anime'],
      potentialMatch: true,
      matchPercentage: 100,
      image: require('../assets/snack-icon.png'),
    },
    {
      name: 'Mika Gracia, 18',
      location: 'Bali, Indonesia',
      matchPercentage: 98,
      image: require('../assets/snack-icon.png'),
    },
    {
      name: 'Gracy Logan, 28',
      location: 'Jakarta, Indonesia',
      matchPercentage: 98,
      image: require('../assets/snack-icon.png'),
    },
    {
      name: 'R.O Gracia, 17',
      location: 'Bekasi, Indonesia',
      matchPercentage: 93,
      image: require('../assets/snack-icon.png'),
    },
    {
      name: 'Audrey Gracia, 17',
      location: 'Bali, Indonesia',
      matchPercentage: 93,
      image: require('../assets/snack-icon.png'),
    },
  ];

  const renderProfile = ({ item }) => (
    <Pressable style={styles.profileCard} onPress={() => navigation.navigate('Profile')}>
      <Image source={item.image} style={styles.profileImage} />
      <Text style={styles.profileName}>{item.name}</Text>
      {item.bio && <Text style={styles.profileBio}>{item.bio}</Text>}
      <Text style={styles.matchPercentage}>{item.matchPercentage}% Match</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} />
        </Pressable>
        <TextInput style={styles.searchInput} placeholder="Gracia" />
      </View>
      <Text style={styles.sectionTitle}>Related Result</Text>
      <FlatList
        data={profiles.slice(0, 1)}
        renderItem={renderProfile}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>More About Gracia</Text>
      <FlatList
        data={profiles.slice(1)}
        renderItem={renderProfile}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  profileCard: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  profileImage: {
    width: '100%',
    height: 150,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  },
  profileBio: {
    marginHorizontal: 8,
    marginBottom: 4,
    color: '#666',
  },
  matchPercentage: {
    marginHorizontal: 8,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#333',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default SearchResultScreen;