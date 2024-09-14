import React from 'react';
import { View, Text, StyleSheet, Image, Switch, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NoticeScreen = () => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    navigation.navigate('Home');
  };

  const handleCancel = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Alarm Icon */}
      <Image source={require('../assets/snack-icon.png')} style={styles.alarmIcon} />

      {/* Header Text */}
      <Text style={styles.headerText}>立即解锁新闻提醒!</Text>

      {/* Description */}
      <Text style={styles.descriptionText}>
        一键启用通知，永远不会错过突发新闻。从本地警报到重大全球事件，我们为您提供全方位服务。
      </Text>

      {/* News Toggles */}
      <View style={styles.toggleContainer}>
        {['突发新闻', '热门新闻', '本地新闻'].map((label, index) => (
          <View key={index} style={styles.toggleRow}>
            <Text style={styles.toggleText}>{label}</Text>
            <Switch value={true} trackColor={{ false: '#767577', true: '#f44336' }} />
          </View>
        ))}
      </View>

      {/* Frequency Section */}
      <View style={styles.frequencyContainer}>
        <Text style={styles.frequencyText}>频率</Text>
        <View style={styles.buttonGroup}>
          {['策划', '知情', '即时'].map((label, index) => (
            <TouchableOpacity key={index} style={index === 1 ? styles.activeButton : styles.inactiveButton}>
              <Text style={index === 1 ? styles.activeButtonText : styles.inactiveButtonText}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>我确定我想要</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>暂时不需要</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  alarmIcon: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  headerText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descriptionText: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
    color: '#666',
  },
  toggleContainer: {
    marginTop: 20,
    width: '90%',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 8,
  },
  toggleText: {
    fontSize: 16,
  },
  frequencyContainer: {
    marginTop: 20,
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 8,
    alignItems: 'center',
  },
  frequencyText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  activeButton: {
    backgroundColor: '#f44336',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  inactiveButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  inactiveButtonText: {
    color: '#333',
    fontSize: 14,
  },
  confirmButton: {
    position: 'absolute',
    bottom: 70,
    width: '90%',
    backgroundColor: '#f44336',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 8,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    backgroundColor: '#fafafa',
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 18,
  },
});

export default NoticeScreen;