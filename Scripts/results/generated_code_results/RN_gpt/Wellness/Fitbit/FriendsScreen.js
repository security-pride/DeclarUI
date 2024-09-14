import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FriendsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>好友</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="account-plus" size={24} color="#7CE0F9" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.illustration} />
        <Text style={styles.emptyStateTitle}>和朋友一起继续向前！</Text>
        <Text style={styles.emptyStateDescription}>
          记录进度、发送鼓励，并通过友好竞赛让自己更有活力。
        </Text>
        <TouchableOpacity 
          style={styles.addFriendButton}
          onPress={() => navigation.navigate('FindFriend')}
        >
          <Icon name="account-plus" size={24} color="#fff" />
          <Text style={styles.addFriendText}>添加好友</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Discovery')}>
          <Icon name="compass" size={24} color="grey" />
          <Text style={styles.navText}>发现</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="home-circle-outline" size={24} color="grey" />
          <Text style={styles.navText}>今天</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <Icon name="account-group" size={24} color="#35495E" />
          <Text style={styles.navText}>好友</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
          <Icon name="star" size={24} color="grey" />
          <Text style={styles.navText}>Premium</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    color: '#35495E',
  },
  addButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 16,
    color: '#35495E',
    marginBottom: 8,
  },
  emptyStateDescription: {
    fontSize: 14,
    color: '#9E9E9E',
    textAlign: 'center',
    marginBottom: 32,
  },
  addFriendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5A5F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  addFriendText: {
    color: '#fff',
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  navText: {
    fontSize: 10,
    color: 'grey',
    marginTop: 4,
  },
});

export default FriendsScreen;