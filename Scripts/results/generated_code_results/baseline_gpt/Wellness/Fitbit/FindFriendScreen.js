import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FindFriendScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="address-book" size={30} color="#71C1C1" />
          <Text style={styles.iconText}>通讯录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="envelope" size={30} color="#71C1C1" />
          <Text style={styles.iconText}>电子邮箱</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="user" size={30} color="#71C1C1" />
          <Text style={styles.iconText}>Username</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>利用您的电话号码查找好友！</Text>
        <Text style={styles.subText}>输入您的电话号码，从您的联系人列表中添加好友。</Text>
      </View>
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>连接通讯录</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-around',
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
    color: '#71C1C1',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  connectButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 15,
    alignItems: 'center',
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FindFriendScreen;