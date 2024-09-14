import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NoticeScreen = () => {
  const [isEmergencyNewsEnabled, setIsEmergencyNewsEnabled] = useState(true);
  const [isHotNewsEnabled, setIsHotNewsEnabled] = useState(true);
  const [isLocalNewsEnabled, setIsLocalNewsEnabled] = useState(true);
  const [frequency, setFrequency] = useState('知情');

  const toggleEmergencyNews = () => setIsEmergencyNewsEnabled(previousState => !previousState);
  const toggleHotNews = () => setIsHotNewsEnabled(previousState => !previousState);
  const toggleLocalNews = () => setIsLocalNewsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <Text style={styles.title}>立即解锁新闻提醒！</Text>
      <Text style={styles.subtitle}>
        一键启用通知，永远不会错过突发新闻。从本地警报到重大全球事件，我们为您提供全方位服务。
      </Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>突发新闻</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#ff0000' }}
          thumbColor='#f4f3f4'
          onValueChange={toggleEmergencyNews}
          value={isEmergencyNewsEnabled}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>热门新闻</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#ff0000' }}
          thumbColor='#f4f3f4'
          onValueChange={toggleHotNews}
          value={isHotNewsEnabled}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>本地新闻</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#ff0000' }}
          thumbColor='#f4f3f4'
          onValueChange={toggleLocalNews}
          value={isLocalNewsEnabled}
        />
      </View>

      <View style={styles.frequencyContainer}>
        <Text style={styles.frequencyLabel}>频率</Text>
        <View style={styles.buttonGroup}>
          {['策划', '知情', '即时'].map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.frequencyButton,
                frequency === item ? styles.frequencyButtonActive : null
              ]}
              onPress={() => setFrequency(item)}
            >
              <Icon name="tachometer" size={20} color={frequency === item ? '#fff' : '#000'} />
              <Text style={[styles.frequencyButtonText, frequency === item ? styles.frequencyButtonTextActive : null]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>我确定我想要</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.secondaryButtonText}>暂时不需要</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 25,
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
  },
  frequencyContainer: {
    width: '100%',
    padding: 10,
    marginBottom: 30,
  },
  frequencyLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  frequencyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  frequencyButtonActive: {
    backgroundColor: '#ff0000',
  },
  frequencyButtonText: {
    marginLeft: 5,
  },
  frequencyButtonTextActive: {
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: '#ff0000',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    fontSize: 16,
    color: '#666',
  },
});

export default NoticeScreen;