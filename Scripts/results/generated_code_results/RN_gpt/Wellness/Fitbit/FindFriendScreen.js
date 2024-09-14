import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const FindFriendScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>寻找朋友</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <Text style={styles.headerComplete}>完成</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>通讯录</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => {/* switch to email tab */}}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>电子邮箱</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab} onPress={() => {/* switch to username tab */}}>
          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />
          <Text style={styles.tabText}>Username</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>利用您的电话号码查找好友！</Text>
        <Text style={styles.detailedInstructionText}>输入您的电话号码，从您的联系人列表中添加好友。</Text>
      </View>

      <TouchableOpacity style={styles.connectButton} onPress={() => {/* connect to contacts */}}>
        <Text style={styles.connectButtonText}>连接通讯录</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00b0ff',
  },
  headerComplete: {
    fontSize: 16,
    color: '#00b0ff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
  },
  tab: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  tabText: {
    fontSize: 12,
    color: '#00b0ff',
    marginTop: 4,
  },
  instructionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  instructionText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
  detailedInstructionText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  connectButton: {
    backgroundColor: '#ff4081',
    paddingVertical: 12,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  connectButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default FindFriendScreen;