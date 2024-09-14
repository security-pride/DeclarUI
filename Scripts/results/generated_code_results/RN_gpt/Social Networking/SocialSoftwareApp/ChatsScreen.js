import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatsScreen = ({ navigation }) => {
  const stories = [
    { name: 'Your story', image: require('../assets/snack-icon.png'), add: true },
    { name: 'Joshua', image: require('../assets/snack-icon.png'), active: true },
    { name: 'Martin', image: require('../assets/snack-icon.png'), active: true },
    { name: 'Karen', image: require('../assets/snack-icon.png'), active: true },
    { name: 'Martha', image: require('../assets/snack-icon.png'), active: true },
  ];

  const chats = [
    { name: 'Martin Randolph', lastMessage: "You: What's man!", time: '9:40 AM', image: require('../assets/snack-icon.png') },
    { name: 'Andrew Parker', lastMessage: 'You: Ok, thanks!', time: '9:25 AM', read: true, image: require('../assets/snack-icon.png') },
    { name: 'Karen Castillo', lastMessage: 'You: Ok, See you in To...', time: 'Fri', read: true, image: require('../assets/snack-icon.png') },
    { name: 'Maisy Humphrey', lastMessage: 'Have a good day, Maisy!', time: 'Fri', read: true, image: require('../assets/snack-icon.png') },
    { name: 'Joshua Lawrence', lastMessage: 'The business plan loo...', time: 'Thu', read: true, image: require('../assets/snack-icon.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.profilePicture}>
          <View style={styles.statusIndicator} />
        </ImageBackground>
        <Text style={styles.title}>Chats</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => {/* Open camera */}}>
            <Icon name="camera" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('NewMessage')}>
            <Icon name="pencil" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <TextInput style={styles.searchBar} placeholder="Search" />

      <FlatList
        horizontal
        data={stories}
        renderItem={({ item }) => (
          <View style={styles.story}>
            <ImageBackground source={item.image} style={styles.storyImage}>
              {item.add && <Icon name="plus" size={20} style={styles.addIcon} />}
              {item.active && <View style={styles.activeIndicator} />}
            </ImageBackground>
            <Text style={styles.storyName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        style={styles.storiesList}
      />

      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
            <View style={styles.chatItem}>
              <ImageBackground source={item.image} style={styles.chatImage} />
              <View style={styles.chatTextContainer}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text>{item.lastMessage} · {item.time}</Text>
              </View>
              {item.read && <Icon name="check" size={20} />}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />

      <View style={styles.adContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />
        <View>
          <Text style={styles.adLabel}>Pixsellz <Text style={styles.adBadge}>Ad</Text></Text>
          <Text>Make design process easier...</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="chat" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('People')}>
          <Icon name="account-group" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="compass" size={24} />
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    padding: 16,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    margin: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  storiesList: {
    paddingLeft: 16,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    color: 'black',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  storyName: {
    marginTop: 4,
    fontSize: 12,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatTextContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  adContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  adImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  adLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  adBadge: {
    backgroundColor: '#e0e0e0',
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    marginLeft: 4,
  },
  viewMore: {
    color: '#007bff',
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
});

export default ChatsScreen;