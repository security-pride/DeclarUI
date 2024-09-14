import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomepageScreen = () => {
  const stories = [
    { name: 'My Story', icon: 'person-add', image: require('../assets/snack-icon.png') },
    { name: 'Hasley', image: require('../assets/snack-icon.png') },
    { name: 'Javier', image: require('../assets/snack-icon.png') },
    { name: 'Natalie', image: require('../assets/snack-icon.png') },
  ];

  const categories = ['All', 'Photography', 'Outdoor', 'Anime'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu-outline" size={30} />
        <View style={styles.icons}>
          <Icon name="notifications-outline" size={30} />
          <Icon name="settings-outline" size={30} style={styles.icon} />
        </View>
      </View>
      
      <Text style={styles.title}>Forging New Bonds and Friendships</Text>

      <FlatList
        data={stories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image source={item.image} style={styles.storyImage} />
            {item.icon && (
              <View style={styles.addIcon}>
                <Icon name={item.icon} size={15} color="#fff" />
              </View>
            )}
            <Text style={styles.storyText}>{item.name}</Text>
          </View>
        )}
      />

      <View style={styles.searchContainer}>
        <Icon name="search-outline" size={20} />
        <TextInput placeholder="Search for a friend or partners" style={styles.searchInput} />
      </View>

      <Text style={styles.subTitle}>Recommend for You</Text>

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={[styles.categoryText, index === 0 && styles.selectedCategoryText]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.recommendationCard}>
        <Text style={styles.matchLabel}>⚡ Potential Match!</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.recommendationImage} />
        <Text style={styles.recommendationText}>
          Klee Gracia, 24 <Icon name="checkmark-circle" size={15} color="blue" />
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Icon name="home-outline" size={28} color="purple" />
          <Text style={styles.footerIconText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Icon name="heart-outline" size={28} color="gray" />
          <Text style={styles.footerIconText}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Icon name="chatbubble-outline" size={28} color="gray" />
          <Text style={styles.footerIconText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Icon name="person-outline" size={28} color="gray" />
          <Text style={styles.footerIconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  storyText: {
    marginTop: 5,
    fontSize: 12,
  },
  addIcon: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 3,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  categories: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categoryButton: {
    marginRight: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  categoryText: {
    color: 'gray',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: 'purple',
  },
  recommendationCard: {
    marginVertical: 20,
    borderRadius: 15,
    backgroundColor: '#f1f1f1',
    overflow: 'hidden',
  },
  recommendationImage: {
    width: '100%',
    height: 200,
  },
  recommendationText: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#f1c40f',
    padding: 5,
    borderRadius: 5,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#f1f1f1',
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIconText: {
    color: 'gray',
    fontSize: 12,
    marginTop: 3,
  },
});

export default HomepageScreen;