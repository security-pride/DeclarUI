import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>好友</Text>
        <Icon name="person-add" size={24} color="#B0BEC5" style={styles.addIcon} />
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Text style={styles.title}>和朋友一起继续向前！</Text>
        <Text style={styles.subtitle}>
          记录进度、发送鼓励，并通过友好竞赛让自己更有活力。
        </Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={20} color="#FFFFFF" />
        <Text style={styles.addButtonText}>添加好友</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0097A7',
  },
  addIcon: {
    marginRight: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#B0BEC5',
    textAlign: 'center',
  },
  addButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default FriendsScreen;