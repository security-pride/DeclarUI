import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} />
        <Text style={styles.headerTitle}>设置</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>注册</Text>
        </TouchableOpacity>
        <Text style={styles.joinText}>登录并加入该社群</Text>
      </View>

      {/* Content Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>内容</Text>
      </View>

      {renderSettingItem('star', '改变国家')}
      {renderSettingItem('diamond', '话题')}
      {renderSettingItem('settings', '来源管理')}

      {/* Notification Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>消息</Text>
      </View>

      {renderSwitchItem('notifications', '通知声音')}
      {renderSwitchItem('vibration', '震动提醒')}
      {renderSwitchItem('photo', '消息带图')}
      {renderSettingItem('notifications', '通知管理')}
    </ScrollView>
  );
};

// Function to render setting items
const renderSettingItem = (iconName, title) => (
  <TouchableOpacity style={styles.settingItem}>
    <View style={styles.itemLeft}>
      <Icon name={iconName} size={24} style={styles.itemIcon} />
      <Text style={styles.itemText}>{title}</Text>
    </View>
    <Icon name="chevron-right" size={24} style={styles.chevronIcon} />
  </TouchableOpacity>
);

// Function to render switch items
const renderSwitchItem = (iconName, title) => (
  <View style={styles.settingItem}>
    <View style={styles.itemLeft}>
      <Icon name={iconName} size={24} style={styles.itemIcon} />
      <Text style={styles.itemText}>{title}</Text>
    </View>
    <Switch value={true} trackColor={{ false: '#ccc', true: '#4cd964' }} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  registerText: {
    color: '#fff',
  },
  joinText: {
    color: '#888',
  },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ededed',
  },
  sectionHeaderText: {
    fontSize: 16,
    color: '#888',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dfdfdf',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
  chevronIcon: {
    color: '#ccc',
  },
});

export default SettingsScreen;