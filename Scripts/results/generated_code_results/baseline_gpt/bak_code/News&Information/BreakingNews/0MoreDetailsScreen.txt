import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.itemLeft}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.itemText}>{text}</Text>
    </View>
    <Icon name="chevron-forward" size={20} color="#ccc" />
  </TouchableOpacity>
);

const MoreDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="设置" 
        onPress={() => {/* Navigate to Settings */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="同城" 
        onPress={() => {/* Navigate to City */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="我的话题" 
        onPress={() => {/* Navigate to My Topics */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="已收藏的新闻" 
        onPress={() => {/* Navigate to Favorites */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="消息" 
        onPress={() => {/* Navigate to Messages */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="公告" 
        onPress={() => {/* Navigate to Announcements */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="分享应用" 
        onPress={() => {/* Navigate to Share App */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="隐私政策" 
        onPress={() => {/* Navigate to Privacy Policy */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="支持我们" 
        onPress={() => {/* Navigate to Support Us */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="常见问题解答" 
        onPress={() => {/* Navigate to FAQ */}} 
      />
      <MenuItem 
        icon={require('../assets/snack-icon.png')} 
        text="退出应用" 
        onPress={() => {/* Logout */}} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#efefef',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MoreDetailsScreen;